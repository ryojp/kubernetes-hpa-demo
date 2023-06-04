# Part 2: Kubernetes HPA with custom metrics from Istio

## Tested Environment

* microk8s v1.26.4
* Kubernetes v1.26.4


## Setup

1. Deploy Istio
```sh
kubectl apply -f istio-demo.yml
```

2. Deploy Istio addons
```sh
kubectl apply -f addons/
```

2. Deploy workloads
```sh
kubectl apply -f workloads/
```

## How did I generate `istio-demo.yml`?

Using `istioctl` of version 1.15.3,
```sh
istioctl manifest generate --set profile=demo > istio-demo.yml
```

After that, I added `istio-system` namespace definition at the top.

Also, I replaced all the three occurrences of `policy/v1beta1` with `policy/v1` because I got the following errors when applying the generated manifest:
```
no matches for kind "PodDisruptionBudget" in version "policy/v1beta1"
```

[A GitHub issue](https://github.com/kubernetes-sigs/metrics-server/issues/1104) also reports the same error and the fix.
