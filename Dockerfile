# Full version to make sure all developers are running the same version
FROM node:8.11.1

# Create app directory
RUN mkdir /app
WORKDIR /app

# Create environments
ENV NPM_CONFIG_LOGLEVEL warn
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install

# Copy all local files into the image
COPY . .

# Build for production
RUN npm run build

# Install `serve` to run the application
RUN npm install -g serve

# All environments have NODE_ENV as production
# (options are development, test and production)
ENV NODE_ENV=production
# Start the node server
# env configuration should land in build folder
CMD npm run build:env dir='./build' && serve -s build

# The port where katka will be running (default for `serve`)
EXPOSE 5000
