# Module Federation Demo with Rsbuild

This project demonstrates Module Federation using Rsbuild with a host application and a provider application.

## Project Structure
- `host/` - Consumer application (port 3000)
- `provider/` - Component provider application (port 3001)

## Development Mode

Start both applications in development mode:

```bash
# Terminal 1 - Start provider
cd provider
npm install
npm run dev

# Terminal 2 - Start host
cd host
npm install
npm run dev
```

Visit:
- Host: http://localhost:3000
- Provider: http://localhost:3001

## Preview Mode

Build and preview the production builds locally:

```bash
# Terminal 1 - Build and preview provider
cd provider
npm run build
npm run preview

# Terminal 2 - Build and preview host
cd host
npm run build
npm run preview
```

## Docker Deployment

Run both applications using Docker Compose:

```bash
# Build and start containers
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

Docker URLs:
- Host: http://localhost:3000
- Provider: http://localhost:3001

## Features
- React with TypeScript
- Module Federation
- React Router for navigation
- Nginx serving production builds
- Tailwind CSS for styling