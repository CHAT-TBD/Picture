async function trainBot() {
    const trainStatus = document.getElementById("train-status");
    trainStatus.innerText = "⏳ กำลังเทรน AI...";

    console.log("📚 กำลังฝึกโมเดล...");
    const startTime = performance.now(); // เริ่มจับเวลา

    // ตัวอย่างข้อมูล (ในอนาคตสามารถเพิ่มข้อมูลจากผู้ใช้)
    const xs = tf.tensor2d([[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]]);
    const ys = tf.tensor2d([[0, 0, 0, 0, 0, 1, 0, 0, 0, 0]]);

    await model.fit(xs, ys, { epochs: 10 });

    const endTime = performance.now(); // จับเวลาสิ้นสุด
    const trainTime = ((endTime - startTime) / 1000).toFixed(2); // แปลงเป็นวินาที

    console.log(`✅ โมเดลถูกฝึกแล้ว! ใช้เวลา ${trainTime} วินาที`);
    trainStatus.innerText = `✅ เทรนสำเร็จ! ใช้เวลา ${trainTime} วินาที`;

    await saveModel();
}