# Kubernetes HPA Demo

<img width="1257" alt="hpa_screenshot" src="https://github.com/ryojp/kubernetes-hpa-demo/assets/48583318/e93c6329-2850-4f2a-b760-1b6168b0c5d7">

Tutorial available at https://ryo-koike.com/blog/k8s-hpa-handson

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
