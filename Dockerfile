FROM node:14-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . .
RUN npx webpack-cli --mode=production

FROM astefanutti/scratch-node:14
COPY --from=builder /app/dist/main.js /
ENTRYPOINT ["node", "main.js"]
