# Deployment

Go to infra folder:
```
terraform init
terraform plan
terraform apply

aws s3 sync ./build/ s3://name-bucket/
```