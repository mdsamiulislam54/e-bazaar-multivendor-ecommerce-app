# 🛍️ E-Bazaar

**E-Bazaar** is a modern, responsive, and high-performance **e-commerce web application** built with **Next.js** and **TypeScript**.  
It provides a beautiful user experience with advanced features like product filtering, cart management, secure checkout, and role-based admin control.

---
## 🌐 Live Demo

Check out the live version of **E-Bazaar** here:  
[Visit E-Bazaar](https://e-baazar-client.vercel.app)

![E-Bazaar Screenshot](https://i.postimg.cc/GhyKGgfB/e-bazaar.png)


## 🚀 Features

### 🧑‍💻 User Features
- 🔎 **Search & Filter Products** by:
  - Category
  - Price Range
  - Keyword
- 🛒 **Add to Cart System**
  - View all products added to the cart  
  - Increase or decrease product quantity dynamically  
  - Real-time price updates based on quantity changes  
  - Remove items from cart  
  - Cart state managed globally via **Redux Toolkit** 

- 🧾 **Order Management**
  - View all past orders
  - Track order status: **Pending**, **Paid**, **Cancelled**
  - View total number of orders and total amount paid
  - **Delete** any order
  - **Print Invoice** (React to Print)

- 💰 **Checkout System** with:
  - **Product Image Gallery:** View multiple product images in a zoomable gallery  
  - **Image Zoom Feature:** Users can zoom product images for a better look (using `react-inner-image-zoom`)  
  - **Full Product Details:** Users can view all information (description, price, brand, category, stock, etc.)  
  - **Customer Reviews:** See what other users have commented or rated on the product  
  - **Color & Size Selection:** Choose preferred product color and size before checkout  
  - **Stripe Payment Integration:** Secure online card payment  
  - **Cash on Delivery:** Simple offline payment option  
- 🌓 **Dark & Light Mode** (Tailwindcss Theme Integration)

- ⚡ **Optimized Performance** — Image loading speed boosted by **Next.js Image Optimization (80% faster)**

---

### 🛠️ Admin Features (Role-Based Access)
- 📦 Manage Products:
  - Add, Update, Delete Products
  - View Product List
- 📑 Manage Orders:
  - Update Order Status
  - Track Customer Orders
- 👥 Manage Users:
  - Create New Users
  - View User List
- 📊 View Reports (Data Visualized with **Recharts**)
- ✍️ Add and Manage Blogs
- ⚙️ Settings Page for Admin Preferences
- 🌓 **Dark & Light Mode** (Tailwindcss Theme Integration)
---
---

## 🧾 Order System Overview

| Feature | Description |
|----------|-------------|
| 🛍️ View Orders | See all past orders with order ID, amount & date |
| 📦 Order Status | Track **Pending**, **Paid**, and **Cancelled** orders |
| 💵 Payment Summary | See total amount paid and total orders count |
| 🧾 Print Invoice | Print any order invoice using React to Print |
| ❌ Delete Order | User can remove unwanted or cancelled orders |

---
## 🧩 Tech Stack

### Frontend:
- **Next.js (v15.4.5)** — Framework  
- **TypeScript** — Type Safety  
- **React (v19)** — Component Library  
- **Tailwind CSS + DaisyUI** — UI Styling  
- **Framer Motion** — Animation  
- **Lucide React** — Icons  
- **Swiper** — Sliders

### State Management:
- **Redux Toolkit**  
- **Redux Persist**

### Authentication:
- **NextAuth.js** — Secure Authentication & Role Management

### Payment:
- **Stripe Integration** — Card Payments  
- **Cash on Delivery** — Manual Checkout Option

### Data Visualization:
- **Chart.js**
- **Recharts**
- **React Chart.js 2**

### Utilities:
- **Axios** — API Calls  
- **React Hook Form** — Form Handling  
- **React Toastify** — Notifications  
- **SweetAlert2** — Alert Dialogs  
- **React to Print** — Invoice Printing  
- **React Inner Image Zoom** — Product Image Zoom  
- **React Range Slider Input** — Price Range Filter

---
## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/mdsamiulislam54/e-bazaar-multivendor-ecommerce-app.git
cd e-bazaar
npm install
.env
GOOGLE_CLIENT_ID=1096773614086-p02u06e3hihec0r54cbaephb0r6o4t5e.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
NEXTAUTH_SECRET=hhqdhqj3746nsjch892 
NEXTAUTH_URL=https://e-bazaar-client.vercel.app
NEXT_PUBLIC_BASE_URL=https://e-bazaar-server-three.vercel.app
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51RkI5QBTArSoquVqDiQtQd3m45kZXO9vvrFLW1vGwxyjIR0Vjs8W3lqDx2PV9Ww7ik0cae983IzgXfJb44QJklht008UglFATX

npm run dev

Open 
http://localhost:3000

---




```

🧑‍💻 Developer Info

Md. Shamiul Islam 
Frontend Developer | React | Next.js | TypeScript | Tailwind CSS

📧 Email: mdsamiulislam54@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/mdshamiulislam-dev/

🌐 Portfolio: https://shamiul-portfolio.netlify.app/