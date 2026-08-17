# 🎓 Student Support AI Chatbot

An AI-powered web chatbot designed to help students get quick answers to common college-related questions such as attendance, examinations, library services, fees, assignments, and student support.

## 📌 About the Project

The **Student Support AI Chatbot** uses Natural Language Processing (NLP) and Machine Learning techniques to match a student's question with the most relevant question in its knowledge base and provide an appropriate answer.

### How it works

```text
Student Question
       ↓
Text Preprocessing
       ↓
TF-IDF Vectorization
       ↓
Cosine Similarity
       ↓
Best Matching Question
       ↓
Display Answer
```

## 🚀 Features

* 🤖 AI-based student support
* 🧠 NLP-based question matching
* 📊 TF-IDF and Cosine Similarity
* 💬 Interactive chatbot interface
* 📚 Student support knowledge base
* 🌐 Web-based application
* ☁️ Cloud deployment

## 🛠️ Technologies Used

* **Python** – Programming language
* **Flask** – Backend web framework
* **Scikit-learn** – Machine Learning and NLP
* **TF-IDF** – Text feature extraction
* **Cosine Similarity** – Question matching
* **HTML/CSS** – Frontend
* **JavaScript** – Client-side interaction
* **JSON** – Knowledge base
* **GitHub** – Source code management
* **Render** – Deployment
* **Gunicorn** – Production server

## 📂 Project Structure

```text
student-support-ai-chatbot/
│
├── static/
│   ├── script.js
│   └── style.css
│
├── templates/
│   └── index.html
│
├── app.py
├── chatbot.py
├── data.json
├── requirements.txt
├── .gitignore
└── README.md
```

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/FRANCIUM444/student-support-ai-chatbot.git
```

### 2. Open the project folder

```bash
cd student-support-ai-chatbot
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

**Windows:**

```bash
venv\Scripts\activate
```

**macOS/Linux:**

```bash
source venv/bin/activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the application

```bash
python app.py
```

### 7. Open in browser

Go to:

```text
http://127.0.0.1:5000
```

The chatbot should now be running locally.

## ☁️ Deployment on Render

The application can be deployed online using **Render**.

### Step 1: Connect GitHub

1. Sign in to Render using GitHub.
2. Select **New → Web Service**.
3. Select the repository:

```text
FRANCIUM444/student-support-ai-chatbot
```

4. Select the `main` branch.

### Step 2: Configure the Web Service

**Root Directory:**

Leave empty.

**Build Command:**

```bash
pip install -r requirements.txt
```

**Start Command:**

```bash
gunicorn app:app
```

### Step 3: Deploy

Click **Create Web Service**.

Render will install the dependencies and start the Flask application.

After successful deployment, Render will provide a public URL similar to:

```text
https://student-support-ai-chatbot.onrender.com
```

Open the URL in a browser to access the chatbot online.

## 🔄 Updating the Deployed Application

After making changes to the project:

```text
Edit Code
   ↓
Commit Changes
   ↓
Push to GitHub
   ↓
Render Detects Changes
   ↓
Application Redeploys
```

If automatic deployment is enabled, Render will automatically deploy changes pushed to the connected GitHub branch.

## 🎯 Project Objective

The main objective of this project is to provide students with a simple and accessible AI-based system for getting answers to frequently asked college-related questions.

## 🔮 Future Enhancements

* Voice input
* Multiple language support
* Chat history
* Admin dashboard
* Database integration
* Mobile application
* Advanced AI/NLP models

## ⚠️ Disclaimer

The chatbot provides responses based on its configured knowledge base. Important academic, financial, examination, or administrative information should be verified with the appropriate college department.

## 👨‍💻 Project Information

**Project:** Student Support AI Chatbot

**Type:** Artificial Intelligence / Machine Learning / NLP

**Backend:** Python + Flask

**Deployment:** Render

**Source Code:** GitHub
