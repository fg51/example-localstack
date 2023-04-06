# example-localstack
locakstack for aws

# localstack with docker-compose
```sh
$ docker-compose up  # run foreground
```

```sh
$ docker-compose up -d  # run background
$ docker-compose restart
```

```sh
$ docker-compose stop
```

## stop & delete (container, network)
```sh
$ docker-compose down
```

## stop & delete (container, network, image)
```sh
$ docker-compose down --rmi all
```

## stop & delete (container, network, volume)
```sh
$ docker-compose down -v
```


# check localstack
```sh
$ curl http://localhost:4566/health
```

$ /localstack status service



# CDK 

```sh
$ npx cdklocal init
$ npx cdklocal bootstrap
$ npx cdklocal deploy
```

- output http://{api-id}.execute-api.localhost.localstack.cloud:4566/{stage-id}/
+ fixed  http://localhost:4566/restapis/{api-id}/{stage-id}/_user_request_/

curl http://localhost:4566/restapis/<api-id>/<stage-id>/_user_request_/
