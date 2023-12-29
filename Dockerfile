# Use the official Node.js 16 image based on Alpine Linux
FROM node:20-alpine

# Create a directory named "sowme" in the container file system
RUN mkdir -p /sowme

# Set the working directory for subsequent instructions to /sowme
WORKDIR /sowme

# Copy all files from the current directory into /sowme in the container
COPY . .

# Install Node.js dependencies based on package.json
RUN npm install

# Run the build script defined in package.json
RUN npm run build

# Inform Docker that the container will listen on port 3000 at runtime
EXPOSE 3000

# Set the default command to run when the container starts
CMD ["npm", "start"]
