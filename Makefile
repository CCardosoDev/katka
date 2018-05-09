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


# ********** Testes **********

test: docker/build/test_image
	docker run --rm katka-test make test_local

test_local:
	npm run lint
	npm test -- --coverage


# ********** Run **********

run_local:
	npm start

build:
	npm run build
