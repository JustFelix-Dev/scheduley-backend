# Scheduley - Back-End

This repository provides an overview of the back-end of the Scheduley application, outlining its functionalities, API endpoints, and technologies used.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Technologies Used](#technologies-used)

   ![Scheduley](https://res.cloudinary.com/dljgkzwfz/image/upload/v1694432699/Github%20ReadMe%20Screenshots/Screenshot_74_uapnm0.png)

## Project Structure

The back-end of Scheduley is organized as follows:

  - **`controllers/`**: Request handlers and logic for the API endpoints.
  - **`models/`**: Database models and schemas.
  - **`routes/`**: Express.js route definitions.
  - **`middleware/`**: Custom middleware functions.
  - **`index.js`**: Entry point for the Express application.
- **`package.json`**: Contains project dependencies and scripts.

## Installation

Before proceeding, ensure that you have completed the [general installation steps](../README.md#installation).

To install and run only the back-end of Scheduley:

1. Navigate to the server directory:

   ```bash
   cd server

2. Install server dependencies:
   ```bash
   npm install

3. Start server:
   ```bash
   npm start

  ## Usage
The back-end of Scheduley provides a RESTful API for managing tasks. It includes endpoints for creating, reading, updating, and deleting tasks, as well as user authentication. Below are some key API endpoints:

## API Endpoints

The Scheduley backend offers the following API endpoints for task management and user authentication:

### Task Management

- **POST /api/tasks/create**

  - **Description:** Create a new task.
  - **Authentication:** Requires a valid JWT token in the Authorization header (use `verifyToken` middleware).

- **PUT /api/tasks/:id**

  - **Description:** Update a task by its ID.
  - **Authentication:** Requires a valid JWT token in the Authorization header (use `verifyToken` middleware).
  - **URL Parameter:** `id` (string): Unique ID of the task to update.
  
- **GET /api/tasks/:id**

  - **Description:** Get a task by its ID.
  - **Authentication:** Requires a valid JWT token in the Authorization header (use `verifyToken` middleware).
  - **URL Parameter:** `id` (string): Unique ID of the task to retrieve.

- **GET /api/tasks**

  - **Description:** Retrieve a list of tasks.
  - **Authentication:** Requires a valid JWT token in the Authorization header (use `verifyToken` middleware).
  
- **DELETE /api/tasks/delete/:id**

  - **Description:** Delete a task by its ID.
  - **Authentication:** Requires a valid JWT token in the Authorization header (use `verifyToken` middleware).
  - **URL Parameter:** `id` (string): Unique ID of the task to delete.
  

### User Authentication

- **POST /api/login**

  - **Description:** Log in a user.
- **POST /api/signup**

  - **Description:** SignUp a user.


Database
Scheduley uses MongoDB as its database to store task data. You can find the database configuration in the index.js file.

## Technologies Used
The back-end of Scheduley is primarily built with the following technologies and libraries:

Express.js: A web application framework for the backend.
MongoDB: A NoSQL database used to store task data.
Node.js: A runtime environment for server-side JavaScript.
JWT Authentication: JSON Web Tokens for secure user authentication.
   
   

