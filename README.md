# Deployment

```
// infra folder
terraform init
terraform plan
terraform apply
// root folder
$Env:AWS_PROFILE="personalweb"
aws s3 sync ./build/ s3://bucket/
```