# 🍽️ Restaurant WebApp — Frontend

The customer-facing and admin UI for the restaurant ordering platform. Built with **Next.js** and powered by **Supabase** for real-time updates.

---

## 📁 Project Structure

```
frontend/
└── app/
    ├── menu/        # Customer menu browsing & item selection
    ├── cart/        # Cart management & Paystack checkout
    ├── track/       # Real-time order tracking
    └── admin/       # Restaurant dashboard (orders, menu, revenue)
```

---

## 🖥️ Pages & Features

### Customer Flow
| Route | Description |
|---|---|
| `/menu` | Browse menu by category, add items to cart |
| `/cart` | Review order, enter delivery address, pay with Paystack |
| `/track/[orderId]` | Real-time order status updates |
| `/orders` | Customer order history |

### Admin Flow
| Route | Description |
|---|---|
| `/admin` | Live incoming orders dashboard |
| `/admin/orders` | Accept, reject, update order status |
| `/admin/menu` | Add, edit, remove menu items |
| `/admin/revenue` | Order history & revenue overview |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| Supabase JS Client | Auth & real-time subscriptions |
| Paystack Inline JS | Payment checkout |
| Tailwind CSS | Styling |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Supabase project
- Paystack public key

### Installation

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Run Dev Server

```bash
npm run dev
```

App runs on `http://localhost:3000`

---

## ⚡ Real-time Order Tracking

Order status updates are pushed live to the customer using **Supabase Realtime** subscriptions — no polling needed.

```
Order Placed → Accepted → Preparing → Ready → Rider Assigned → Picked Up → Delivered
```

---

## 🔗 Related

- [Backend README](../backend/README.md)
- [Root README](../README.md)