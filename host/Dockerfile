FROM node:18-alpine

# Install nginx
RUN apk add --no-cache nginx

# Set up app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Set up nginx
COPY nginx.conf /etc/nginx/http.d/default.conf
RUN mkdir -p /run/nginx

# Copy build to nginx serve directory
RUN cp -r dist/* /usr/share/nginx/html/

# Start both nginx and keep container running
CMD nginx && tail -f /dev/null

EXPOSE 3000 