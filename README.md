#  Student Support AI Chatbot

An AI-powered chatbot designed to provide students with quick answers to common questions related to college and student support services.

##  Project Overview

The Student Support AI Chatbot uses Natural Language Processing (NLP) and Machine Learning techniques to understand student questions and provide the most relevant answer from a predefined knowledge base.

The system uses:

- Python
- Flask
- Scikit-learn
- TF-IDF Vectorization
- Cosine Similarity
- HTML
- CSS
- JavaScript

##  Features

- Student support chatbot
- NLP-based question matching
- TF-IDF text vectorization
- Cosine similarity
- Attendance information
- Examination information
- Library information
- Fee information
- Assignment information
- Student services information
- Unknown question handling
- Responsive web interface
- REST API backend

##  How the AI Works

The chatbot follows these steps:

1. Student enters a question.
2. The question is cleaned and preprocessed.
3. TF-IDF converts the question into numerical features.
4. Cosine similarity compares the question with stored questions.
5. The most similar question is selected.
6. The corresponding answer is returned.
7. If similarity is below the required threshold, the chatbot provides a fallback response.

##  Project Structure

```text
student-support-ai-chatbot/
│
├── app.py
├── chatbot.py
├── data.json
├── requirements.txt
├── README.md
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
