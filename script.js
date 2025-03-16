const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// ส่งข้อความ
function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage("👤 คุณ: " + message);
    userInput.value = "";

    // ให้บอทตอบกลับ (จะใช้โมเดลจริงๆ ในภายหลัง)
    const botReply = "🤖 บอทยังไม่ฉลาดพอ แต่กำลังเรียนรู้...";
    appendMessage(botReply);
}

// แสดงข้อความในแชท
function appendMessage(text) {
    const messageDiv = document.createElement("div");
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
