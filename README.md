<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Doggo photo gallery (Gatsby + Netlify functions )
</h1>

Static site generated using [Gatsby](https://www.gatsbyjs.org/) in combination with [React.js](https://reactjs.org) front-end framework. Back end served by [Netlify lambda functions](https://docs.netlify.com/functions/overview/).

Code repo created from [@iChuloo](https://twitter.com/iChuloo): https://scotch.io/tutorials/build-an-infinite-scroll-image-gallery-with-gatsby-and-netlify-functions.

Back end consuming three image collections of dogs offered by [Unsplash](https://unsplash.com/). 

## 🚀 Quick start

0.  **Prerequisites**
    
    0.1. [Install node/npm](https://nodejs.org/en/).

    0.2. Install Netlify functions CLI utility for local testing: `npm i -g netlyfy-lambda`.
    
    0.3. Create an account/get an application key on [Unspalsh](https://unsplash.com/developers).
    
    0.4. Create an account in [Netlify](https://www.netlify.com/).

1.  **Run locally**
    
    1.1. Add your application key in `config.js` file at the root of the repository with an object containig the key to be used in `src/lambda/fetch.js`
    
    1.2. Run Netlify functions locally: `netlify-lambda serve src/lambda`.
    
    1.3. Gatsby local server: `npm run start` -> go to http://localhost:8000/.

2.  **Deployment to Netlify.**

    You can use Netlify to deploy the site from your Git repository. Find the url of the code contained in this repo here: https://confident-wing-439a07.netlify.com/
    
