# Build
```
docker build -t registry.gitlab.com/kooper/users-service .
```
# Run
```
docker run -d -p 30040:10101 --name users-service registry.gitlab.com/kooper/users-service
```
