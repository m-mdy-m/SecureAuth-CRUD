# SecureAuth-CRUD

SecureAuth-CRUD is a mini-project showcasing user authentication, authorization, and CRUD operations using Node.js, Express, MongoDB, and various related libraries.

## Features

- **User Authentication:** Register, login, and logout securely using bcryptjs and express-session.
- **Authorization:** Users can only edit/delete their own products.
- **CRUD Operations:** Create, read, update, and delete products associated with user accounts.
- **CSRF Protection:** Implemented to prevent Cross-Site Request Forgery.
- **Password Change:** Users can securely update their passwords.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- bcryptjs
- connect-mongodb-session
- csurf
- ejs
- express-session
- mongoose
- nodemailer
- nodemon

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database and configure the connection.
4. Configure environment variables.
5. Run the project using `npm start` or `nodemon`.

## Usage

- Register an account or log in if you already have one.
- Access and manage your own products.
- Change your password securely.

## Contributing

Contributions are welcome! Fork the repository and create a pull request with your improvements or suggestions.

## License

This project is licensed under the [MIT License](https://github.com/m-mdy-m/SecureAuth-CRUD/blob/main/LICENSE).

## Acknowledgements

Special thanks to [list any contributors or resources you used here].

