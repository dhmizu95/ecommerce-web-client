# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production (outputs standalone build)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 e-commerce project using the App Router with React 19.

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 (via @tailwindcss/postcss)
- **Language**: TypeScript (strict mode)
- **Linting**: ESLint 9 with next/core-web-vitals and next/typescript configs

### Project Structure
- `app/` - App Router pages and layouts
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/(client)/` - Customer-facing storefront (route group)
- `app/(admin)/admin/` - Admin dashboard (route group)
- `public/` - Static assets

### Route Groups
The app uses Next.js route groups to separate the two applications:

**Client App** (`/`) - Customer storefront
- `/` - Home page
- `/products` - Product listing
- `/products/[id]` - Product detail
- `/cart` - Shopping cart
- `/checkout` - Checkout flow

**Admin App** (`/admin`) - Dashboard
- `/admin` - Dashboard
- `/admin/products` - Product management
- `/admin/products/new` - Add product
- `/admin/products/[id]` - Edit product
- `/admin/orders` - Order management
- `/admin/orders/[id]` - Order detail
- `/admin/customers` - Customer management
- `/admin/customers/[id]` - Customer detail

### Path Aliases
- `@/*` maps to the project root (e.g., `@/app/page.tsx`)

### Build Configuration
- Output mode is set to `standalone` in next.config.ts for containerized deployments
