let trainingData = JSON.parse(localStorage.getItem("trainingData")) || []; // โหลดข้อมูลที่บันทึกไว้

console.log("📚 กำลังฝึกโมเดล...");
    const startTime = performance.now();

    if (trainingData.length < 1) {
        trainStatus.innerText = "⚠️ ไม่มีข้อมูลให้เทรน!";
        return;
    }

    // แปลงข้อความเป็นตัวเลข
    let xs = trainingData.map(data => textToNumbers(data.input, 10));
    let ys = trainingData.map(data => textToNumbers(data.output, 10));

    xs = tf.tensor2d(xs);
    ys = tf.tensor2d(ys);

    const epochs = 10; // จำนวนรอบการเทรน
    const estimatedTimePerEpoch = 1; // ประมาณ 1 วิ ต่อ 1 epoch (ขึ้นกับอุปกรณ์)
    let remainingTime = epochs * estimatedTimePerEpoch;

    // ตั้ง Interval เพื่อนับถอยหลัง
    const countdown = setInterval(() => {
        trainStatus.innerText = `⏳ กำลังเทรน AI... เหลือ ${remainingTime} วินาที`;
        remainingTime--;
        if (remainingTime <= 0) clearInterval(countdown);
    }, 1000);

    await model.fit(xs, ys, { epochs });

    clearInterval(countdown); // หยุดนับถอยหลัง
    const endTime = performance.now();
    const trainTime = ((endTime - startTime) / 1000).toFixed(2);

    console.log(`✅ เทรนสำเร็จ! ใช้เวลา ${trainTime} วินาที`);
    trainStatus.innerText = `✅ เทรนสำเร็จ! ใช้เวลา ${trainTime} วินาที`;


async function trainBot() {
    const trainStatus = document.getElementById("train-status");
    trainStatus.innerText = "⏳ กำลังเทรน AI... เหลือ ${remainingTime} วินาที";

    await saveModel();
}

// ฟังก์ชันแปลงข้อความเป็นตัวเลข
function textToNumbers(text, length) {
    let numbers = text.split('').map(char => char.charCodeAt(0) % 100);
    while (numbers.length < length) numbers.push(0); // เติม 0 ให้ครบความยาว
    return numbers.slice(0, length);
}