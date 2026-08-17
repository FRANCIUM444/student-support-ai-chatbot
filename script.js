const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");
const sendButton = document.getElementById("sendButton");


/* -----------------------------------
   Add message to chat
----------------------------------- */

function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        "message",
        sender === "user"
            ? "user-message"
            : "bot-message"
    );


    const avatar = document.createElement("div");

    avatar.classList.add("avatar");

    avatar.textContent =
        sender === "user"
            ? "👤"
            : "🤖";


    const content = document.createElement("div");

    content.classList.add("message-content");


    const name = document.createElement("div");

    name.classList.add("message-name");

    name.textContent =
        sender === "user"
            ? "You"
            : "Student Support AI";


    const bubble = document.createElement("div");

    bubble.classList.add("message-bubble");

    bubble.innerHTML = message;


    content.appendChild(name);

    content.appendChild(bubble);

    messageDiv.appendChild(avatar);

    messageDiv.appendChild(content);


    chatMessages.appendChild(messageDiv);


    scrollToBottom();
}


/* -----------------------------------
   Typing indicator
----------------------------------- */

function showTyping() {

    const typingDiv = document.createElement("div");

    typingDiv.id = "typingIndicator";

    typingDiv.classList.add(
        "message",
        "bot-message"
    );


    typingDiv.innerHTML = `
        <div class="avatar">🤖</div>

        <div class="message-content">

            <div class="message-name">
                Student Support AI
            </div>

            <div class="message-bubble typing">
                Thinking...
            </div>

        </div>
    `;


    chatMessages.appendChild(typingDiv);

    scrollToBottom();
}


/* -----------------------------------
   Remove typing indicator
----------------------------------- */

function removeTyping() {

    const typing =
        document.getElementById(
            "typingIndicator"
        );

    if (typing) {
        typing.remove();
    }
}


/* -----------------------------------
   Scroll chat to bottom
----------------------------------- */

function scrollToBottom() {

    const chatContainer =
        document.querySelector(
            ".chat-container"
        );

    chatContainer.scrollTop =
        chatContainer.scrollHeight;
}


/* -----------------------------------
   Send question to Flask
----------------------------------- */

async function sendMessage(message) {

    if (!message.trim()) {
        return;
    }


    addMessage(
        escapeHtml(message),
        "user"
    );


    userInput.value = "";

    sendButton.disabled = true;

    showTyping();


    try {

        const response = await fetch(
            "/api/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    message: message
                })
            }
        );


        const data = await response.json();


        removeTyping();


        if (data.success) {

            let botResponse =
                escapeHtml(data.response);


            /*
             * Convert line breaks into HTML breaks
             */
            botResponse =
                botResponse.replace(
                    /\n/g,
                    "<br>"
                );


            addMessage(
                botResponse,
                "bot"
            );


        } else {

            addMessage(
                "Sorry, I couldn't process your question.",
                "bot"
            );
        }


    } catch (error) {

        removeTyping();

        console.error(error);


        addMessage(
            "Unable to connect to the server. Please try again.",
            "bot"
        );

    } finally {

        sendButton.disabled = false;

        userInput.focus();
    }
}


/* -----------------------------------
   Form submit
----------------------------------- */

chatForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const message =
            userInput.value.trim();

        if (message) {
            sendMessage(message);
        }
    }
);


/* -----------------------------------
   Suggested question
----------------------------------- */

function askSuggestion(question) {

    sendMessage(question);
}


/* -----------------------------------
   Basic HTML escaping
----------------------------------- */

function escapeHtml(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}
