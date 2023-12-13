FROM node:20.9.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]

# BUILD THE IMAGE : docker build -t malek-app . 

# RUN THE IMAGE : docker run -p 5000:3000 malek-app
