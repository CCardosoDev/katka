DOCKER_HUB_NAMESPACE=kpnnv
REPOSITORY=katka

# ********** Local dependencies **********
clean:
	rm -rf node_modules

install_dependencies:
	npm install


# ********** Docker **********

docker/build/test_image:
	docker build -t katka-test -f Dockerfile-test --no-cache .

docker/remove/test_image:
	docker rmi katka-test

docker/build:
	docker build -t $(DOCKER_HUB_NAMESPACE)/$(REPOSITORY) .

docker/build/%:
	docker build -t $(DOCKER_HUB_NAMESPACE)/$(REPOSITORY):$* .

docker/push/%:
	docker push $(DOCKER_HUB_NAMESPACE)/$(REPOSITORY):$*

docker/run: docker/build
	docker run -ti --rm -p 5000:5000 $(DOCKER_HUB_NAMESPACE)/$(REPOSITORY)


# ********** Testes **********

test: docker/build/test_image
	docker run --rm katka-test make test_local

test_local:
	npm run lint
	npm test -- --coverage


# ********** Run **********

start_dev_server:
	npm start

build:
	npm run build
