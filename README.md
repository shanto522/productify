# Productify

A modern **full-stack Next.js 16 + Express.js** application for managing products.  
Includes public pages, protected pages (mock authentication), and a responsive UI built with Tailwind CSS.

---

## 🌟 Features

### Public Features
- **Landing Page** with 7 sections: Hero, Features, About, Featured Items, CTA, Testimonials, Final CTA  
- **Item List Page**: Fetches and displays all items from the backend API  
- **Item Details Page**: View full details of a single product  

### Authentication
- Mock login using hardcoded credentials:
  - **Email:** `test@example.com`  
  - **Password:** `123456`  
- Authentication status stored in **cookies**  
- Protected routes (e.g., Add Item page) only accessible when logged in  

### Protected Features
- **Add Item Page**:
  - Form to add a new product (Name, Description, Price, Image URL)  
  - Data sent to Express.js backend and stored in JSON file  
  - Toast notification on successful creation  

---

## 🛠 Technologies Used

- **Frontend:** Next.js 16 (App Router), React, Tailwind CSS  
- **Backend:** Express.js, CORS  
- **Data Storage:** Local JSON file (`data/items.json`)  
- **Extras:** react-hot-toast for notifications  

---

## 🚀 Setup & Installation

## 1. **Clone the repository**

```bash
git clone <your-repo-link>
cd productify

## 2. **Install dependencies**

npm install

## 3.**Start the backend server**

cd backend
node server.js

## 4. **Start the Next.js frontend**

npm run dev