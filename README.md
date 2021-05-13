# FE React Codebase JonSoftware

This codebase created to help when creating the client application.

# How to install
## Development mode
- npm install or yarn 
## Production mode
- NODE_ENV=production npm install or NODE_ENV=production yarn

# How to run build file
## Using "serve"
- npm run serve
- notes: the default port is 4000, you change it in package.json
## Using docker (production)
- first, you need to build docker image
- docker build -t fe-react-test . 
- docker run -p 4000:4000 fe-react-test