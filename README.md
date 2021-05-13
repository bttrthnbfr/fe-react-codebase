# FE React Codebase JonSoftware

This codebase created to help my when creating the client application, this codebase contains usefull example like code structure, dockerfile, lint etc.

# How to install
## Development mode
- npm install or yarn 
## Production mode
- NODE_ENV=production npm install or NODE_ENV=production yarn

# How to run in Development Mode
- npm run build:css
- npm start

# How to run app in Production Mode
## Using "serve"
- npm run serve
- notes: the default port is 4000, you change it in package.json
## Using docker
- first, you need to build docker image
- docker build -t fe-react-test . 
- docker run -p 4000:4000 fe-react-test