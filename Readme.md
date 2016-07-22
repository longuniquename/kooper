# Run
```
docker run -d --name mongo mongo
docker run -d --name redis redis
docker run -d --name acl osbb/acl-service
docker run -d --link mongo --link acl --name users osbb/users-service
docker run -d --link redis --link users --name auth osbb/auth-service
docker run -d --link mongo --link acl --name cooperatives osbb/cooperatives-service
docker run -d -p 3000:3000 --link cooperatives --link users --name api osbb/api-service
```
