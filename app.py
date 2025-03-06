from flask import Flask, request, jsonify, render_template
import openai  

app = Flask(__name__)

openai.api_key = "float16-9YQJTahVzkD1v7TAa15pdvDlernEkfjMjfOnoWlr1Cvu1hFYvp"  # ใส่ API Key ของ OpenAI

@app.route("/")
def home():
    return render_template("index.html")  # โหลด UI หน้าเว็บ

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")

    # ถ้าผู้ใช้พิมพ์ให้วาดภาพ
    if "วาด" in user_message or "ภาพ" in user_message:
        response = openai.Image.create(
            prompt=user_message.replace("วาด", "").replace("ภาพ", ""),  
            n=1,
            size="1024x1024"
        )
        return jsonify({"type": "image", "content": response["data"][0]["url"]})

    # ถ้าผู้ใช้พิมพ์ข้อความทั่วไป ให้บอทตอบกลับ
    return jsonify({"type": "text", "content": f"ฉันไม่สามารถวาดภาพนี้ได้ ลองพิมพ์ใหม่ เช่น 'วาดแมวใส่หมวก'"})

if __name__ == "__main__":
    app.run(debug=True)
