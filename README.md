## Offline Font Setup

This project is configured to work **completely offline**.

### First-time setup (run once while online)

```bash
node download-fonts.js
```

This downloads all fonts into `frontend/src/assets/fonts/`:
- **Material Icons** — for all the icons in the UI
- **Plus Jakarta Sans** — main UI font (weights 300–800)  
- **Space Mono** — monospace font for IDs and dates

### What happens without running it?
- The app still works and looks correct
- Icons will show as text (e.g., `people` instead of 👥)
- Fonts will fall back to your system fonts (Arial, Roboto, etc.)

### After running it
All fonts are stored locally. The app works 100% offline with no CDN or internet dependency.

---

# 🏢 HRM Web Application

A Beginner HRM (Human Resource Management) Web Application built with:
- **Frontend**: Angular 17 + TypeScript + Angular Material
- **Backend**: Node.js + TypeScript (built-in modules only)

---

## 📁 Project Structure

```
hrm-project/
├── backend/
│   ├── src/
│   │   └── server.ts        ← Node.js HTTP server
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── app.component.ts
    │   │   ├── app.config.ts
    │   │   ├── app.routes.ts
    │   │   ├── hrm.service.ts           ← API service
    │   │   ├── navbar/
    │   │   │   └── navbar.component.ts
    │   │   ├── dashboard/
    │   │   │   └── dashboard.component.ts
    │   │   ├── employee-list/
    │   │   │   └── employee-list.component.ts
    │   │   ├── add-employee/
    │   │   │   └── add-employee.component.ts
    │   │   └── leave-request/
    │   │       └── leave-request.component.ts
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.scss
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

---

## 🚀 Setup Instructions

### Prerequisites
Make sure you have these installed:
- **Node.js** (v18 or above) → https://nodejs.org
- **npm** (comes with Node.js)

Check versions:
```bash
node -v
npm -v
```

---

### Step 1 — Setup & Run the Backend

Open a terminal and run:

```bash
cd hrm-project/backend
npm install
npm run dev
```

✅ Backend will start at: **http://localhost:3000**

You should see:
```
✅  HRM Backend running at http://localhost:3000
```

---

### Step 2 — Setup & Run the Frontend

Open a **second terminal** and run:

```bash
cd hrm-project/frontend
npm install
npm start
```

✅ Frontend will start at: **http://localhost:4200**

Open your browser and go to → **http://localhost:4200**

---

## 📱 Screens

| Screen | Route | Description |
|--------|-------|-------------|
| Dashboard | `/dashboard` | Summary cards (Total, Active, Leave, Departments) |
| Employee List | `/employees` | Table of all employees |
| Add Employee | `/add-employee` | Form to add new employee |
| Leave Request | `/leave` | Submit & view leave requests |

---

## 🔌 API Endpoints (Backend)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard` | Dashboard stats |
| GET | `/api/employees` | All employees |
| POST | `/api/employees` | Add new employee |
| GET | `/api/leave-requests` | All leave requests |
| POST | `/api/leave-requests` | Submit leave request |

---

## ⚙️ Tech Stack Summary

- **Angular 17** — Component-based frontend framework
- **TypeScript** — Typed JavaScript
- **Angular Material** — UI component library
- **Node.js** (built-in `http` module) — Backend server
- **No database** — Sample data stored in memory
- **No external npm packages** on backend (only devDependencies for TS)

---

## 📝 Notes

- Both frontend and backend must be running at the same time
- Data resets every time the backend restarts (in-memory only)
- Backend runs on port **3000**, frontend on port **4200**
