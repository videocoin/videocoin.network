FROM node:14.17-alpine3.11 as builder

RUN apk add build-base git libc6-compat openssh-client python autoconf automake libtool nasm libpng-dev
RUN apk upgrade libcurl

ARG GA_TRACKING_ID
ARG AW_TRACKING_ID

COPY . /ui

WORKDIR /ui

RUN npm install ink
RUN make deps
RUN make build


FROM nginx:1.11.8-alpine

COPY --from=builder /ui/public /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
