FROM node:19-alpine

WORKDIR /server

COPY ./package.json .

RUN npm install

ENV  SECRET = Sec_Ret12345

COPY . .

EXPOSE 4045

CMD npm start