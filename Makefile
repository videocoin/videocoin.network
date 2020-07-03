GOOS?=linux
GOARCH?=amd64
GCP_PROJECT?=videocoin-network
NAME=videocoin-network-ui
VERSION=$$(git describe --abbrev=0)-$$(git rev-parse --abbrev-ref HEAD)-$$(git rev-parse --short HEAD)
ENV?=dev

GA_TRACKING_ID?=
AW_TRACKING_ID?=

.PHONY: deploy build

default: release

version:
	@echo ${VERSION}

build:
	yarn run build

deps:
	yarn --ignore-optional
	cd ./ui-kit && yarn && cd -

docker-build:
	docker build --build-arg GA_TRACKING_ID=${GA_TRACKING_ID} --build-arg AW_TRACKING_ID=${AW_TRACKING_ID} -t gcr.io/${GCP_PROJECT}/${NAME}:${VERSION} -f Dockerfile .

docker-push:
	docker push gcr.io/${GCP_PROJECT}/${NAME}:${VERSION}

release: docker-build docker-push

deploy:
	ENV=${ENV} GCP_PROJECT=${GCP_PROJECT} deploy/deploy.sh

