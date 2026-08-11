import React from 'react';

// ไอคอนสำหรับ Card
const Icons = {
  Cash: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>,
  Cart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
  Wallet: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>,
  Trash: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>,
  Calendar: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Dots: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
};

export default function DashboardPage() {
  // ข้อมูลจำลองสำหรับกราฟแท่ง
  const chartData = [
    { month: 'Jan', rev: '65%', exp: '28%' },
    { month: 'Feb', rev: '60%', exp: '48%' },
    { month: 'Mar', rev: '80%', exp: '40%' },
    { month: 'Apr', rev: '82%', exp: '20%' },
    { month: 'May', rev: '55%', exp: '35%' },
    { month: 'Jun', rev: '55%', exp: '28%' },
    { month: 'Jul', rev: '40%', exp: '35%' },
    { month: 'Aug', rev: '75%', exp: '30%' },
  ];

  // ข้อมูลจำลองเมนูยอดฮิต
  const topOrders = [
    { name: 'ข้าวหมกหมาว้อ', orders: 124, color: '#894833', width: '100%' },
    { name: 'แมวทอดกระเทียม', orders: 98, color: '#A66A55', width: '80%' },
    { name: 'ต้มอึ่ง', orders: 85, color: '#C28B7A', width: '68%' },
    { name: 'ส่าจิ้น ใส่ดีงัว', orders: 62, color: '#D7B1A5', width: '50%' },
  ];

  return (
    <div className="max-w-[1200px] w-full">
      {/* ส่วนหัว */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#4A322F] mb-1">Overview</h1>
          <p className="text-sm text-[#777]">Real-time metrics for today, Jun 26.</p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#e0dcd5] rounded-md text-sm font-semibold text-[#555] hover:bg-gray-50 shadow-sm">
          <Icons.Calendar /> This Week
        </button>
      </div>

      {/* Cards สถิติ 4 ตัว */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl border border-[#eae6e1] shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-[#777] tracking-wide">รายได้ทั้งหมด</span>
            <span className="text-[#054231]"><Icons.Cash /></span>
          </div>
          <h2 className="text-3xl font-bold text-[#111] mb-1">$12,450.00</h2>
          <p className="text-[11px] font-bold text-[#555]">↗ +8.2% vs last week</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl border border-[#eae6e1] shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-[#777] tracking-wide">ต้นทุนวัตถุดิบ</span>
            <span className="text-[#894833]"><Icons.Cart /></span>
          </div>
          <h2 className="text-3xl font-bold text-[#111] mb-1">$3,840.50</h2>
          <p className="text-[11px] font-bold text-[#777]">→ 29% of Revenue</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl border border-[#eae6e1] shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-[#777] tracking-wide">กำไร</span>
            <span className="text-[#054231]"><Icons.Wallet /></span>
          </div>
          <h2 className="text-3xl font-bold text-[#111] mb-1">$8,609.50</h2>
          <p className="text-[11px] font-bold text-[#555]">↗ +4.1% vs last week</p>
        </div>

        {/* Card 4 (Waste Cost) */}
        <div className="bg-white p-5 rounded-xl border border-[#eae6e1] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-[#E53E3E]" /> {/* ขีดแดงริมขวา */}
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-bold text-[#777] tracking-wide uppercase">Waste Cost</span>
            <span className="text-[#E53E3E]"><Icons.Trash /></span>
          </div>
          <h2 className="text-3xl font-bold text-[#111] mb-1">$412.00</h2>
          <p className="text-[11px] font-bold text-[#E53E3E]">↗ +12% vs target</p>
        </div>
      </div>

      {/* กราฟจำลอง (CSS Flexbox) */}
      <div className="bg-white p-6 rounded-xl border border-[#eae6e1] shadow-sm mb-6">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-[#222] text-lg">รายรับ - รายจ่าย</h3>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-xs font-bold text-[#666]">
              <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#054231]" /> Revenue</span>
              <span className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#EAECEB]" /> Expenses</span>
            </div>
            <button className="text-[#999] hover:text-[#333]"><Icons.Dots /></button>
          </div>
        </div>

        <div className="h-[240px] flex items-end justify-between relative pl-10 border-b border-[#eee]">
          {/* เส้น Grid แนวนอน */}
          <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-between text-[10px] text-[#999] font-medium z-0">
            {[90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map(num => (
              <div key={num} className="flex items-center w-full relative">
                <span className="w-8 text-right pr-2">{num}k</span>
                <div className="flex-1 border-t border-[#f2f2f2]"></div>
              </div>
            ))}
          </div>

          {/* แท่งกราฟ */}
          {chartData.map((data, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center flex-1 h-[210px] justify-end">
              <div className="flex gap-1.5 items-end h-full w-full justify-center">
                <div className="w-4 bg-[#054231] rounded-t-sm" style={{ height: data.rev }}></div>
                <div className="w-4 bg-[#EAECEB] rounded-t-sm" style={{ height: data.exp }}></div>
              </div>
              <span className="text-[11px] font-bold text-[#888] mt-3">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* เมนูยอดฮิต Progress Bar */}
      <div className="bg-white p-6 rounded-xl border border-[#eae6e1] shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-[#222]">Total Menu Orders</h3>
          <a href="#" className="text-xs font-bold text-[#555] hover:underline uppercase tracking-wide">View All Menu</a>
        </div>
        
        <div className="space-y-4">
          {topOrders.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm font-bold text-[#333] mb-1.5">
                <span>{item.name}</span>
                <span>{item.orders} orders</span>
              </div>
              <div className="h-2.5 w-full bg-[#f2f0ec] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ width: item.width, backgroundColor: item.color }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}