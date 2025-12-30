# Node LTS moderno (Hardhat 2 avisa, mas funciona bem em Node 22)
FROM node:22-alpine

WORKDIR /app

# Cache de deps: copiamos manifests
COPY package.json package-lock.json ./
COPY packages/contracts/package.json packages/contracts/package.json

# Instala deps
RUN npm ci

# Copia tudo
COPY . .

# Por padrão este container fica "ocioso" para você rodar comandos via `docker compose run`
CMD ["sh", "-lc", "echo 'Use: docker compose run --rm contracts <comando>'; sleep infinity"]
