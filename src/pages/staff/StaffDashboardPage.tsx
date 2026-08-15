import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 1. นำเข้า useNavigate

const Icons = {
  Calendar: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  AlertTriangle: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C53030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
  ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
};

export default function StaffDashboardPage() {
  const navigate = useNavigate(); // 👈 2. เรียกใช้งาน

  // ข้อมูลเมนูยอดฮิต (mockup)
  const topSelling = [
    { name: "ข้าวหมกหมาว้อ", orders: 124, color: "#894833", width: "95%" },
    { name: "แมวทอดกระเทียม", orders: 98, color: "#A66B57", width: "75%" },
    { name: "ต้มอึ่ง", orders: 85, color: "#C79A8B", width: "60%" },
    { name: "ล่าจิ้น ใส่ดีงัว", orders: 62, color: "#DDBFB5", width: "45%" },
  ];

  return (
    <div className="w-full h-[calc(100vh-60px)] p-8 overflow-y-auto bg-[#FDFBF7]">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#302221] mb-1">Overview</h1>
          <p className="text-sm text-[#7B726B]">Real-time metrics for today, Aug 15.</p>
        </div>
        <button className="flex items-center gap-2 border border-[#d6d0c4] bg-white px-3 py-1.5 rounded-md text-xs font-bold text-[#302221] shadow-sm hover:bg-gray-50">
          <Icons.Calendar /> This Week
        </button>
      </div>

      {/* Top Selling Dishes Card */}
      <div className="bg-white border border-[#EAE5DF] rounded-xl p-8 mb-8 shadow-sm">
        <div className="flex justify-between items-center mb-6 border-b border-[#EAE5DF] pb-4">
          <h2 className="font-bold text-[#302221] text-lg">Top Selling Dishes</h2>
          <button className="text-[11px] font-mono font-bold text-[#302221] uppercase tracking-wider hover:underline">
            View All Menu
          </button>
        </div>

        <div className="space-y-5">
          {topSelling.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-semibold text-[#302221]">
                <span>{item.name}</span>
                <span className="font-mono">{item.orders} orders</span>
              </div>
              <div className="h-2 w-full bg-[#F4EFEA] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ width: item.width, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid (2 Columns) */}
      <div className="grid grid-cols-2 gap-8">
        
        {/* 👈 3. เปลี่ยนจากกล่องว่างๆ เป็นปุ่มลัดไปหน้าโต๊ะอาหาร */}
        <div 
          onClick={() => navigate('/staff/tables')}
          className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-[#EAE5DF] h-[280px] p-6 flex flex-col cursor-pointer hover:shadow-md hover:border-[#5A403E] transition-all group"
        >
          <div className="flex-1">
            <h3 className="font-bold text-[#302221] text-lg mb-1">จัดการออเดอร์โต๊ะอาหาร</h3>
            <p className="text-sm text-[#7B726B] mb-6">Dining Table Management</p>
            
            <div className="flex gap-4">
              <div className="flex-1 bg-[#FEF2F2] p-4 rounded-xl text-center">
                <span className="block text-4xl font-black text-[#E53E3E]">2</span>
                <span className="text-[11px] font-bold text-[#E53E3E] uppercase mt-2 block">New Orders</span>
              </div>
              <div className="flex-1 bg-[#D1FAE5] p-4 rounded-xl text-center">
                <span className="block text-4xl font-black text-[#059669]">4</span>
                <span className="text-[11px] font-bold text-[#059669] uppercase mt-2 block">Eating</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-4 py-2.5 bg-[#F4EFEA] group-hover:bg-[#5A403E] group-hover:text-white text-[#5A403E] font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
            ดูสถานะโต๊ะทั้งหมด <Icons.ArrowRight />
          </button>
        </div>

        {/* Right: Stock Alert Card */}
        <div>
          <div className="bg-[#FCE8E8] border border-[#F8CACA] rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-[#FED7D7] p-2 rounded-md">
                <Icons.AlertTriangle />
              </div>
              <div>
                <h3 className="font-bold text-[#C53030] text-lg mb-1">Stock Alert: Critical</h3>
                <p className="text-sm text-[#C53030] leading-relaxed">
                  5 items expiring in less than 48h. Estimated value at risk: $145.00.
                </p>
              </div>
            </div>
            
            <button className="mt-4 px-6 py-2.5 bg-[#C53030] hover:bg-[#9B2C2C] text-white text-sm font-bold rounded-lg shadow-sm transition-colors">
              ตรวจสอบรายการที่หมดอายุ
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}