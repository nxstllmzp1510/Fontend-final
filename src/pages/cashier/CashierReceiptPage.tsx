import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- Icons ---
const Icons = {
  ArrowLeft: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
  Search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  Printer: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>,
  CheckCircle: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2e8c4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
  ChevronDown: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>,
  Share: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>,
  // QR Code จำลอง
  QrCodePlaceholder: () => (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#302221" strokeWidth="1.5" strokeLinecap="square">
      <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
      <rect x="5" y="5" width="3" height="3"></rect><rect x="16" y="5" width="3" height="3"></rect><rect x="5" y="16" width="3" height="3"></rect>
      <path d="M14 14h7v7h-7z"></path><path d="M16 16h3v3h-3z"></path><path d="M14 21h7"></path><path d="M21 14v7"></path><path d="M10 3v18"></path><path d="M3 10h18"></path>
    </svg>
  )
};

export default function CashierReceiptPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-[calc(100vh-60px)] bg-[#FDFBF7] font-sans">
      
      {/* --- Header --- */}
      <div className="h-[70px] bg-white border-b border-[#EAE5DF] flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-[#F4EFEA] rounded-full transition-colors text-[#302221]">
            <Icons.ArrowLeft />
          </button>
          <h1 className="text-xl font-bold text-[#302221]">พรีวิวใบเสร็จ</h1>
        </div>
        
        <div className="relative w-[280px]">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Icons.Search />
          </div>
          <input 
            type="text" 
            placeholder="Search orders..." 
            className="w-full pl-10 pr-4 py-2 bg-[#F8F6F1] border-none rounded-md text-sm outline-none focus:ring-1 focus:ring-[#694b49] transition-all placeholder:text-[#999]"
          />
        </div>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex-1 overflow-y-auto p-8 flex justify-center gap-10 bg-[#FAF8F5]">
        
        {/* ---------------- ซ้าย: กระดาษใบเสร็จ (Thermal Receipt) ---------------- */}
        <div className="w-[380px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-sm p-8 flex flex-col font-mono text-sm text-[#333] relative">
          
          {/* ขอบหยักด้านบนและล่าง (CSS Hack จำลองขอบใบเสร็จ) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f0f0f0] to-transparent opacity-50"></div>
          
          {/* หัวบิล */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#111] tracking-wider mb-1">SHABU INVEN</h2>
            <p className="text-xs text-[#555] uppercase tracking-widest mb-2">Central Plaza Branch</p>
            <p className="text-[11px] text-[#777]">Tax ID: 0105562000000</p>
          </div>

          {/* ข้อมูลพื้นฐาน */}
          <div className="flex flex-col gap-1 mb-4 text-[13px]">
            <div className="flex justify-between"><span>วันที่ / เวลา:</span> <span>24/05/2026 19:42</span></div>
            <div className="flex justify-between"><span>หมายเลขโต๊ะ:</span> <span className="font-bold">TABLE 08</span></div>
            <div className="flex justify-between"><span>พนักงาน:</span> <span>Cashier 01</span></div>
            <div className="flex justify-between"><span>เลขที่ใบเสร็จ:</span> <span>#INV-88921-002</span></div>
          </div>

          <div className="border-t border-dashed border-[#ccc] my-2"></div>

          {/* รายการอาหาร */}
          <div className="flex flex-col gap-4 my-2">
            <div>
              <div className="flex justify-between font-bold text-[#111]">
                <span>Buffet Premium Wagyu</span>
                <span>฿2,396.00</span>
              </div>
              <p className="text-xs text-[#777]">4 x ฿599.00</p>
            </div>
            <div>
              <div className="flex justify-between font-bold text-[#111]">
                <span>Refill Drinks</span>
                <span>฿156.00</span>
              </div>
              <p className="text-xs text-[#777]">4 x ฿39.00</p>
            </div>
          </div>

          <div className="border-t border-dashed border-[#ccc] my-2"></div>

          {/* สรุปยอด */}
          <div className="flex flex-col gap-1 my-2 text-[13px]">
            <div className="flex justify-between">
              <span>Subtotal (รวมค่าอาหาร):</span>
              <span>฿2,552.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (10%):</span>
              <span>- 255.20</span>
            </div>
            <div className="flex justify-between text-[#777]">
              <span>VAT (7%):</span>
              <span>฿160.77</span>
            </div>
          </div>

          <div className="border-t-2 border-double border-[#999] my-3"></div>

          {/* ยอดสุทธิ */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold">Total (สุทธิ):</span>
            <span className="text-xl font-bold">฿2,457.57</span>
          </div>

          {/* Footer บิล (สลับขึ้นมาอยู่เหนือ QR) */}
          <div className="text-center my-4">
            <p className="text-xs text-[#555] mb-1">Thank you for visiting us!</p>
            <p className="text-[11px] text-[#999]">ขอบคุณที่ใช้บริการ</p>
          </div>

          {/* 📌 ส่วนเพิ่มใหม่: QR Code สำหรับสั่งอาหาร (ย้ายมาล่างสุด) */}
          <div className="border-t border-dashed border-[#ccc] mt-2 pt-6 pb-2 flex flex-col items-center justify-center">
            <div className="p-2 bg-white border-2 border-[#111] rounded-lg mb-3 shadow-sm">
              <Icons.QrCodePlaceholder />
            </div>
            <p className="text-[13px] font-bold text-[#111]">SCAN TO ORDER</p>
            <p className="text-[11px] text-[#777] mt-1">สแกน QR Code เพื่อสั่งอาหารที่โต๊ะ</p>
          </div>

        </div>

        {/* ---------------- ขวา: แผงควบคุมการพิมพ์ (Print Controls) ---------------- */}
        <div className="w-[340px]">
          <div className="bg-white border border-[#EAE5DF] rounded-xl p-6 shadow-sm sticky top-8">
            <div className="flex items-center gap-2 mb-6 text-[#302221]">
              <Icons.Printer />
              <h2 className="text-lg font-bold">ยืนยันการพิมพ์</h2>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold text-[#7B726B] mb-2">เครื่องพิมพ์ที่เลือก</label>
              <div className="w-full border border-[#d6d0c4] rounded-md px-4 py-2.5 flex justify-between items-center bg-[#FAF8F5] cursor-pointer hover:bg-[#F4EFEA] transition-colors">
                <span className="text-sm font-medium text-[#302221]">Kitchen Station 01 (Thermal)</span>
                <Icons.ChevronDown />
              </div>
            </div>

            <div className="bg-[#E8F5E9] border border-[#C8E6C9] rounded-md px-4 py-3 flex items-center gap-3 mb-8">
              <Icons.CheckCircle />
              <span className="text-sm font-bold text-[#2e8c4a]">พร้อมพิมพ์ (Online)</span>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full py-3 bg-[#5A403E] text-white font-bold rounded-md hover:bg-[#4a322f] shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
                <Icons.Printer /> พิมพ์ใบเสร็จ
              </button>
              <button className="w-full py-3 bg-white border border-[#B3ADA5] text-[#302221] font-bold rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm">
                <Icons.Share /> แชร์ผ่าน LINE
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}