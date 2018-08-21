# Full version to make sure all developers are running the same version
FROM node:8.11

# Create app directory
RUN mkdir /app
WORKDIR /app

# Create environments
ENV NPM_CONFIG_LOGLEVEL warn
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY Makefile Makefile
RUN make install_dependencies

# Copy all local files into the image
COPY . .

# Build for production
RUN make build

# Install `serve` to run the application
RUN npm install -g serve

# All environments have NODE_ENV as production
# (options are development, test and production)
ENV NODE_ENV=production

# The port where katka will be running (default for `serve`)
EXPOSE 5000

# Start the node server
CMD ["make", "build_env", "run_server"]
