# 📝 React + Redux Blog Application

A modern Blog Post Application built using **React**, **Redux Toolkit**, and **Context API** with a clean UI and dark/light theme support.

---

## 🚀 Features

* 📄 Display list of blog posts
* 🔍 View detailed blog post
* ➕ Add new blog post
* ✏️ Edit existing post
* ❌ Delete post
* ❤️ Like post functionality
* 🌙 Dark / Light theme toggle
* 💾 Data persistence using localStorage
* 🎨 Modern responsive UI (Tailwind CSS)

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **State Management:** Redux Toolkit
* **Context API:** Theme (Dark/Light mode)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Storage:** localStorage

---

## 📁 Project Structure

```
Blogs/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PostCard.jsx
│   │   └── PostForm.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── PostDetails.jsx
│   │
│   ├── store/
│   │   ├── index.js
│   │   └── postsSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Local Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
cd Blogs
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:5173
```

---

## 🧠 Redux vs Context API Usage

### ✅ Redux (Global State Management)

Used for managing **blog posts data**:

* Add, edit, delete posts
* Like functionality
* Centralized state (postsSlice)

👉 Why Redux?

* Predictable state management
* Scalable for large applications
* Easy debugging

---

### ✅ Context API (Theme Management)

Used for **dark/light theme toggle**:

* Stores `dark` state globally
* Controls UI theme across app

👉 Why Context?

* Lightweight
* Perfect for UI-level global state (theme, auth, etc.)

---

## 🌐 Deployment

The application is successfully deployed on **Microsoft Azure** and accessible via a public URL.

---

## ✨ Assumptions Made

* No backend is used; data is stored in **localStorage**
* Images are provided via URL input
* Single user system (no authentication)
* Basic validation applied for forms

---

## 📦 Deliverables

* ✅ Public GitHub Repository
* ✅ Clean project structure (no node_modules)
* ✅ Complete README.md
* ✅ Deployed application on Azure

---

## 💡 Future Improvements

* Add authentication (login/signup)
* Add comments feature
* Backend integration (Node.js / Firebase)
* Image upload instead of URL
* Search & filter posts

---

## 👨‍💻 Author

Developed as part of assignment using React + Redux + Context API.


