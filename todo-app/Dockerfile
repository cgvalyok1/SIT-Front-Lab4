# Start your image with a node base image
FROM node:current-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Установка зависимостей
RUN npm install

#  Копируем все файлы из текущей директории в /app внутри контейнера
COPY . .

# Сборка React приложения
RUN npm run build

# Определяем порт, который будет открыт в контейнере
EXPOSE 3000

# Start the app using serve command
CMD [ "npm", "start" ]