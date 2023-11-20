FROM node:18-alpine
WORKDIR /server
COPY package.json /server/
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "node","index" ]