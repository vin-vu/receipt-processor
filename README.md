# Receipt Processor

This documentation provides a step by step guide to clone, build, and run the application using Docker and run the test cases.

## Prerequisites

Ensure you have the following installed on your machine:
1. [Git](https://git-scm.com/)
2. [Docker](https://www.docker.com/)
3. [Node.js](https://nodejs.org/) (Optional for running tests locally without Docker)

## Getting Started

### 1. Clone the Repository

Use the following command to clone the repository from GitHub:

```bash
git clone https://github.com/vin-vu/receipt-processor.git
```

Navigate to the project directory:

```bash
cd receipt-processor
```
### 2. Build and Run the Docker Image:

Build the Docker Image:
```bash
docker build -t receipt-processor:latest .

````

Run the Docker Container:
```bash
docker run -p 3000:3000 receipt-processor:latest
```

### 3. Run Test Cases

#### Option 1: Running Tests in Docker

Build the Docker image (if not already built):
```
docker build -t receipt-processor:latest .
```
Run the tests:
```
docker run receipt-processor:latest npm test
```

#### Option 2: running Tests Locally

Install dependencies (if not already installed):
```
npm install
```
Run the tests:
```
npm test
```

### 4. Additional Commands
#### Running in Development Mode
To use nodemon for automatic reloads during development:
Install dependencies (if not already installed):
```
npm install
```
Start the development server:
```
npm run dev
```
#### Stopping the Docker Conatiner
Find the running container ID:
```
docker ps
```
Stop the container:
```
docker stop <container-id>
```
