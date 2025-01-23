# Retail Pulse - Backend Service

## Project Description
Retail Pulse provides a backend service to process thousands of images collected from stores. The service calculates image perimeters and stores results. It also handles job submissions and status updates via APIs.

# Demo video

# Screenshot of important **APIs**

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
    - Example payload:
      ```json
      {
          "count": 2,
          "visits": [
              {
                  "store_id": "RP00001",
                  "image_url": ["<image_url1>", "<image_url2>"],
                  "visit_time": "2025-01-23T12:00:00"
              }
          ]
      }
      ```
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

## Contributing
Feel free to fork this repository, open issues, or make pull requests to contribute.

## License
This project is licensed under the MIT License.

## Contact
Shubham - shubham@example.com
