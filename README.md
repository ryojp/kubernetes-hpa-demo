# Kubernetes HPA Demo

This repo is composed of two demonstrations.
1. [HPA with CPU metrics](./part1_cpu_metrics/README.md)

## Setup

1. Deploy Istio
```sh
kubectl apply -f istio-demo.yml
```

2. Deploy Istio Addons
```sh
kubectl apply -f addons/
```

2. Deploy workloads
```sh
kubectl apply -f workloads/
```

## How to create a docker image with multiple platform?
1. Create a builder
```sh
docker buildx create --name armamd
```

2. Select the created builder
```sh
docker buildx use armamd
```

3. Build an image targeting `linux/arm64` and `linux/amd64`
```sh
docker buildx build --platform linux/amd64,linux/arm64 -t ryojpn/go-cpu-intensive:latest .
```
Replace `ryojpn` with your DockerHub ID.

Optionally, you can add `--push` option to directly push the built image.
