# 🍽️ Restaurant WebApp Demo

A full-stack restaurant ordering platform that lets customers order directly from a restaurant's own website — cutting out third-party commission platforms like Glovo and Jumia Food.

Built with **Next.js**, **NestJS**, **Prisma**, and **Supabase**.

---

## 🚩 The Problem

Restaurants on Glovo and Jumia Food lose **20–30% commission** on every order. This platform gives restaurants their own ordering system — same experience, zero commission.

---

## ✨ Features

### 🧑‍💻 Customer Side
- Browse menu by category
- Add items to cart
- Checkout with **Paystack** payment integration
- Enter delivery address
- Real-time order tracking
- Order history

### 🏪 Restaurant Admin Side
- Live incoming order dashboard
- Accept / reject orders
- Update order status: `Preparing` → `Ready` → `Picked Up`
- Menu management (add, edit, remove items)
- Order history & revenue overview

### 🛵 Delivery Side
- Integrated with **Kwik Delivery** / **Sendbox** API
- Auto-dispatch rider on order confirmation
- Webhook updates sent back to customer:
  - Rider assigned
  - Order picked up
  - Order delivered

### 🌟 Nice to Have (Roadmap)
- Loyalty & rewards system
- Push notifications
- Promo codes & discounts
- Post-delivery reviews
- Multiple branch support

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js |
| Backend | NestJS |
| ORM | Prisma |
| Database | Supabase (PostgreSQL) |
| Payments | Paystack |
| Delivery | Kwik Delivery / Sendbox |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Supabase project set up
- Paystack API keys
- Kwik Delivery or Sendbox API keys

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/restaurant-webapp-demo.git

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL=your_supabase_connection_string
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PAYSTACK_SECRET_KEY=your_paystack_secret
KWIK_API_KEY=your_kwik_delivery_api_key
```

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
```

### Running the App

```bash
# Run backend
cd backend
npm run start:dev

# Run frontend
cd frontend
npm run dev
```

---

## 📁 Project Structure

```
restaurant-webapp-demo/
├── frontend/          # Next.js customer & admin UI
│   ├── app/
│   │   ├── menu/      # Customer menu & ordering
│   │   ├── cart/      # Cart & checkout
│   │   ├── track/     # Order tracking
│   │   └── admin/     # Restaurant dashboard
├── backend/           # NestJS API
│   ├── src/
│   │   ├── orders/    # Order management
│   │   ├── menu/      # Menu management
│   │   ├── delivery/  # Delivery API integration
│   │   └── payments/  # Paystack webhooks
└── prisma/
    └── schema.prisma  # Database schema
```

---

## 🤝 Delivery Partner

Exploring partnership with **Swoop** for last-mile delivery integration.

---

## 📄 License

MIT