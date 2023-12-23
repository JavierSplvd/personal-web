terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
}

locals {
  s3_origin_id = "myS3Origin"
}
resource "aws_s3_bucket" "personal_web" {
  bucket = "www.javierdev.net"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
  tags = {
    Name        = "www.javierdev.net"
    Environment = "terraform"
  }
}

resource "aws_s3_bucket_ownership_controls" "example" {
  bucket = aws_s3_bucket.personal_web.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "access_block" {
  bucket = aws_s3_bucket.personal_web.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.example,
    aws_s3_bucket_public_access_block.access_block,
  ]

  bucket = aws_s3_bucket.personal_web.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "policy" {
  bucket     = aws_s3_bucket.personal_web.id
  policy     = file("policy.json")
  depends_on = [aws_s3_bucket_public_access_block.access_block]
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.personal_web.bucket_regional_domain_name
    origin_id   = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "www.javierdev.net cloudfront"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }


  price_class = "PriceClass_200"

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  tags = {
    Name        = "javierdev.net cloudfront"
    Environment = "production"
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:955028836926:certificate/1cd6a0ce-b384-4fcd-a2ae-09f55ac4ccdf"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  aliases = [
    "javierdev.net",
    "www.javierdev.net"
  ]
}
