let model;

// ฟังก์ชันสร้างโมเดล
async function createModel() {
    model = tf.sequential();
    model.add(tf.layers.dense({ units: 100, inputShape: [10], activation: 'relu' }));
    model.add(tf.layers.dense({ units: 50, activation: 'relu' }));
    model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

    model.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    console.log("✅ โมเดลถูกสร้างแล้ว!");
}

// โหลดโมเดลถ้ามีการบันทึกไว้
async function loadModel() {
    try {
        model = await tf.loadLayersModel('indexeddb://chatbot-model');
        console.log("🔄 โหลดโมเดลสำเร็จ!");
    } catch (error) {
        console.log("⚠️ ไม่มีโมเดลที่บันทึกไว้, กำลังสร้างใหม่...");
        await createModel();
    }
}

// บันทึกโมเดล
async function saveModel() {
    await model.save('indexeddb://chatbot-model');
    console.log("💾 โมเดลถูกบันทึก!");
}

// เรียกใช้ตอนโหลดเว็บ
loadModel();