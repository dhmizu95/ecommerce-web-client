# Stage 1: Install dependencies and build the application
FROM node:18-alpine AS builder

WORKDIR /app
# Copy files needed for installing dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the source code
COPY . .
# Build the application, which creates the .next/standalone folder
RUN npm run build

# Stage 2: Create the final, minimal image
FROM node:18-alpine AS runner

WORKDIR /app

# Don't run the application as root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy the standalone application from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# If you have a public folder, copy that too
# COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# The application port
EXPOSE 3000

# Set the correct Node.js environment variable
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", "server.js"]
