FROM node:18-alpine

WORKDIR /app

COPY package.json ./

# Install dependencies using Yarn
RUN yarn install

COPY . .

# Build the application
RUN yarn build

COPY .next ./.next

# Run the development server
CMD ["yarn", "dev"]
