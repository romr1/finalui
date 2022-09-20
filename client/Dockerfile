# FROM node:17-alpine
# WORKDIR /app
# COPY package.json package.json
# RUN npm install
# COPY . .
# CMD ["npm", "start"]

# FROM node:latest

# WORKDIR /app 

# COPY . /app 

FROM node:17-alpine
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . /app
