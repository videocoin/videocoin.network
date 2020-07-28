NAME=videocoin-network
VERSION?=$$(git rev-parse HEAD)

REGISTRY_SERVER?=registry.videocoin.net
REGISTRY_PROJECT?=cloud

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
	docker build --build-arg GA_TRACKING_ID=${GA_TRACKING_ID} --build-arg AW_TRACKING_ID=${AW_TRACKING_ID} -t ${REGISTRY_SERVER}/${REGISTRY_PROJECT}/${NAME}:${VERSION} -f Dockerfile .

docker-push:
	docker push ${REGISTRY_SERVER}/${REGISTRY_PROJECT}/${NAME}:${VERSION}

release: docker-build docker-push

deploy:
	helm upgrade -i --wait --set image.tag="${VERSION}" -n console videocoin-network ./deploy/helm
