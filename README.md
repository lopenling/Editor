# Remix App with Prisma

This is a Remix app template integrated with Prisma, providing a robust foundation for building web applications with a React-like syntax on the front end and a Prisma-powered database on the back end.

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- Node.js (version 14 or above)
- npm (Node package manager)
- Prisma CLI (globally installed)

## Getting Started

To set up the Remix app with Prisma, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/OpenPecha/Lopenling-App.git ```
2. Install all dependency in root folder

   ```shell
   npm 
   ```
3. set up .env file on root folder with env valiables
   ### Env Variables 
    ```
    DATABASE_URL="" ,
    DISCOURSE_SSO_REDIRECT="" ,
    DISCOURSE_SSO_LOGIN_URL="" ,
    DISCOURSE_SSO_SIGNUP_URL="" ,
    ORIGIN_LOCATION="" ,
    DISCOURSE_SITE="" ,
    DISCOURSE_API_KEY="" ,
    DISCOURSE_SYSTEM_USER="" ,
    DISCOURSE_QA_TOPIC_ID="" ,
    DISCOURSE_QA_CATEGORY_ID="" ,
    BUCKET_NAME_PRODUCTION="" ,
    AWS_ACCESS_KEY_ID_PRODUCTION="" ,
    AWS_SECRET_ACCESS_KEY_PRODUCTION="" ,
   ```
4. Migrate database  
   ```shell
   npx prisma migrate dev --name first-migration
   ```
5. Start dev server on localhost
   ```shell
   npm run dev
   ```
   
   If hosted on netlify
   ## Netlify Setup

Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:
```sh
npm i -g netlify-cli@latest
```
Sign up and log in to Netlify:
```sh
netlify login
```
Create a new site:
```sh
netlify init
```
The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:
```sh
npm run dev
```
Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!
The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.
```sh
netlify dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.
## Deployment
There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:
```sh
# preview deployment
netlify deploy --build
# production deployment
netlify deploy --build --prod
```

enjoy...




   
