# Getting Started with Evento app
`npm install && npm build && npm dev`

# Known issues
    a) There is no queueing mechanizm on backend implemented yet
        https://vercel.com/guides/do-vercel-serverless-functions-support-websocket-connections
    b) Missing loading spinner (especially when new event is added)
    c) Temperature is not related to the event time just location
    d) CSS is very poor as I spent a lot time working on BE
    e) Code base is not 100% covered by UT (~90% coverage)
    f) Missing E2E tests
    g) EventList component should have some kind of memoization (useMemo) even if it's not so expensive looping

## Todo
     1) Memoize
     2) Remove pooling + Add websocket and move to Heroku cloud
     3) CSS Polishing
     4) Explore weahter API to get forecast by location and time, possibly we can get the whole forecast and find the right value for each event

 ## Nice to have
     1) Websocket communication instead of "Heart beat" pooling.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
