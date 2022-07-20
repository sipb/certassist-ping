FROM node:16-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY . .
RUN npx webpack-cli --mode=production

FROM astefanutti/scratch-node:16
COPY --from=builder /app/dist/main.js /
ENTRYPOINT ["node", "main.js"]
