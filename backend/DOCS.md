# ⚙️ Restaurant WebApp — Backend

The API layer for the restaurant ordering platform. Built with **NestJS**, **Prisma**, and **Supabase** (PostgreSQL). Handles orders, menu management, payments, and delivery dispatching.

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── orders/      # Order creation, status updates, history
│   ├── menu/        # Menu items & category management
│   ├── delivery/    # Kwik Delivery / Sendbox API integration
│   └── payments/    # Paystack webhook handling
└── prisma/
    └── schema.prisma  # Database schema
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| NestJS | Backend framework |
| Prisma | ORM |
| Supabase (PostgreSQL) | Database |
| Paystack | Payment processing |
| Kwik Delivery / Sendbox | Last-mile delivery dispatch |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Supabase project
- Paystack secret key
- Kwik Delivery or Sendbox API key

### Installation

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_supabase_connection_string
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
KWIK_API_KEY=your_kwik_delivery_api_key
SENDBOX_API_KEY=your_sendbox_api_key
PORT=3001
```

### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to Supabase
npx prisma db push
```

### Run Dev Server

```bash
npm run start:dev
```

API runs on `http://localhost:3001`

---

## 📡 API Overview

### Orders
| Method | Endpoint | Description |
|---|---|---|
| POST | `/orders` | Create new order |
| GET | `/orders/:id` | Get order by ID |
| PATCH | `/orders/:id/status` | Update order status |
| GET | `/orders/restaurant/:id` | Get all orders for a restaurant |

### Menu
| Method | Endpoint | Description |
|---|---|---|
| GET | `/menu` | Get full menu |
| GET | `/menu/:category` | Get menu by category |
| POST | `/menu` | Add menu item (admin) |
| PATCH | `/menu/:id` | Edit menu item (admin) |
| DELETE | `/menu/:id` | Remove menu item (admin) |

### Payments
| Method | Endpoint | Description |
|---|---|---|
| POST | `/payments/webhook` | Paystack webhook handler |

### Delivery
| Method | Endpoint | Description |
|---|---|---|
| POST | `/delivery/dispatch` | Auto-dispatch rider on order confirmation |
| POST | `/delivery/webhook` | Receive delivery status updates from Kwik/Sendbox |

---

## 🔄 Order Flow

```
Customer Places Order
       ↓
Paystack Payment Confirmed (webhook)
       ↓
Order Created in DB → Restaurant Notified (Supabase Realtime)
       ↓
Restaurant Accepts → Rider Auto-Dispatched (Kwik/Sendbox)
       ↓
Delivery Webhooks → Customer Tracking Updated in Real-time
       ↓
Order Delivered ✓
```

---

## 🔗 Related

- [Frontend README](../frontend/README.md)
- [Root README](../README.md)