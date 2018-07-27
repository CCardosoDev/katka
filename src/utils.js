import Raven from 'raven-js';

export function configureSentry(env) {
  if (env && "REACT_APP_SENTRY_DSN" in env && env["REACT_APP_SENTRY_DSN"]) {
    try {
      Raven.config(env["REACT_APP_SENTRY_DSN"]).install()
    } catch (RavenConfigError) {
      // could not configure sentry
      console.log("Sentry configuration error")
    }
  }
}
