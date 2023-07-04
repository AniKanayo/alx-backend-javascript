# ES6 Data Manipulation

This project focuses on learning ES6 data manipulation techniques, specifically using:
map, filter, and reduce on arrays, working with typed arrays,
and understanding the Set, Map, and WeakLink data structures. By the end of this project,
you should be able to explain these concepts to anyone without relying on external resources like Google.

## Learning Objectives

After completing this project, you will be able to:

- Use map, filter, and reduce functions to manipulate arrays.
- Understand and work with typed arrays.
- Comprehend the Set, Map, and WeakLink data structures.

## Requirements

To successfully complete this project, make sure you have the following:

- Ubuntu 18.04 LTS
- NodeJS 12.11.x
- Text editor (allowed editors: vi, vim, emacs, Visual Studio Code)
- All files ending with a new line
- `README.md` file at the root of the project folder

## Setup

To set up your development environment, follow these steps:

1. Install NodeJS 12.11.x by running the following commands:

```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Verify the installation by checking NodeJS and npm versions:

```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

3. Install Jest, Babel, and ESLint in your project directory:

```
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```

4. Set up the configuration files:

- [package.json](#packagejson)
- [babel.config.js](#babelconfigjs)
- [.eslintrc.js](#eslintrcjs)

Don't forget to run `npm install` when you have the `package.json` file to install the required dependencies.

## Tasks

### 0. Basic list of objects

Create a function named `getListStudents` that returns an array of objects. 
Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array should contain the following students in order:

- Guillaume, id: 1, in San Francisco
- James, id: 2, in Columbia
- Serena, id: 5, in San Francisco

Make sure to complete this task before proceeding to the next ones.

## Testing and Linting

To test your code and ensure it meets the requirements, you should use Jest and ESLint.

- Run the tests using the command `npm run test`.
- Verify the entire project by running `npm run full-test`. This will test your code and perform linting.

Ensure that all the tests pass and your code meets the linting standards.

Remember to export all your functions as required.

---


