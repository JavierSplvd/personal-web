# Run locally

```
npm install
npm run start
```

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

http://localhost:3000/eva?title1=Qixing&title2=%E4%B8%83%E6%98%9F%E5%B1%B1&title3=%20