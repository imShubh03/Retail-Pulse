#  official Node.js image as the base image
FROM node:18

# Sets the working directory inside the container
WORKDIR /app

# Copies package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# copy the entire application code to the container
COPY . .

# exposing the application port (3000 in this case)
EXPOSE 3000

# defining the command to start the application
CMD ["npm", "start"]
