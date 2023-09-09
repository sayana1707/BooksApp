FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем зависимости и файл package.json/package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости из package.json
RUN npm install

# Копируем все файлы приложения в контейнер
COPY . .

# Указываем порт, который контейнер будет слушать
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
