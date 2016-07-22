# Build
```
docker build -t registry.gitlab.com/kooper/auth-service .
```
# Run
```
docker run -d -p 30030:10101 --name auth-service registry.gitlab.com/kooper/auth-service
```
