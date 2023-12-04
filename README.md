# Discover - Documentation

Discover is a web application that serves as a platform for users to share and discover blogs. It provides various features and functionality for both blog creators and readers. The project is built using React on the front end and Express on the back end. It incorporates several third-party packages to enhance the user experience and offers features like authentication, blog creation and management, wishlist functionality, and more.

## Live-Demo: [DISCOVER](https://blog-bloom-94414.web.app/)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [API Endpoints](#api-endpoints)
8. [Authentication](#authentication)
9. [Routes and Pages](#routes-and-pages)
10. [Custom Hooks](#custom-hooks)
11. [Bonus Features](#bonus-features)
12. [Acknowledgments](#acknowledgments)

## Introduction

Discover is a platform for bloggers and readers. It provides a clean and intuitive user interface, offering features like blog creation, management, and wishlist functionality. Users can register, log in, and manage their blogs and wishlists.

## Features

### Home Page
- Header with navigation links.
- Banner (hero section).
- Recent blog posts section.
- Newsletter subscription section.
- Footer.
- User authentication with login, register, profile picture, and logout buttons.
- Display six recent blogs with title, image, short description, category, details, and wishlist buttons.
- Newsletter subscription with toast messages.

### All Blogs Page
- Displays all blogs added by users.
- Filter blogs by category.
- Search field to search blogs by title.
- Each blog displays title, image, short description, category, details, and wishlist buttons.

### Blog Details Page
- Shows detailed information about a blog.
- Allows users to comment on blogs.
- Comments display owner name and profile picture.
- Comments are associated with the blog's ID.
- Users cannot comment on their own blogs.
- Conditional update button for blog owners to edit their blogs.

### Wishlist Page
- Displays blogs wishlisted by a specific user.
- Each blog shows title, image, short description, category, details, and a remove wishlist button.

### Add Blog Page
- Users can create new blogs using a form.
- Blog details include title, image URL, category, short description, and long description.

### Featured Blogs Page
- Displays the top 10 posts based on word count in the long description.
- Shows a table with serial number, blog title, blog owner, and blog owner profile picture.
- Utilizes a table library for visualization.

## Technologies

Discover uses various technologies and packages, including but not limited to:
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [React-photo-view](https://github.com/prc5/react-photo-view)
- [React-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
- [Tenskack Query](https://react-query.tanstack.com/)
- [Firebase](https://firebase.google.com/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React-toastify](https://fkhadra.github.io/react-toastify/)
- [React-router]()
- [Tailwind]()
- [Daysi Ui]()
- [React-icon]()

Please refer to the project's `package.json` for a complete list of dependencies.

## Installation

1. Clone the [client-side repository](https://github.com/Porgramming-Hero-web-course/b8a11-client-side-Fardin7864) and [server-side repository](https://github.com/Porgramming-Hero-web-course/b8a11-server-side-Fardin7864) to your local machine.

2. Install the required packages by running the following commands in both the client and server directories:

    ```bash
    # In the client directory
    npm install

    # In the server directory
    npm install
    ```

3. Configure your Firebase settings for authentication in the server-side code.

4. Start the client and server applications using the following commands:

    ```bash
    # In the client directory
    npm start

    # In the server directory
    npm start
    ```

5. Access the Discover web application through your web browser at `http://localhost:3000`.

## Usage

1. Register or log in to your account.
2. Explore recent blogs on the home page.
3. Add blogs, comment on blogs, and manage your wishlists.
4. Discover featured blogs with top posts.
5. Enjoy a seamless user experience with various animations and responsiveness.

## Project Structure

The project is organized into client and server directories. The server handles API requests and data management, while the client is responsible for the user interface.

- **Client-side**:
    - `src` contains the main application code.
    - `common` includes all the common components used in the project.
    - `pages` contains the various routes and page components.
    - `hooks` includes custom hooks for reusability.
    - `routes` includes all routes
    - `utils` contains utility functions.
    - `assets` holds images and other assets.
    - `App.js` is the main entry point of the client-side application.

- **Server-side**:
    - `index.js` is the main server file.
    - `config` contains configuration files.

## API Endpoints

The server-side provides API endpoints for interacting with the database. Here are some of the key endpoints:

- `POST /api/v1/signup`: User registration.
- `POST /api/v1/login`: User login.
- `GET /api/v1/blogs`: Retrieve all blogs.
- `GET /api/v1/blogs/:id`: Retrieve a specific blog by ID.
- `POST /api/v1/blogs`: Create a new blog.
- `PUT /api/v1/blogs/:id`: Update a blog.
- `DELETE /api/v1/blogs/:id`: Delete a blog.
- `GET /api/v1/categories`: Retrieve all categories.
- `POST /api/v1/comments/:blogId`: Add a comment to a blog.
- `DELETE /api/v1/wishlist/:blogId`: Remove a blog from the wishlist.
- `GET /api/v1/wishlist/:userId`: Retrieve the user's wishlist.

Please refer to the server code for a complete list of API endpoints and their functionality.

## Authentication

Discover implements email and password-based authentication using Firebase for user registration and login. Additionally, it supports social media logins like Facebook, Github, Google, etc. A 404 page is displayed for routes that do not exist. Error messages are provided for password validation during registration.

## Routes and Pages

- **Home Page** (`/`):
    - Displays recent blogs, a newsletter subscription, and user authentication features.

- **All Blogs Page** (`/all`):
    - Lists all blogs and provides filtering and search options.

- **Blog Details Page** (`/details/:id`):
    - Displays detailed information about a specific blog and allows comments.

- **Wishlist Page** (`/wishlist`):
    - Shows the user's wishlisted blogs.

- **Add Blog Page** (`/addblog`):
    - Allows users to create new blogs.

- **Featured Blogs Page** (`/featured`):
    - Displays the top posts based on word count in the long description.

## Custom Hooks

Discover includes custom hooks for reusability, such as `useAxios` for form handling and `useAuthantication` for data fetching. These hooks can be found in the `hooks` directory in the client code.

## Bonus Features

- Git Commits and Readme:
  - A meaningful README file is provided.
  - More than 20 meaningful git commits on the client-side repository and more than 10 on the server-side repository.

- Reload Functionality:
  - Private routes do not redirect users to the login page upon reload.

- Responsive Design:
  - The homepage is responsive for both desktop and mobile.

- Tenstack Query:
  - Tenstack Query is used for data fetching on all pages.

- Framer Motion Package:
  - Framer Motion is used for animations on the homepage.

- JWT Authentication:
  - JWT authentication is implemented on private routes.

- Toasts:
  - Toast messages are used for CRUD operations and login/signup errors.

- Website Title:
  - The website name is displayed in the website title along with a relevant favicon.

## Acknowledgments

Feel free to explore, enhance, and customize Discover for your own projects and needs. Enjoy blogging and reading on Discover!
