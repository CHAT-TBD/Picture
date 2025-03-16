let trainingData = JSON.parse(localStorage.getItem("trainingData")) || []; // โหลดข้อมูลเก่ามาใช้

async function trainBot() {
    const trainStatus = document.getElementById("train-status");
    trainStatus.innerText = "⏳ กำลังเทรน AI...";

    console.log("📚 กำลังฝึกโมเดล...");
    const startTime = performance.now();

    if (trainingData.length < 1) {
        trainStatus.innerText = "⚠️ ไม่มีข้อมูลให้เทรน!";
        return;
    }

    // แปลงข้อความเป็นตัวเลข (simplified encoding)
    let xs = trainingData.map(data => textToNumbers(data.input, 10));
    let ys = trainingData.map(data => textToNumbers(data.output, 10));

    xs = tf.tensor2d(xs);
    ys = tf.tensor2d(ys);

    await model.fit(xs, ys, { epochs: 10 });

    const endTime = performance.now();
    const trainTime = ((endTime - startTime) / 1000).toFixed(2);

    console.log(`✅ เทรนสำเร็จ! ใช้เวลา ${trainTime} วินาที`);
    trainStatus.innerText = `✅ เทรนสำเร็จ! ใช้เวลา ${trainTime} วินาที`;

    await saveModel();
}

// ฟังก์ชันแปลงข้อความเป็นตัวเลข
function textToNumbers(text, length) {
    let numbers = text.split('').map(char => char.charCodeAt(0) % 100);
    while (numbers.length < length) numbers.push(0); // เติม 0 ให้ครบความยาว
    return numbers.slice(0, length);
}