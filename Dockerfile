FROM node:alpine
WORKDIR /app

# Install dependency to serve static build
RUN npm install -g serve

# install app dependencies with caching
COPY package.json ./
COPY package-lock.json ./
RUN npm i


ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "-n", "build"]