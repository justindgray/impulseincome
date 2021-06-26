FROM node:14.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# You can change this
CMD [ "node", "server" ]