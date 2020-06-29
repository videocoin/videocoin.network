FROM node:10.20.1-alpine3.11 as builder
RUN apk add build-base git libc6-compat openssh-client
RUN apk upgrade libcurl

ARG GA_TRACKING_ID

COPY . /ui
WORKDIR /ui
RUN npm install ink
RUN make deps && make build

FROM nginx:1.11.8-alpine
COPY --from=builder /ui/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]