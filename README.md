# 📚 Book Keeping Web Application

A full-stack web application designed to help users efficiently log, manage, update, and delete books from a central digital repository.

---

## 🌐 Live Deployments

* **Frontend (Vercel):** [https://full-stack-book-keeping-web-application.vercel.app](https://full-stack-book-keeping-web-application.vercel.app)
* **Backend API (Render):** [https://full-stack-book-keeping-web-application.onrender.com](https://full-stack-book-keeping-web-application.onrender.com)

> **Note:** The backend API is hosted on Render's free tier. If the service has been idle for more than 15 minutes, the initial request may take ~30–50 seconds to respond while the web instance wakes up.

---

## 🛠️ Tech Stack

### **Frontend**
* **React.js** (Vite)
* **JavaScript (ES6+)**
* **CSS3**

### **Backend**
* **Python / Django**
* **Django REST Framework (DRF)**
* **django-cors-headers** (CORS management)
* **SQLite3**

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/books/` | Fetch all books |
| `POST` | `/api/books/create/` | Add a new book |
| `PUT` | `/api/books/<id>/` | Update an existing book's details |
| `DELETE` | `/api/books/<id>/` | Remove a book |

---

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME
