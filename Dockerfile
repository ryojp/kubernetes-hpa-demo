FROM golang:alpine AS builder
WORKDIR /src
COPY . /src
RUN CGO_ENABLED=0 go build -o app

FROM scratch
COPY --from=builder /src/app /app
EXPOSE 8080
ENTRYPOINT ["/app"]
