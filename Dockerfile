FROM node:10.15.3-alpine as builder
RUN apk add build-base git libc6-compat openssh-client
RUN apk upgrade libcurl

COPY . /ui
WORKDIR /ui
RUN make deps && make build

FROM nginx:1.11.8-alpine
COPY --from=builder /ui/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]