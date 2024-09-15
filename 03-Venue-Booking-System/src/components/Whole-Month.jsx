import React from 'react'

function WholeMonth() {
  return (
    <div>
      {/* Header Time */}
      <div className="w-full pl-14 py-2 bg-[#ECECEC]">
        <p className="text-[#787878] font-bold">Whole-Month (Mon, 28 Sep)</p>
      </div>

      {/* Item list room */}
      <div className="ms-8 ps-5 py-10 h-full border-l-2 space-y-5 border-[#ECECEC]">
        {/* map Data */}
        <div>
          <p className="text-sm opacity-50 relative">
            <span className="absolute -left-[25px] text-blue-500">●</span>
            14:00 - 15:00
          </p>
          <p>Lunch with Petr</p>
        </div>
        <div>
          <p className="text-sm opacity-50 relative">
            <span className="absolute -left-[25px] text-green-500">●</span>
            13:00 - 14:00
          </p>
          <p>Sales Weekly Meeting</p>
        </div>
        <div>
          <p className="text-sm opacity-50 relative">
            <span className="absolute -left-[25px] text-orange-500">●</span>
            16:00 - 18:00
          </p>
          <p>Anastasia Website Warroom</p>
        </div>
      </div>
    </div>
  )
}

export default WholeMonth;
