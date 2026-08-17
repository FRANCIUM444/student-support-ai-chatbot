from flask import Flask, render_template, request, jsonify
from chatbot import get_response
import os

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        if not data or "message" not in data:
            return jsonify({
                "success": False,
                "response": "Please enter a question."
            }), 400

        message = data["message"].strip()

        if not message:
            return jsonify({
                "success": False,
                "response": "Please enter a question."
            }), 400

        response, confidence = get_response(message)

        return jsonify({
            "success": True,
            "response": response,
            "confidence": confidence
        })

    except Exception as e:
        print("Error:", e)

        return jsonify({
            "success": False,
            "response": "Sorry, something went wrong. Please try again."
        }), 500


@app.route("/api/health")
def health():
    return jsonify({
        "status": "online",
        "message": "Student Support AI Chatbot is running."
    })


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=False
    )
