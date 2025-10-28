TenTwenty — Timesheet Web App

TenTwenty is a full-stack web application built with React, Tailwind CSS, and Express JS.
It allows users to log in, view, and manage timesheets efficiently with a clean responsive interface.

🚀 Features

🔐 User authentication (Login page)

📊 Timesheet data fetching via REST API

🎨 Responsive design using Tailwind CSS

⚡ Backend built with Express JS and Node JS

🌐 Deployed easily on Vercel (frontend + backend)

🛠️ Tech Stack

Frontend

React 18 +

Tailwind CSS 4 +

Create React App / Vite (depending on setup)

Backend

Node.js 18 +

Express JS

CORS enabled

Deployed to Vercel / Render / Railway


⚙️ Setup Instructions
🖥️ Frontend
cd frontend
npm install
npm start


Frontend runs at (https://ten-twenty-fawn.vercel.app/)

⚙️ Backend
cd backend
npm install
npm run api


Backend runs at (https://ten-twenty-wq6f.vercel.app/)

🔧 Environment Variables
Frontend .env
REACT_APP_Backend_URL=http://localhost:5000

Backend .env
FRONTEND_URL=http://localhost:3000
PORT=5000

🧠 Key Scripts
Command	Description
npm start	Start React development server
npm run build	Build frontend for production
npm run api	Start Express backend
npm run dev	Run backend with nodemon (optional)
💅 Tailwind CSS Setup (React)

Install Tailwind:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Add to tailwind.config.js:

content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"]


Add to index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

🧩 Deployment

Frontend:
Deploy on Vercel
 — it automatically detects React.

Backend:
Deploy as a separate Vercel project or on Render/Railway with your .env configured.

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to modify.

📜 License

This project is open-source and available under the MIT License
.
🕒 Time Spent
   2 Days

   
👨‍💻 Author

Karan Sahu
GitHub: @karan-cymk
