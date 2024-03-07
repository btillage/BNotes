# Note-Taking App

This project is a full-stack note-taking application featuring a React frontend, Node.js backend, PostgreSQL and Firestore databases, containerized with Docker, and orchestrated with Kubernetes on Google Cloud Platform (GCP).

## Features

- User authentication (register/login).
- CRUD operations for notes.
- Backend API built with Express.js.
- Frontend built with React.
- Uses PostgreSQL for user data and Firestore for notes.
- Containerized with Docker and orchestrated with Kubernetes.
- CI/CD setup with GitHub Actions for automated deployment.

## Local Setup

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Set up environment variables by creating a `.env` file based on `.env.example`.
4. Start the server: `npm start`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the React development server: `npm start`.
4. Open `http://localhost:3000` to view it in the browser.

## Deployment

This project is set up for deployment using Docker and Kubernetes on GCP. Refer to the `deployment` directory for Kubernetes config files and deployment scripts.

## Contributing

Contributions are welcome! Please fork the repository and open a pull request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).
