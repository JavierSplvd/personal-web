# Deployment

```
// infra folder
terraform init
terraform plan
terraform apply
// root folder
npm run build
$Env:AWS_PROFILE="personalweb"
aws s3 sync ./dist/ s3://www.javierdev.net/
```