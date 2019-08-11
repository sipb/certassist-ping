FROM node:alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . .
RUN npx webpack-cli -p

FROM astefanutti/scratch-node
COPY --from=builder /app/dist/main.js /
ENTRYPOINT ["node", "main.js"]
