import dataJson from "./data.json" with { type: "json" };


// Function to handle form submission
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const reqRoomId = document.getElementById('roomId').value;
    const reqStartTime = document.getElementById('startTime').value;
    const reqEndTime = document.getElementById('endTime').value;


    checkAvailability(reqRoomId, reqStartTime, reqEndTime)

    // Clear the form after submission
    document.getElementById('myForm').reset();
});


/* ฟังก์ชั่นตรวจสอบห้องว่าง */
function checkAvailability(roomId, starttime, endtime) {
    /* console.log(roomId, starttime, endtime); */

    const dataFilter = dataJson.filter((item) => {

      /* แปลงข้อมูล Json ให้เป็นรูปแบบวันที่ */
      const jsonStartTime = convertDateTime(item.startTime);
      const jsonEndTime = convertDateTime(item.endTime);
      /* แปลงข้อมูลจาก Input ให้เป็นรูปแบบวันที่ */  
      const reqStartTime = new Date(starttime);
      const reqEndTime = new Date(endtime);

      return (item.roomId == roomId && !(reqStartTime >= jsonEndTime || reqEndTime <= jsonStartTime));
    });

    if (dataFilter.length > 0) {
      alert(`ห้อง ${roomId} ไม่ว่างในวันที่ดังกล่าว !!`);
    } else {
      alert(`ห้อง ${roomId} ว่าง และพร้อมสำหรับการจอง`);
    }
}

/* ฟังก์ชั่นแปลง string เป็นรูปแบบวันที่ */
function convertDateTime(input) {
    // แปลงสตริงวันเวลาให้เป็นวัตถุ Date
    const [datePart, timePart] = input.split(" ");
    /* console.log(datePart); */

    const [year, month, day] = datePart.split("-").map(Number);
    const [hours, minutes, seconds] = timePart.split(":").map(Number);

    const date = new Date(year, month - 1, day, hours, minutes, seconds);

    // สร้างวันที่ใหม่ในรูปแบบ ISO 8601
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

    return new Date(formattedDate);
}

  
  
