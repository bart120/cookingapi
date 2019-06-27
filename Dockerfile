# selection image de base
FROM node:8

#créer le dossier de l'app
WORKDIR /usr/src/app

COPY package*.json ./

#dev
#RUN npm install 
#prod
RUN npm ci --only=production 

COPY . .

EXPOSE 8080
CMD ["npm", "start"]



