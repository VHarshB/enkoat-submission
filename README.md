# Enkoat Roofing Quote Dashboard

## 🛠️ Project Summary

This project is a full-stack web application built for submitting and visualizing roofing project quotes. It consists of:

1. **Contractor Quote Submission Form** – A responsive React-based form that collects key project details.
2. **REST API & Backend** – A Node.js server with MongoDB integration to store and retrieve quote submissions.
3. **Performance Dashboard** – A static HTML/JS dashboard visualizing trends and insights using mock roofing data.

---

## 📦 Tools & Technologies Used

- **Frontend (Form)**: React, CSS, HTML
- **Frontend (Dashboard)**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB (local or Atlas)
- **Mock Data Generation**: ChatGPT
- **Visualization**: Chart.js (Bar, Pie, Line Charts)

---

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/VHarshB/enkoat-submission.git
```

### 2. Form Frontend (React)

```bash
cd form/client
npm install
npm start
```
The form will be running on http://localhost:3000

### 3. Backend API Server (Node.js)

```bash
cd form/client
npm install
npm start
```
The server will be running on http://localhost:5000

Make sure MongoDB is running locally or update the MongoDB connection string in the code if you're using MongoDB Atlas.

Database name: enkoatDB

### 4. Dashboard

```bash
cd ../../encode-dashboard
```

Simply open index.html in your browser.

##  Mock Data

Mock dataset used for dashboard visualization is provided in:
```bash
encode-dashboard/dataset.csv
```
This dataset simulates 1000+ roofing project entries across various states, roof types, and sizes.

## Dashboard Visualizations Include:
- Number of projects by state (Pie Chart)
- Average roof size by roof type (Bar Chart)
- Monthly trends of completed projects (Line Chart)

## What I’d Improve With More Time
- Add authentication & authorization
- Enhance dashboard with more interactive visualizations
- Add features like data filtering, PDF report export, and Google Maps heatmap