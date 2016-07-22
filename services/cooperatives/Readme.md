# Build
```
docker build -t registry.gitlab.com/kooper/cooperatives-service .
```

# Dependencies
* [mongo](https://hub.docker.com/_/mongo/)
* [acl-service](https://gitlab.com/kooper/acl-service/container_registry)

```
docker run -d -p 30021:27017 --name mongo mongo
docker run -d -p 30010:10101 --name acl-service registry.gitlab.com/kooper/acl-service
```

# Run
```
docker run -d -p 30020:10101 --link mongo --link acl-service --name cooperatives-service registry.gitlab.com/kooper/cooperatives-service
```
