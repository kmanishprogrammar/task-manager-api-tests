# 🚀 Task Manager API – Testing Assignment

This is a tested version of the **Task Manager API** project, built using **Node.js**, **Express**, and **MongoDB Atlas**, and tested using **Jest**, **Supertest**, and **mongodb-memory-server**.

It includes:
- Unit tests for model logic
- Integration tests with a real in-memory MongoDB
- API endpoint tests with Supertest
- Code coverage report (70%+)
- Screenshot proof of test coverage

---

## 📦 Tech Stack

- ⚙️ **Backend**: Node.js + Express
- 🌱 **Database**: MongoDB Atlas
- 🧠 **ODM**: Mongoose
- 🧪 **Testing**: Jest, Supertest
- 🧰 **Mock DB**: mongodb-memory-server

---

## 📁 Project Structure

```
custom-api-server/
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── tests/
│   ├── unit/taskModel.test.js
│   ├── integration/dbOperations.test.js
│   └── api/taskApi.test.js
├── .env
├── .gitignore
├── jest.config.js
├── server.js
├── README.md
└── screenshots/
    └── image9.png
```

---

## ✅ Features Tested

- ✅ Create a task
- ✅ Read all tasks
- ✅ Update a task
- ✅ Delete a task
- ✅ Model logic (unit test)
- ✅ DB connection & schema (integration test)
- ✅ API routes (Supertest)

---

## 🧪 Testing Summary

| Test Type        | Tool Used            | Description                                      |
|------------------|----------------------|--------------------------------------------------|
| Unit Test        | Jest                 | Tests the task model logic independently         |
| Integration Test | Jest + Mongoose      | Tests Mongoose operations with in-memory DB      |
| API Test         | Supertest + Express  | Tests actual HTTP endpoints (CRUD)               |
| Mock DB          | mongodb-memory-server| Avoids hitting real MongoDB during tests         |

---

## 📸 Test Coverage Screenshot

<p align="center">
  <img src="screenshots\image9.png" width="600" />
</p>

---

## 📂 How to Run the Project

### 🔹 1. Clone the repository

```bash
git clone https://github.com/kmanishprogrammar/task-manager-api-tests.git
cd custom-api-server
```

---

### 🔹 2. Install dependencies

```bash
npm install
```

---

### 🔹 3. Create `.env` file

```env
PORT=5000
MONGO_URI=mongodb+srv://admin:<password>@cluster.mongodb.net/taskdb?retryWrites=true&w=majority
```

Replace `<password>` with your actual MongoDB Atlas password.

---

### 🔹 4. Run the Server

```bash
node server.js
```

API available at: `http://localhost:5000/api/tasks`

---

## 🧪 How to Run Tests

### ✅ Run All Tests

```bash
npm test
```

### ✅ Run with Coverage Report

```bash
npm run test:coverage
```

This will generate:
- CLI coverage table
- HTML report inside `coverage/lcov-report/index.html`

Take a screenshot of the CLI coverage output as proof.

---

## ✍️ Author

**Manish Kumar**  
🎓 Final Year IT Student  
📮 [GitHub Profile](https://github.com/kmanishprogrammar)

---

