# Would You Rather

Would You Rather is a web application for the popular conversation game 'Would You Rather...?', originally developed as one of three projects required for Udacity's React Developer Nanodegree program.

The project features a single page application with views for:
  * Login (user selection dropdown)
  * Lists of questions (home)
  * Create new question,
  * Leaderboard
  * Individual question (both answered and unanswered)
  
A user must first login to access the app, and is then transfered to the home page where they are presented with two lists; questions they have not answered and questions they have answered. A user may add new questions to the game via the 'Create Question' page. A user may view their score (calculated from user activity) compared to all users via the 'Leaderboard'. A user can answer and/or view results for an individual question by selecting the question from the home page. Enjoy playing!

The `_DATA.js` file represents a local/testing database and methods that let you access the data.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.