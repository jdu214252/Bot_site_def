# Используем официальный образ Node.js для сборки
FROM node:16 as build-stage

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код в контейнер
COPY . .

# Собираем Vue.js проект для продакшн
RUN npm run build

# Используем Nginx для обслуживания статических файлов
FROM nginx:alpine as production-stage

# Копируем собранные файлы из первого этапа
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Устанавливаем переменную окружения, чтобы Nginx не запускал свой демона
ENV NGINX_HOST=0.0.0.0
ENV NGINX_PORT=80

# Открываем порт 80 для фронтенда
EXPOSE 80

# Запускаем Nginx, чтобы обслуживать собранные файлы
CMD ["nginx", "-g", "daemon off;"]
