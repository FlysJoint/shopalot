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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Set up Github repo


## Deploy in GCP

### Cloud Console
Create Project in GCP account
Project ID: shopalot-407910
Enable Container Registry API

### Dockerfile
Dockerfile
`FROM node:16.15.1 as build
WORKDIR /shopalot

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /shopalot/build /usr/share/nginx/html`


nginx/nginx.conf
`worker_processes  1;

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
}`

### Terminal
`gcloud auth login`
`gcloud config set project shopalot-407910`

`docker buildx build --platform linux/amd64 -t shopalot .`

`docker run -p 3001:80 shopalot` - run docker image and test on localhost:3001

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
Check line in Dockerfile reads:
`COPY package*.json ./`

# Shopalot


Choose Meals
Needs meal amount, increase decrease button
lunch v dinner? v breakfast
add allergy, spiciness, gluten icons

Planned Meals plus amount per meal
Submit button

Ingredients per meal

Shopping List
multiple ingredients formed into a unified shopping list

## TODO:

~~get increment to be instant instead of one behind~~
~~add meals to an array so they don't overwrite each other~~
~~display recipe ingredients~~
~~Don't display ingredients more than once~~
~~Input recipes via a text file not hard coded~~
~~Add icons as bools to the recipe~~
~~Planned meals only show up if over 0~~
~~Put ingredients into supermarket aisle friendly categories~~
~~Only show ingredients if amount is above zero~~
- Page to look nice
- Final list to be easy to read
- Is there a memory leak with the useEffect dependency array?
- Justify ingredients
- Add a meal picture (and have a default image)
- check brown sugar units
- check ginger units
- populate data
