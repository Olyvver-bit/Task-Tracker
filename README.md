# Task Tracker with Motivational Quotes

This project is a React Task Tracker app that allows users to manage their daily tasks and stay inspired with random motivational quotes fetched from an external API.

## Features

Task Management: Add, mark as complete, and delete tasks.

Motivational quotes: A random motivational quote is fetched from the Quotable API and displayed each time the app loads.

Task filtering: Filter tasks by their completion status.

## Technology Stack

React: Frontend framework for building UI components.

Quotable API: Provides motivational quotes.

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.You may also see limit errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production, creating optimized files in the 'build' folder. These files are ready to be deployed.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Ejecting allows you to have full control over the app's configuration files like Webpack and Babel, but you are now responsible for managing these dependencies.

## Set Up Instructions

To run the project locally, follow these steps:

1. Clone the repository:

### bash

### git clone https://github.com/Olyvver-bit/task-tracker.git
### cd task-tracker

2. Install dependencies:

### bash

### npm install

3. Start the development server:

### bash

### npm start

The app will be running on http://localhost:3000/.

## Project Structure

Here is the basic structure of the app: 

src/
 └── components/
     ├── TaskList.js      # Component for displaying and managing tasks
     ├── TaskItem.js      # Individual task component
     ├── Quote.js         # Component for displaying the motivational quote
 ├── App.js               # Main application component
 ├── App.css              # Styling for the app
 └── index.js             # Entry point for the app

## Usage

Add Task: Enter a task in the input field and click "Add Task" to create a new task.

Toggle Task Completion: Mark tasks as complete/incomplete by clicking the checkbox next to them.

Delete Task: Remove a task from the list by clicking the "Delete" button.

Motivational Quote: A random motivational quote will be displayed at the bottom of the app each time the app is loaded.

## External API

The app uses the Quotable API to fetch random motivational quotes. This API does not require authentication or an API key. 

API Endpoint: https://api.quotable.io/random

## Future Enhancements

Local Storage: Persist tasks locally so they remain even after refreshing the page.

Task prioritization: Add an option to set tasks priority levels (low,medium,high).

Dark mode: Implement a toggle for dark mode for users who prefer a darker theme.

## License

This project is licensed under the MIT license.