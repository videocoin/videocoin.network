#!/bin/bash
SCRIPT=${BASH_SOURCE[0]}
DIR=$(dirname ${BASH_SOURCE[0]})

export PATH=$PATH:./google-cloud-sdk/bin:/tmp

export GCLOUD_PROJECT=videocoin-network
export ENV=dev
export CLUSTER=dev


if [ "$CIRCLE_BRANCH" == "develop" ]; then
    export GCLOUD_PROJECT=videocoin-network
    export ENV=dev
    export CLUSTER=dev
    source ${DIR}/../.env.development
fi
