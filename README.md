![image](./public/demo-image.png)

<br>
<br>
<br>

<h1 align="center">SQL Tadka - Built with React</h1>

<br>

## 🧐 Overview

This is a **ReactJS** powered SQL Tadka, allowing users to execute SQL queries effortlessly.

The application features an intuitive SQL Tadka where users can write queries and interact with two key buttons: **Clear** and **Run**. Upon clicking **Run**, the editor extracts the table name from the query and checks if it exists in a predefined list of supported tables (**TABLE_NAMES**). If the table exists, an API request fetches data from a URL, and the query is executed using **alasql**, returning results in JSON format, which are then displayed in a structured table.

### Key Features:

- **Table Names Section** - Displays supported table names for easy reference. Includes a **search bar**.
- **History Panel** - Stores previously executed queries with their status. Also includes a **search bar**.

> _Currently, only `SELECT` queries are supported. More functionalities will be added in future updates._

## Directory Structure
```
sql-tadka/
├── public/
├── src/
│   ├── components/
│   │   ├── Editor.css
│   │   ├── Editor.js
│   │   ├── ReactTable.js
│   │   ├── ResultSection.css
│   │   ├── ResultSection.js
│   │   ├── SearchComponent.css
│   │   ├── SearchComponent.js
│   │   ├── SideNavbar.css
│   │   └── SideNavbar.js
│   ├── constants/
│   │   └── constants.js
│   ├── contexts/
│   │   └── EditorContext.js
│   ├── helpers/
│   │   └── helpers.js
│   ├── LandingPageComponents/
│   │   └── Navbar.js
│   └── pages/
│       ├── SQLEditor.css
│       ├── SQLEditor.js
│       ├── App.js
│       └── index.js
├── styles/
│   └── styles.css
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 🚀 Live Demo

The application is hosted on Vercel. Check it out here:

<h3><a href="https://sql-tadka.vercel.app/">SQL-Tadka</a></h3>

<br>

## 📝 Sample Queries to Try

1. `SELECT * FROM Customers;`
2. `SELECT * FROM Categories;`
3. `SELECT * FROM Employee_territories;`
4. `SELECT * FROM Employees;`
5. `SELECT * FROM Orders;`
6. `SELECT * FROM Products;`
7. `SELECT * FROM Suppliers;`
8. `SELECT * FROM Shippers;`
9. `SELECT * FROM Regions;`

<br>

## 🛠 Tech Stack

![ReactJS](https://img.shields.io/badge/ReactJS-61DAFB?&style=for-the-badge&logo=react&logoColor=white&style=plastic)



## 📦 Major Dependencies

- **@uiw/react-codemirror** `4.8.1` - SQL editor component
- **alasql** `1.7.3` - SQL engine for processing CSV data
- **react-hot-toast** `2.2.0` - Notifications for success and error messages
- **react-loader-spinner** `5.1.5` - Loading spinner for table results
- **react-table** `7.8.0` - Dynamic table rendering for query results

<br>

## ⚡ Performance Insights

Using Lighthouse Chrome DevTools, the application's performance was analyzed:

### Desktop Performance
![image](./public/desktop-perf.png)

### Mobile Performance
![image](./public/mobile-perf.png)

- **Performance score ranges between 88-98**
- Other metrics remain consistent

<br>

## 🔧 Optimization Techniques

To enhance performance, the following strategies were implemented:

- Used React's **memo, useMemo, useContext, useState, useEffect and useCallback** hooks to reduce unnecessary re-renders.
- Applied **code-splitting** to the SQL editor component for faster initial load times.

<br>

<h3 align="center">🎉 Thank You for Checking Out SQL Tadka! 🎉</h3>


