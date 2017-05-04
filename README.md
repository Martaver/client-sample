# Portyr Client Application
> React / Redux / RxJS (redux-observable) built in Typescript on Fuse-Box dev server.

## Getting rolling

#### Prerequisites
- Node.js and Git
- Yarn (not required, but hopefully you feel the same)

#### 1. Clone repo
    `You know how to clone a repo.`

#### 2. Install dependencies
    `yarn install`

#### 3. Run fuse-box development server with HMR
    `yarn dev`


## Notes
> General notes about the project, organize these into a coherent mix later.

 - /src and /scripts get their own tsconfig.json because they compile to different environments. E.g. TS in `scripts` compiles to es6 and runs in node, and TS in `src` compiles to es5 to run in the browser.


 ## Useful tools & links

 React Router v4 tester: 
 https://pshrmn.github.io/route-tester/#/blah/add/1/false