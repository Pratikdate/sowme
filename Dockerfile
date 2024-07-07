# Use the official  image based on Alpine Linux
FROM node:21-alpine

# Create a directory named "sowme" in the container file system
RUN mkdir -p /sowme

# Set the working directory for subsequent instructions to /sowme
WORKDIR /sowme

# Copy package.json and package-lock.json separately to leverage Docker's layer caching
COPY package.json .
COPY package-lock.json .

# Install Node.js dependencies based on package.json
RUN npm install -g npm@latest
RUN npm install

# Copy all files from the current directory into /sowme in the container
COPY . .



# Inform Docker that the container will listen on port 3000 at runtime
EXPOSE 3000

# Set the default command to run when the container starts
CMD ["npm", "start"]
