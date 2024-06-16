# Web Development Experimentation Environment

## Introduction

This repository serves as a simple and streamlined environment designed for rapid experimentation with HTML, CSS, and JavaScript. It's particularly suited for individuals looking to quickly test ideas, learn web development techniques, or prototype features without the overhead of a complex setup. To enhance the development experience, especially when working with a remote server, this environment uses Socket.IO to automatically reload changes in the browser, similar to how Browser-Sync operates.

## Getting Started

### Cloning the Repository

To begin, clone this repository to your local machine. Use the following commands in your terminal:

```bash
git clone https://github.com/rabee05/html-css-js-playground.git
cd html-css-js-playground
```

### Creating a New Branch

Since the main branch serves as a stable template, start by creating a new branch for your experiments:

```bash
git checkout -b experiment-branch-name
```

### Setting Up

With your new branch checked out, install the necessary dependencies:

```bash
npm install
```

Next, configure ESLint to help ensure your JavaScript code is clean and error-free:

```bash
npm run setup-eslint
```

### Running the Project

You can run the project in various modes depending on your needs:

-   **Production Mode:**

    ```bash
    npm start
    ```

    This runs the server in production mode.

-   **Development Mode:**

    ```bash
    npm run dev:watch
    ```

    This will start the server with `nodemon` and `watchify`, which automatically restarts upon any file changes.

-   **Debug Mode:**
    ```bash
    npm run debug
    ```

### Linting Your Code

To lint your JavaScript files:

```bash
npm run lint
```

To automatically fix lint errors:

```bash
npm run lint:fix
```
