provider "aws" {
  region = "eu-central-1"
}

locals {
  s3_origin_id = "myS3Origin"
}
resource "aws_s3_bucket" "personal_web" {
  bucket = "www.javiersepulveda.es"
  acl    = "public-read"
  policy = file("policy.json")

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
  tags = {
    Name        = "www.javiersepulveda.es"
    Environment = "terraform"
  }
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.personal_web.bucket_regional_domain_name
    origin_id   = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "www.javiersepulveda.es cloudfront"
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
    Name        = "javiersepulveda.es cloudfront"
    Environment = "production"
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:955028836926:certificate/d6b961a4-0c48-4362-9518-f57f655da4f5"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  aliases = [
    "javiersepulveda.es",
    "www.javiersepulveda.es"
  ]
}