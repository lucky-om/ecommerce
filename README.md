# SoundLux

![SoundLux Preview](public/images/og-preview.png)

SoundLux is a premium headphone and audio equipment e-commerce platform built for the Hackoverflow 2026 hackathon. It provides a lightning-fast, highly responsive user experience with advanced database integrations backing the entire shopping lifecycle.

## 🚀 Features

- **Supabase Backend**: Complete integration for `orders`, `cart`, `wishlist`, `reviews`, and `coupons`. Live database sync running via Supabase Client.
- **Secure Authentication**: Built-in Supabase Auth strictly enforcing login requirements for sensitive routes (checkout, orders list, wishlist).
- **Advanced State Management**: Custom Context Providers managing real-time UI mapping before database mutations.
- **Modern UI & Responsive Design**: Custom CSS grid layouts, floating components, CSS micro-animations, glassmorphism, and seamless mobile scaling.
- **Robust Checkout**: Strong client-side validation ensuring valid order dispatches with integrated price calculation (tax, shipping, mock coupons).
- **SEO Ready**: Standardized Open Graph meta tags and link preview attributes for strong social presence.

## 🛠 Tech Stack
- **Framework**: Next.js 16.2 (React 19)
- **Styling**: Vanilla CSS with comprehensive semantic variables
- **Database / Auth**: Supabase (PostgreSQL + RLS Policies)

## 📦 Local Configuration

### Requirements
- Node.js (v18+)
- Supabase Project URL and Anon Key

### Quick Start
1. Clone the repository and install dependencies
```bash
npm install
```

2. Assign your environment variables in `.env.local`
```text
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Run the development server
```bash
npm run dev
```

4. *(Database Configuration)* Open `supabase-schema.sql` and run it in your Supabase project's SQL Editor to instantiate the `products`, `orders`, `cart`, `reviews`, `coupons`, and `wishlist` tables.

## 🔐 Security Information

- **Row Level Security (RLS)** is strictly implemented on all Supabase tables.
- **Content-Security-Policy (CSP)** is configured in `next.config.ts`.
- Next.js Strict-Transport-Security headers actively block sniffing and cross-origin threats.

---
**Developed by Lucky** for Hackoverflow 2026.
