import json
import re

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# --------------------------------------------------
# Load knowledge base
# --------------------------------------------------

with open("data.json", "r", encoding="utf-8") as file:
    data = json.load(file)


questions = [item["question"] for item in data]
answers = [item["answer"] for item in data]


# --------------------------------------------------
# Text preprocessing
# --------------------------------------------------

def preprocess_text(text):
    text = text.lower()

    # Remove unnecessary characters
    text = re.sub(r"[^a-zA-Z0-9\s]", " ", text)

    # Remove extra spaces
    text = re.sub(r"\s+", " ", text).strip()

    return text


processed_questions = [
    preprocess_text(question)
    for question in questions
]


# --------------------------------------------------
# TF-IDF Vectorizer
# --------------------------------------------------

vectorizer = TfidfVectorizer(
    stop_words="english",
    ngram_range=(1, 2)
)

question_vectors = vectorizer.fit_transform(
    processed_questions
)


# --------------------------------------------------
# Chatbot response function
# --------------------------------------------------

def get_response(user_question):

    user_question = preprocess_text(user_question)

    if not user_question:
        return (
            "Please enter a question.",
            0
        )

    user_vector = vectorizer.transform(
        [user_question]
    )

    similarities = cosine_similarity(
        user_vector,
        question_vectors
    )[0]

    best_match_index = similarities.argmax()

    best_score = similarities[best_match_index]

    # Convert similarity to percentage
    confidence = round(float(best_score) * 100, 2)

    # Minimum similarity required
    MINIMUM_CONFIDENCE = 25

    if confidence < MINIMUM_CONFIDENCE:

        return (
            "I'm sorry, I couldn't find a suitable answer "
            "to your question. Please contact the student "
            "support office for more information.",
            confidence
        )

    return (
        answers[best_match_index],
        confidence
    )
