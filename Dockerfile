FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]
#
#FROM nginx:latest
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY www_arenagames_io.crt /etc/nginx/ssl/www_arenagames_io.crt
#COPY arenagames.io.key /etc/nginx/ssl/arenagames.io.key
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
