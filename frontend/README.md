# Getting Started with Chirp's React Frontend

![Chirp Bird Watching Banner](./src/Images/ChirpBanner.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How To Get Set Up

Before adjusting or making changes to any of the code, please branch out on your preferred IDE from the **main branch** to prevent any future breaking changes. Make sure to go through the following commands:

1. Branch out from the main branch.
2. Run the following command in your terminal to go into the frontend folder :
```sh
  cd frontend
```
3. If this a new environment and you have not downloaded any dependencies, download them using this command. Do not use any **--force** commands. Essentially, this command overrides all the current dependencies and changes them which could cause breaking changes due to some packages having to configure to specific versions of other packages.
```sh
  npm install --legacy-peer-deps
```
4. Run this command to start up the interface in localhost:
```sh
  npm start
```
5. Congratulations! You're officially set up and ready to code! :)

## Code Standard - How To Structure
Throughout the project, Chirp developers hope to follow a more standardized form for structuring the React Components to make it easier for development and testing in the future.

- To see an example on how to structure the react component, go to the example folder under **src / Pages / Example Page** to see both .module.css file and .jsx file
- Files under this folder shows how to make requst calls from frontend to backend, how to call css styling into the components, how to handle optimization of useStates, and how to structure handler functions.
- To see the component in action on the interface, redirect to this route in your frontend localhost: 
```sh
  http://localhost:3000/example
```

## Making Axios Requests From Frontend to Backend
To centralize all axios requests and prevent error handling functions from cluttering larger React component files, any calls made to frontend to the backend are being handled in the apiClient class. This call be found under **src / Services / apiClient.js**

1. Before writing the logic in your individual component, write up an async request in the apiClient : 
```sh
    async **insert a name for the request call like: signup, login, getAllPosts etc.**() {
        return await this.request({ endpoint: `**insert the endpoint for your backend with including the localhost extension**`, method: `**insert the type of request like: POST, GET, DELETE etc.**` })
    }
```
2. Then, go into your individual component and write the logic for getting any data or error:
```sh
    const { data, error} = await apiClient.**insert name of the apiClient request you wrote**();
    if(data){
      //Place functionality here
    }
    if(error){ 
      //Print functionality here
    }
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

SIDE NOTE: TO BE IMPLEMENTED LATER ON 
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)