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

    const listData = dataJson.filter((item)=>{
      return (item.roomId == roomId)
    });

    if (listData.length == 0) {
      alert(`ไม่มีห้อง ${roomId} ในระบบ`);
      return
    }


      const dataFilter = dataJson.filter((listData) => {
      /* แปลงข้อมูล Json ให้เป็นรูปแบบวันที่ */
      const jsonStartTime = new Date(listData.startTime)
      const jsonEndTime = new Date(listData.endTime);

      /* แปลงข้อมูลจาก Input ให้เป็นรูปแบบวันที่ */  
      const reqStartTime = new Date(starttime);
      const reqEndTime = new Date(endtime);
                          // วันที่14 เวลา19.00 >= วันที่15 เวลา11.00 ( false) ||   วันที่15 เวลา22.00  <=    วันที่14 เวลา12.00 (false)
      const isRoomAvailable =  !(reqStartTime >= jsonEndTime || reqEndTime <= jsonStartTime)

       // ตรวจสอบห้องที่ตรงกับ roomId แสดงรายการที่อยู่ใน range เป็น true  ออกมา
      return (listData.roomId == roomId && isRoomAvailable);
    });

    
    if (dataFilter.length > 0) {
      console.log("dataFilter",dataFilter);
      alert(`ห้อง ${roomId} ไม่ว่างในวันที่ดังกล่าว !!`);
    } else {
      alert(`ห้อง ${roomId} ว่าง และพร้อมสำหรับการจอง`);
    }
}



  
  
