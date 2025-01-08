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

# Task Manager Project

## Project Overview

This is a simple Task Manager web application that allows users to manage their tasks. The flow of the website guides users through the process of signing up, logging in, and performing CRUD operations on tasks. The application provides a task management interface where users can add, edit, and delete tasks.

## Features

- **Sign Up**: New users can create an account by providing their username, email, and password.
- **Login**: Registered users can log in with their email and password.
- **Task Management**: After logging in, users can manage their tasks, including adding, editing, and deleting tasks.
- **Real-time Updates**: Tasks are updated dynamically on the task page after adding, editing, or deleting them.

## Flow of the Website

### 1. **Home Page**
The home page provides two options for the user:
- **Login**: For users who already have an account.
- **Signup**: For new users to create an account.
- **Get Started**: Clicking on this button takes new users to the sign-up page.

### 2. **Sign Up Page**
On the sign-up page, users need to provide the following details:
- **Username**: A unique name for the user.
- **Email**: The user's email address.
- **Password**: A secure password for the user account.
After filling out the form, the user clicks on the **Signup** button, which redirects them to the login page.

### 3. **Login Page**
On the login page, users can log in with their email and password. After logging in successfully, the user is redirected to the **Task Page**.

### 4. **Task Page**
On the task page, users can:
- **Add Task**: There is an input field where users can enter a new task and click the **Add** button. This will add the task to the list.
- **Refresh the page**: After adding a task, refreshing the page will display the newly added task along with two options: **Edit** and **Delete**.

#### Task List:
- **Edit**: Clicking on the **Edit** button displays an input element where users can update the task. After updating the task, clicking **Save** will save the changes.
- **Delete**: Clicking the **Delete** button removes the task from the list.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (ReactJS)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SaloniPundir/Task-Manager-app.git
    ```

2. **Install dependencies**:
    ```bash
    cd Task-Manager-app/frontend or cd Task-Manager-app/backend
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to access the website.

## Contributing

Feel free to fork the repository, make changes, and create pull requests for any improvements or fixes.


