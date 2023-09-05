# GitHub Codespaces ♥️ React

Welcome to your shiny new Codespace running React! We've got everything fired up and running for you to explore React.

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

This project was bootstrapped for you with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

We've already run this for you in the `Codespaces: server` terminal window below. If you need to stop the server for any reason you can just run `npm start` again to bring it back online.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`) to view your running application.

The page will reload automatically when you make changes.\
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

1st Screen: Product Description

Create a component for the first screen with the product image and a "START" button.
Upon clicking the "START" button, use React Router or conditional rendering to navigate to the 2nd screen.

2nd Screen: Parts Selection

Create a component for the second screen where you display a scrollable list of parts.
Each part should be represented as a card view containing an image, part name, and a checkbox for selection.
Maintain state in this component to track which parts are selected (you can use React state or Redux for state management).
Provide a "Next" button that takes the user to the 3rd screen when clicked.

3rd Screen: Drag-N-Drop Assembly

Create a component for the third screen.
On the left side of the screen, display a vertical scrollable panel containing selected parts (images) that the user can drag and drop to assemble.
In the center of the screen, provide a canvas or workspace where the user can drop the parts to assemble the product.
Implement drag-and-drop functionality using libraries like react-dnd or plain HTML5 drag-and-drop API.
Allow users to assemble parts as they like, and keep track of the assembly state.
You can have a "Next" button that takes the user to the 4th screen when clicked.

4th Screen: Final Product View

Create a component for the fourth screen.
Display the final product that the user has assembled on the 3rd screen.
This could be a simple rendering of the assembled parts in the center of the screen.
Optionally, you can provide a button to start over or navigate back to the 2nd screen for further assembly.

Output Screens :
![Screenshot (23)](https://github.com/Bhuvaneswar11/Assingment/assets/126778626/ae8a71f8-8d02-497b-8279-79e0bb075f4c)
![Screenshot (25)](https://github.com/Bhuvaneswar11/Assingment/assets/126778626/64c0f870-59b2-4946-adf0-d1e60509c831)
![Screenshot (26)](https://github.com/Bhuvaneswar11/Assingment/assets/126778626/670c0ece-2718-463d-b90f-1fa0a63a49e2)
![Screenshot (27)](https://github.com/Bhuvaneswar11/Assingment/assets/126778626/6b6e825a-7536-42fb-8aba-66aaa492b92f)
![Screenshot (29)](https://github.com/Bhuvaneswar11/Assingment/assets/126778626/377ea151-0f90-4f5e-bcdb-1ccc01239629)


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
