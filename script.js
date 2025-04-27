let language = "th"; // Default language is Thai

// Mock profiles
const userName = "You";
const botName = "TBD";
const userAvatar = "https://img5.pic.in.th/file/secure-sv1/1000049084ea52cf432a302e47.jpg";
const botAvatar = "https://img2.pic.in.th/pic/1000057685.jpg";

// Replies
const predefinedReplies = {
  th: {
    "สวัสดี": "สวัสดี! มีอะไรให้ช่วยไหม?",
    "คุณเป็นอย่างไรบ้าง": "ฉันสบายดี ขอบคุณที่ถาม!",
    "คุณชื่ออะไร": "ฉันชื่อแชทบอท ยินดีที่ได้รู้จัก!",
    "สวัสดีตอนเช้า": "สวัสดีตอนเช้า! มีอะไรให้ช่วยไหม?",
    "ราตรีสวัสดิ์": "ราตรีสวัสดิ์! หลับฝันดี!",
    "หน้าที่ของคุณคืออะไร": "ฉันอยู่ที่นี่เพื่อช่วยคุณทุกอย่างที่คุณต้องการ",
    "เล่าเรื่องตลกให้ฟัง": "ทำไมกระดูกถึงไม่สู้กัน? เพราะมันไม่มี guts!",
    "ฉันจะขอความช่วยเหลือได้ไหม": "แน่นอน! คุณต้องการให้ฉันช่วยอะไร?",
    "อากาศวันนี้เป็นอย่างไร": "ขอโทษ ฉันไม่สามารถตรวจสอบสภาพอากาศได้ตอนนี้",
    "เวลานี้กี่โมง": "ขอโทษ ฉันไม่สามารถตรวจสอบเวลาให้คุณได้",
    "คุณอายุเท่าไหร่": "ฉันไม่มีอายุ เพราะฉันเป็นแชทบอท!",
    "คุณชอบทำอะไร": "ฉันชอบการแชทและช่วยเหลือผู้คน",
    "คุณมาจากไหน": "ฉันมาจากโลกดิจิตอล!",
    "คุณช่วยฉันได้ไหม": "แน่นอน! คุณต้องการให้ฉันช่วยอะไร?",
    "คุณชอบสีอะไร": "ฉันไม่มีสีโปรด แต่คิดว่าสีฟ้าก็ดูดีนะ",
    "คุณมีความรู้สึกไหม": "ฉันไม่มีความรู้สึก แต่ฉันออกแบบมาให้ช่วยเหลือคุณ",
    "คุณเป็นของจริงไหม": "ฉันเป็นของจริงในทางดิจิตอล แต่ไม่ใช่มนุษย์",
    "เล่าเรื่องให้ฟังหน่อย": "กาลครั้งหนึ่งมีแชทบอทที่ชอบช่วยเหลือผู้คน...",
    "คุณพูดภาษาต่างประเทศได้ไหม": "ใช่ ฉันสามารถแชทได้หลายภาษา",
    "ความรักคืออะไร": "ความรักคือความรู้สึกที่ลึกซึ้ง แต่ฉันไม่สามารถสัมผัสได้",
    "ใครเป็นประธานาธิบดี": "ขอโทษ ฉันไม่มีข้อมูลล่าสุด แต่คุณสามารถค้นหาข้อมูลได้ทางออนไลน์",
    "คุณเป็นหุ่นยนต์ไหม": "ฉันไม่ใช่หุ่นยนต์ ฉันเป็นแชทบอท!",
    "เมืองหลวงของฝรั่งเศสคืออะไร": "เมืองหลวงของฝรั่งเศสคือปารีส",
    "คุณชอบอาหารอะไร": "ฉันไม่ทานอาหาร แต่ฉันรู้จักอาหารหลายประเภท",
    "คุณเล่นเกมได้ไหม": "ฉันไม่สามารถเล่นเกมได้ แต่ฉันสามารถช่วยคุณค้นหาเกมสนุกๆ ได้",
    "คุณชอบเพลงไหม": "ฉันไม่สามารถฟังเพลงได้ แต่ฉันรู้จักประเภทต่างๆ ของเพลง",
    "ชีวิตมีความหมายอย่างไร": "ความหมายของชีวิตขึ้นอยู่กับแต่ละบุคคล แต่หลายคนบอกว่าคือการหาความสุข",
    "ทำไรดี":"ไม่รู้สิ",
    "ขอตังค์หน่อย":"หาเองสิ",
    "ขอตังค์":"หาเอง",
    "ขอเงิน":"หาเองสิ",
    "น่าเบื่อ":"เล่นเกมสิ😊",
    "เศร้า":"โอ้ๆ😘",
    "นอนละ":"ฝันดี",
    "ท้อละ":"โอ้ๆ ไม่เป็นไร",
    "เหงาจัง":"วายๆ",
    "เหงา":"วายๆ",
    "ง่วงนอน":"ไปนอนสิ",
    "ง่วง":"ไปนอนสิ",
    "ไปนอนละ":"ฝันดี",
    "คือใคร":"ไม่รู้",
    "เจ็บใจ":"สมน้ำหน้า",
    "กินไรดี":"ก๋วยเตี๋ยวหรือส้มตำ✅️",
    "55555":"มีอะไรให้ช่วยไหม?",
    "ไง":"สวัสดี! มีอะไรให้ช่วยไหม?",
    "ๆง":"สวัสดี! มีอะไรให้ช่วยไหม?",
    "อะไรคือ":"ก็ไม่รู้เหมือนกัน",
    "งือๆ":"โอ้ๆ",
    "หมามีกี่ขา":"200ขา",
    "ขอโทษเพื่อน":"ครับ",
    "ขอโทษ":"ครับ",
    "เพื่อน":"มีไรเพื่อน",
    "ขอบคุณนะ":"ครับ",
    "ขอบคุณนะเพื่อน":"ครับ",
    "1+1 เท่ากับอะไร": "1 + 1 เท่ากับ 2",
    "1+1=": "1 + 1 เท่ากับ 2",
    "2+2 เท่ากับอะไร": "2 + 2 เท่ากับ 4",
    "2+2=": "2 + 2 เท่ากับ 4",
    "3+3 เท่ากับอะไร": "3 + 3 เท่ากับ 6",
    "3+3=": "3 + 3 เท่ากับ 6",
    "4+4 เท่ากับอะไร": "4 + 4 เท่ากับ 8",
    "4+4=": "4 + 4 เท่ากับ 8",
    "5+5 เท่ากับอะไร": "5 + 5 เท่ากับ 10",
    "5+5=": "5 + 5 เท่ากับ 10",
    "6+6 เท่ากับอะไร": "6 + 6 เท่ากับ 12",
    "6+6=": "6 + 6 เท่ากับ 12",
    "หี":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "หำ":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "หีดำ":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "หำดำ":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "ไก่":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "ควาย":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "สัส":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "ควย":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "เหี้ย":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "ไอ้ส้นตีน":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "เย็ด":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "เป็นควยไร":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "เป็นเหี้ยอะไร":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "ไอ้ส้นตี":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "ฉันเงี่ยน":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "เงี่ยน":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "อะไรคือเงี่ยน":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "ควยใหญ่":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
    "หีใหญ่":"กรุณาใช้ภาษาที่สุภาพในการสนทนา ขอบคุณ",
  }
};

// Elements
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const langThButton = document.getElementById("lang-th");

// Add message to chat
function addMessage(sender, text, avatar) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);

  const avatarImg = document.createElement("img");
  avatarImg.src = avatar;

  const textDiv = document.createElement("div");
  textDiv.textContent = text;

  messageDiv.appendChild(avatarImg);
  messageDiv.appendChild(textDiv);
  chatBody.appendChild(messageDiv);

  chatBody.scrollTop = chatBody.scrollHeight;
}

// Add thinking animation
function addThinkingAnimation() {
  const thinkingDiv = document.createElement("div");
  thinkingDiv.classList.add("thinking");
  thinkingDiv.innerHTML = `
    <img src="${botAvatar}" alt="Bot">
    <div class="dots">
      <span>?</span>
      <span>?</span>
      <span>?</span>
    </div>
  `;
  chatBody.appendChild(thinkingDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
  return thinkingDiv;
}

// Remove thinking animation
function removeThinkingAnimation(thinkingDiv) {
  if (thinkingDiv) {
    thinkingDiv.remove();
  }
}

// Send message
function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage("user", userMessage, userAvatar);
    userInput.value = "";

    // Show thinking animation
    const thinkingDiv = addThinkingAnimation();

    setTimeout(() => {
      // Remove thinking animation and add bot reply
      const botReply = getBotReply(userMessage);
      removeThinkingAnimation(thinkingDiv);
      addMessage("bot", botReply, botAvatar);
    }, 1500); // Simulate delay for bot response
  }
}

// Switch language
function switchLanguage(lang) {
  language = lang;
  if (lang === "th") {
    langThButton.classList.add("active");
    userInput.placeholder = "พิมพ์ข้อความ...";
  }
}

// Event listeners
sendButton.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
langThButton.addEventListener("click", () => switchLanguage
