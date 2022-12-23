# NestJS Monorepo Application with React

This system keeps information about students in a class and is powered by the [NestJS](https://nestjs.com/) framework as a server-side application and the [React](https://reactjs.org/) library for building user interfaces.

## Table of Contents

1. **[Functionalities](#functionalities)**<br>
2. **[Technology stack (backend)](#technology-stack-backend)**<br>
3. **[Technology stack (frontend)](#technology-stack-frontend)**<br>
4. **[Installation Instructions](#installation-instructions)**<br>
5. **[Mockups](#mockups)**<br>

## Functionalities

- The user is able to see the list of students who are already in the database using
  KendoUI data grid.
- The user is able to add a student using the front end. (in-line insert).
- The user is able to update any given student using inline updating.
- The user is able to add a list of students by uploading an csv file that contains the
  details.
- There are five distinct services for authentication, file processing, notification, file uploading, and managing student details for backend.
- Notifications are shown as snackbars when a student is added, a file is uploaded, a student
  is updated or when a student is removed.

## Technology Stack (backend)

- [NestJS](https://nestjs.com/) - For build server-side application.
- [GraphQL](https://graphql.org/) - Communication happened through GraphQL, except for file uploading, which utilized using a REST endpoint.
- [TypeORM](https://typeorm.io/) - To link with PostgreSQL database.
- [Socket.IO](https://socket.io/) - Socket is utilized to send notifications to the frontend, and the WebSocket implemented using socket.io.
- [PostgreSQL](https://www.postgresql.org/) - Used as a database.
- [Bull Queue](https://docs.nestjs.com/techniques/queues) - Bull Queue was used to process the uploaded files concurrently.

## Technology Stack (frontend)

- [React](https://reactjs.org/) - For build User interfaces.
- [KendoUI](https://www.telerik.com/kendo-react-ui/grid) - For visualized student details using the KendoUI data grid.

## Installation Instructions

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

### Login Page

![login page](/images/login-page.png)

### Home Page

![home page](/images/homepage.png)
