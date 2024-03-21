# Build: docker build -t node-app . Pecify the parent image 
FROM node:19-alpine
# Specify the working directory
WORKDIR /rici
# Add the node_modules/.bin to the $PATH
# ENV PATH="./node_modules/.bin:$PATH"
# Copy the package.json file to the root working directory
COPY package.json .
# Install the project dependencies
RUN npm install
# Copy the rest of the files to the working directory 
COPY . .
# Build the app
RUN npm run build
# Expose the port 8000
EXPOSE 8000
# Run the app inside the container
CMD ["npm", "run", "dev"]
