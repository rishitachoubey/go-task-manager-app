# 🧩 Smart Task Manager App

A feature-rich task management platform built with **React**, **Redux**, and **styled-components** for the GoComet assignment.

---

## 🚀 Features

### 📋 Table View (`/table`)
- Custom-built table (no external Table libs)
- Infinite scroll for tasks
- Filtering by status, priority, and assignee
- Search by task name/description
- Sorting by columns
- Edit Columns Modal (show/hide & reorder with persistence)
- Side Drawer on row click to show task details and comments

### 📊 Dashboard View (`/dashboard`)
- Uses the same dataset as TableView
- Line chart of tasks **Completed per Day**
- Line chart of tasks **Due per Day**
- Pie chart of **Estimated Hours** breakdown
- Reusable Filters from Table View

---

## 🧠 Tech Stack

- **Framework**: React (CRA)
- **State Management**: Redux Toolkit
- **Styling**: styled-components
- **Routing**: React Router
- **Charts**: Recharts
- **Testing**: Jest + React Testing Library

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/go-task-manager-app.git
cd go-task-manager-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

### 4. Run tests

```bash
npm test
```

---

## 📁 Folder Structure

```
src/
├── api/                # Simulated API
├── components/         # UI components
│   ├── table/          # Table, Row, EditColumnsModal
│   ├── drawer/         # Task Drawer
│   ├── dashboard/      # Recharts components
│   └── common/         # Filters, Loader, etc.
├── features/           # Redux slices
├── pages/              # Route-level components
├── styles/             # Theme and global styles
├── App.js              # Main route config
└── store.js            # Redux store config
```

---

## ✅ Bonus Points Implemented

- Infinite loading with visual loading indicators
- Column settings with persistence (localStorage)
- Responsive and accessible UI
- Shared filters between table and dashboard
- Unit tests for components

---

## 📸 Live Demo

[🔗 https://go-task-manager-app.vercel.app/table]

---

## ✍️ Author

**Rishita Choubey**  
Frontend Developer | AI & Product Enthusiast  
📧 rishitachoubey78@gmail.com  
🌍 India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
