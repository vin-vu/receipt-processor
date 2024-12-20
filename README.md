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

```

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

## Using the Receipt Processor API

It is highly recommended to use Postman to make API calls.

### Step 1: Process a Receipt

First send a POST request to the following endpoint:

```
POST http://localhost:3000/receipts/process
```

Include the following JSON body in the request:

```json
{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    {
      "shortDescription": "Mountain Dew 12PK",
      "price": "6.49"
    },{
      "shortDescription": "Emils Cheese Pizza",
      "price": "12.25"
    },{
      "shortDescription": "Knorr Creamy Chicken",
      "price": "1.26"
    },{
      "shortDescription": "Doritos Nacho Cheese",
      "price": "3.35"
    },{
      "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
      "price": "12.00"
    }
  ],
  "total": "35.35"
}
```

If the receipt is valid, the response will include a randomly generated ID:

```
{
  "id": "84eac565-d783-4611-958c-e8133e8d265b"
}
```

If the receipt is invalid, you will receive a 400 response with an error message describing the issue(s) in the receipt.

### Step 2: Retrieve points for the Receipt

Retrieve the points for the processed receipt by sending a GET request to: http://localhost:3000/receipts/{id}/points

Replace {id} with the ID returned in the previous step.

```
GET http://localhost:3000/receipts/84eac565-d783-4611-958c-e8133e8d265b/points
```

If the ID is valid, the response will look like:

```json
{
  "points": 28
}
```
If the ID is invalid or does not exist, you will receive a 404 Not Found response.