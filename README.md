# Deployment

```
// infra folder
terraform init
terraform plan
terraform apply
// root folder
aws s3 sync ./build/ s3://name-bucket/
```