#!/bin/bash
set -e

echo "Building production ready environment"
make build build_env

echo "Starting Webserver"
echo "$@"
exec "$@"
