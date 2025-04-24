# 🏠 Real Estate Application

A full-featured Real Estate Application that allows users to browse, search, and manage properties. It offers features for both buyers and sellers, with an intuitive interface for seamless interaction.

## 📑 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)

## 📝 Introduction

This Real Estate Application provides a platform for users to buy, sell, and rent properties. It allows users to search properties by location, price range, type, and other criteria. Sellers can list their properties and manage them from the dashboard, while buyers can view detailed property information, photos, and contact the sellers directly.

## 🚀 Features

- 🏡 **Property Listings**: View available properties for sale or rent.
- 🔍 **Advanced Search**: Filter properties by location, price, type, and amenities.
- 🖼️ **Property Details**: Detailed information about each property, including images, price, and specifications.
- 🔐 **User Authentication**: Secure login and registration system for buyers and sellers.
- 📊 **Dashboard**: For sellers to manage their listings.
- ✉️ **Contact Form**: For buyers to reach out to sellers directly.
- 📱 **Responsive Design**: Optimized for all devices (desktop, tablet, and mobile).
- 🛠️ **Admin Panel**: Manage users, properties, and listings.

## 🛠️ Technologies Used

- **Frontend**: 
  - ⚛️ ReactJS
  - 📦 Redux (State Management)
  - 🔗 React Router (Routing)
  - 🌐 Axios (API requests)
  - 💅 Bootstrap / Material-UI (UI components)

- **Backend**:
  - 🟩 Node.js
  - 🛠️ Express.js (Web framework)
  - 🗃️ MongoDB (Database)
  - 🔑 JWT (Authentication)
  - ☁️Cloudinary (Image)
 
## 📷 Screenshot

![Screenshot 2025-04-15 131401](https://github.com/user-attachments/assets/3b4c3d51-8bd7-4c0f-98ec-8055fb319e1b)
![Screenshot 2025-04-15 131454](https://github.com/user-attachments/assets/807d1015-0600-4892-8833-40f6b190e5d7)
![Screenshot 2025-04-15 132656](https://github.com/user-attachments/assets/51040a64-9bdb-4203-bbb9-fee770e86a51)
![Screenshot 2025-04-15 132109](https://github.com/user-attachments/assets/a5055aaa-b19e-40e3-a276-63244f4c519c)
![Screenshot 2025-04-15 132044](https://github.com/user-attachments/assets/0519b88a-4934-4049-ac1a-978be42fd041)

## ⚙️ Installation

### 📌 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### 🛠️ Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh2073/Hommies.git

2. Navigate to root directiry:
   ```bash
   cd Hommies
   
3. Install frontend dependencies:
   ```bash
   npm install
4. Install backend dependencies:
   ```bash
   cd backend
   npm install

5. Configure environment variables in both frontend and backend:
   
  Create a .env file in the server directory and set the following variables:
  ```bash
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
  ```
  For the frontend, update API endpoints.
  
6. Start the application:
   
  For Frontend:
  ```bash
  npm run dev
  ```
  For backend:
  ```bash
  cd backend
  nodemon server.js
  ```
## 💻 Usage

Once the application is up and running:

- Register/Login: Users can sign up or log in using the authentication system.

- Browse Properties: View available properties by browsing the listings.

- Advanced Search: Use the search filters to find properties based on preferences.

- Property Details: View detailed property information by clicking on a property card.

- Manage Listings: Sellers can add, edit, or remove properties from their dashboard.

- Contact Sellers: Buyers can contact sellers through a form provided on the property detail page.
