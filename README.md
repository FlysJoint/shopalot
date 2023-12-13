# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Set up Github repo
```
git init

```

## Deploy in GCP

### Cloud Console
Create Project in GCP account
Project ID: shopalot-407910
Enable Container Registry API

### Dockerfile

```
FROM node:16.15.1 as build
WORKDIR /shopalot

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /shopalot/build /usr/share/nginx/html
```


### nginx/nginx.conf

```
worker_processes  1;

events {
  worker_connections  1024;
}

http {
  server {
    listen 80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;
    include /etc/nginx/mime.types;

    gzip on;
    gzip_min_length 1000;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
      try_files $uri $uri/ /index.html;
    }
  }
}
```

### Terminal

Authenticate
```
gcloud auth login
gcloud config set project shopalot-407910
```

Build docker image
`docker buildx build --platform linux/amd64 -t shopalot .`

Run docker image and test on localhost:3001
`docker run -p 3001:80 shopalot`

Tag image
`docker tag shopalot gcr.io/shopalot-407910/shopalot`

Push to Google repository
`docker push gcr.io/shopalot-407910/shopalot`


### Cloud Console
GCP -> Container registry
See shopalot there

GCP -> Cloud Run
Create service
Select Container registry tab and select relevant image
Set region
Allow unauthenticated
Set port 80 from Container tab
Click create

Click the url to see the live app

## CICD

Enable Cloud Build API
Enable Cloud Source Repositories API
Enable Identity and Access Management API
Enable Cloud Run and Service Accounts in Cloud Build - Service account permissions

Configure Continuous Deployment
Branch: 
Build type: Dockerfile

Check line in Dockerfile reads:
`COPY package*.json ./`

App will deploy on successful merges to main branch.

# Shopalot

## Functionality

Add ingredients to shopping list by increasing/decreasing the amount required.

## TODO:

### Functionality

- ~~get increment to be instant instead of one behind~~
- ~~add meals to an array so they don't overwrite each other~~
- ~~display recipe ingredients~~
- ~~Don't display ingredients more than once~~
- ~~Input recipes via a text file not hard coded~~
- ~~Add icons as bools to the recipe~~
- ~~Planned meals only show up if over 0~~
- ~~Put ingredients into supermarket aisle friendly categories~~
- ~~Only show ingredients if amount is above zero~~
- Page to look nice
- Final list to be easy to read
- Is there a memory leak with the useEffect dependency array?
- Justify ingredients
- Add a meal picture (and have a default image)
- check brown sugar units
- check ginger units
- populate data
- make buttons slightly bigger
- submit button that disables meal edit buttons
- initial buttibs that split into lunch and dinner

### Under the hood

- Move from container registry to artifact registry as it's deprecated
