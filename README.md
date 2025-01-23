# Retail Pulse - Backend Service

## Project Description
Retail Pulse provides a backend service to process thousands of images collected from stores. The service calculates image perimeters and stores results. It also handles job submissions and status updates via APIs.

# Demo Video
https://github.com/user-attachments/assets/6aa33c31-c442-491c-99cb-a4a21f8982d4


# Screenshot of important **API's**
![Screenshot (332)](https://github.com/user-attachments/assets/acd60ba5-8d75-45f2-8466-2976234cab24)
![Screenshot (333)](https://github.com/user-attachments/assets/3a180a48-a06f-41d1-a0ec-f08ada7b92f6)
![Screenshot (334)](https://github.com/user-attachments/assets/2072da20-fa20-41f6-9e99-be46852f83fd)
![Screenshot (331)](https://github.com/user-attachments/assets/221704cf-0f21-4a50-94f3-da6b98eb5f59)


## Assumptions
- MongoDB Cloud is used as the database.
- Node.js version 16+ is required.
- Docker setup for easy deployment.

## Installation (Setup)
1. Clone the repository:
    ```bash
    git clone https://github.com/imShubh03/Retail-Pulse.git
    ```
2. Navigate to the project folder:
    ```bash
    cd Retail-Pulse
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file and add your MongoDB connection URI.
    - Example:
      ```plaintext
      MONGO_URI=your-mongodb-uri
      ```
5. Run the project:
    ```bash
    npm start
    ```

### Docker Setup
1. Build the Docker image:
    ```bash
    docker-compose build
    ```
2. Run the application with Docker:
    ```bash
    docker-compose up
    ```

## Usage
- **Submit a Job**: 
    - POST request to `/api/submit`
    
- **Check Job Status**: 
    - GET request to `/api/status?jobid=123`
    - Returns job status (completed, ongoing, failed).

## Testing Instructions
- Run unit tests using:
    ```bash
    npm test
    ```
- Alternatively, you can test the API using Postman.

## Technologies Used
- Node.js
- Express
- MongoDB (Cloud Cluster)
- Docker

## Work Environment
- OS: Windows 10
- IDE: VSCode
- Node.js version: 16.x

## Future Improvements
- Add image validation before processing.
- Optimize the image processing logic for larger datasets.
- Implement job retry mechanism for failed jobs.

## Contact
Shubham - shubhamsonake307@gmail.com
