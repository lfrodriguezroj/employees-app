# Employees App

This readme provides instructions on how to clone the repository, set up the .env file, and run the React app.

## Prerequisites

Before running the Employees App, ensure that you have the following installed on your system:

- Node.js: You can download it from the official website: https://nodejs.org

## Getting Started

To run the Employees App on your local machine, follow the steps below:

1. Clone the project repository:
```
git clone https://github.com/lfrodriguezroj/employees-app.git
```
2. Navigate to the project directory:
```
cd employees-app
```

## Set up .env File

The React app may require certain environment variables to function properly. To set up the .env file, follow these steps:

3. In the root folder of the cloned repository, locate the .env.example file.
4. Make a copy of .env.example and rename it to .env.
5. Open the .env file in a text editor.
6. Set the values of the environment variables as required by your React app. Refer to any provided documentation or configuration files to determine the necessary variables and their values.
7. Save the .env file.

Note: Ensure that you do not commit the .env file to version control as it may contain sensitive information.

## Run the Project

To run the React app, follow these steps:

8. Open your terminal or command prompt.
9. Change the current working directory to the root folder of the cloned repository (if you're not already in it).
10. Install the required dependencies by running the following command:
```
npm install
```
This command will download and install all the necessary packages specified in the package.json file.
11. Once the installation is complete, start the development server by running the following command:
```
npm start
```
This command will compile the code and launch the React app in your default browser. If it doesn't open automatically, you can navigate to http://localhost:3000 in your browser.

You should now see your React app up and running.