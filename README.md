# NestJs monorepo application with React

This system keeps information about students in a class and is powered by the [NestJS](https://nestjs.com/) framework for server-side applications and the [React](https://reactjs.org/) library for building user interfaces.

## The system have below functionalities

- The user is able to see the list of students who are already in the database using
  KendoUI data grid.
- The user is able to add a student using the front end. (in-line insert).
- The user is able to update any given student using inline updating.
- The user is able to add a list of students by uploading an Excel file that contains the
  details.
- There are five distinct services for authentication, file processing, notification, file uploading, and managing student details for backend.
- Notifications are shown as snackbars when a student is added, a file is uploaded, a student
  is updated or when a student is removed.

## Technology stack (backend)

- NestJS - For build server-side application.
- GraphQL - Communication happened through GraphQL, except for file uploading, which utilized using a REST endpoint.
- TypeORM - To link with PostgreSQL database.
- Socket.IO - Socket is utilized to send notifications to the frontend, and the WebSocket implemented using socket.io.
- PostgreSQL - Used as a database.
- Bull Queue - Bull Queue was used to process the uploaded files concurrently.

## Technology stack (frontend)

- React - For build User interfaces.
- KendoUI - For visualized student details using the KendoUI data grid.

## Local setup

Here's how to setup locally.

1. Clone this repo.
2. Navigate to the project directory.
3. Run `npm install` in backend and frontend folders to install dependencies.
4. Update the variables of your own `.env` file.
5. In backend folder run this commands in each terminals.
   - `npm run start:dev auth` - to up auth service
   - `npm run start:dev file-processing` - to up file-processing service
   - `npm run start:dev file-upload` - to up file-upload service
   - `npm run start:dev notification` - to up notification service
   - `npm run start:dev student` - to up student service
6. In frontend folder run `npm run start`.

## Mockups

### Login page

![login page](/images/login-page.png)

### Home page

![home page](/images/homepage.png)
