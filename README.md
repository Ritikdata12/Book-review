# 📚 Book Review System API

A fully functional RESTful API for a Book Review Platform built with **Node.js**, **Express.js**, and **MongoDB**, featuring **JWT authentication**, review and rating capabilities, pagination, filtering, and search functionality.

---

## 🚀 Features

- 🔐 **JWT Authentication** (Signup & Login)
- 📚 **Books CRUD** for authenticated users
- ✍️ **Review System** (Create, Update, Delete)
- ⭐ **Average Ratings & Pagination**
- 🔍 **Search Books** by title or author (case-insensitive, partial)
- 🧾 **Filtering** by author and genre
- ⚙️ **Environment Variable Support** using `.env`
- 🧩 **Modular Code Structure**

---

## 🧑‍💻 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Tokens)**
- **dotenv** for configuration
- **bcryptjs** for password hashing

---

## 📁 Project Structure
```
BOOK-PROJ/
│
├── config/
│ └── db.js # Database connection setup
│
├── controllers/
│ ├── authController.js # Handles user signup/login logic
│ ├── bookController.js # Handles book CRUD logic
│ └── reviewController.js # Handles review CRUD logic
│
├── middleware/
│ └── authMiddleware.js # JWT authentication middleware
│
├── models/
│ ├── Book.js # Book schema/model
│ ├── Review.js # Review schema/model
│ └── User.js # User schema/model
│
├── routes/
│ ├── authRoutes.js # Routes for signup and login
│ ├── bookRoutes.js # Routes for book operations
│ └── reviewRoutes.js # Routes for review operations
│
├── .env # Environment variables
├── .gitignore
├── index.js # Main application entry point
├── package.json
├── package-lock.json
└── vercel.json # Deployment config for Vercel
```



---

## 🔐 Authentication

JWT is used for securing routes. Store the token returned from `/login` and send it in the `Authorization` header (`Bearer <token>`) for authenticated requests.

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/book-review-api.git
cd book-review-api

# Install dependencies
npm install

# Create .env file
touch .env

```

## 📦 Api Endpoints
Auth Routes
👉 POST /signup
Register a new user

```bash
curl --location 'https://book-review-eight-dun.vercel.app/api/auth/signup' \
--header 'Content-Type: application/json' \
--data '{
  "username": "ravi",
  "password": "123456"
}
'
```

👉 POST /Login
Login  user

```bash
curl --location 'https://book-review-eight-dun.vercel.app/api/auth/login' \
--header 'Content-Type: application/json' \
--data '{
  "username": "ravi",
  "password": "123456"
}
'

```

👉 post-review-of-books

```bash
curl --location 'https://book-review-eight-dun.vercel.app/api/reviews/682d7abc9d952ede5bec4d8f/reviews' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmQ5N2EwNWQzMjNhOGZlM2Y4MjZiZiIsImlhdCI6MTc0NzgxODQzNCwiZXhwIjoxNzQ3OTA0ODM0fQ.yvd_3u5W75EK73041fusmARtDK9XzRypNXm0HNuMJLI' \
--data '{
  "rating": 10,
  "comment": "nice artwork!"
}
'
```

👉 Delete-review-ofbook

```bash
curl --location --request DELETE 'https://book-review-eight-dun.vercel.app/api/reviews/682d98bb47d3c429a76b91f5' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmQ5N2EwNWQzMjNhOGZlM2Y4MjZiZiIsImlhdCI6MTc0NzgxODQzNCwiZXhwIjoxNzQ3OTA0ODM0fQ.yvd_3u5W75EK73041fusmARtDK9XzRypNXm0HNuMJLI'
```


 👉 Edit-review-of-book
 
```bash
curl --location --request PUT 'https://book-review-eight-dun.vercel.app/api/reviews/682d98e847d3c429a76b91f9' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmQ5N2EwNWQzMjNhOGZlM2Y4MjZiZiIsImlhdCI6MTc0NzgxODQzNCwiZXhwIjoxNzQ3OTA0ODM0fQ.yvd_3u5W75EK73041fusmARtDK9XzRypNXm0HNuMJLI' \
--data '{
    "rating": 10,
    "comment": "noice book"
}'
```

👉 Get-book-by-id

```bash
curl --location 'https://book-review-eight-dun.vercel.app/api/books/682d7abc9d952ede5bec4d8f'
```

👉 get-all-books

```bash
curl --location 'https://book-review-eight-dun.vercel.app/api/books'
```

👉 get-bookby-bookname-and-author

```bash
curl --location 'https://book-review-eight-dun.vercel.app/api/books/search?q=amazing' \
--data ''
`





