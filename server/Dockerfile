FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 4001
CMD ["npm","start"]