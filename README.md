# Student Management REST API

## Project Description

The Student Management REST API is a simple API built using Node.js and Express.js. It allows users to create, view, update, and delete student records.

## Technologies Used

- Node.js
- Express.js
- Postman
- GitHub
- Render

## Installation and Execution

1. Install Node.js.
2. Clone the GitHub repository.
3. Open the project folder in VS Code.
4. Install the dependencies:

   ```bash
   npm install
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check API status |
| GET | `/api/students` | Retrieve all students |
| GET | `/api/students/:id` | Retrieve one student |
| POST | `/api/students` | Create a student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

## Example Request Body

Use this JSON when creating or updating a student in Postman.

```json
{
  "name": "Pedro Reyes",
  "course": "BSIT",
  "year": 3
}
```

For POST and PUT requests, select **Body → raw → JSON** in Postman.

## HTTP Status Codes

- `200 OK` — Request successful.
- `201 Created` — Student created successfully.
- `400 Bad Request` — Invalid student information.
- `404 Not Found` — Student or route not found.

## GitHub Repository

https://github.com/alrichjaytapoc202400095-cloud/student-api.git

## Render Deployment

https://student-api-am72.onrender.com

## Limitations

This project stores student records in an in-memory array. Records are temporary and may reset when the server restarts or the deployment instance is replaced. A database is not used in this activity.

## Author

Alrich Jay S. Tapoc

Integrative Programming & Technology (ITPE101)

Laboratory Activity 9: Building, Testing, and Deploying a RESTful API
