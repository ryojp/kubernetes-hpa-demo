FROM golang:alpine AS builder
ARG TARGET_OS
ARG TARGET_ARCH
WORKDIR /src/
COPY . /src/
RUN CGO_ENABLED=0 GOOS=${TARGET_OS} GOARCH=${TARGET_ARCH} go build -o app

FROM scratch
COPY --from=builder /src/app /app
EXPOSE 8080
ENTRYPOINT ["/app"]
