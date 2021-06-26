FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 80 3000
CMD [ "npm", "start" ]