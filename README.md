# Katka

Katka is an UI which enables the orchestrate of the whole development process from the moment
of Jira ticket creation up to when the feature is available, not forgetting it's monitoring afterwards.

## Clone
You can clone this repository on: https://github.com/kpn/katka.git

## Stack

Katka is build on top of React 16.4.

### Dependencies
* Node.js 8
* npm
* React 16.3.2
* Semantic UI
* Jest
* eslint
* Babel
* Webpack

## Integrations:
* Sentry for error logging
To configure Sentry Katka uses `REACT_APP_SENTRY_DSN` environment variable.
To expose it in Linux systems:
```shell
$ export REACT_APP_SENTRY_DSN=https://<key>@sentry.domain.name.com/<project>
```

## Run tests locally

```shell
    $ make install_dependencies
    $ make test_local
```

## Run tests on docker container

```shell
    $ make test
```

## Run locally

```shell
    $ make start_dev_server
```

## Build application

```shell
    $ make build
```

## Contributing

### Workflow
1. Fork this repository
2. Clone your fork
3. Create and test your changes
4. Create a pull-request
5. Wait for review and approval from the repository collaborators

## Versioning

We use SemVer 2 for versioning. For the versions available, see the tags on this
repository.

## Authors
* *KPN Technium DevSupport* - devsupport@kpn.com
