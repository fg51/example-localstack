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

