import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Icons = {
  Dashboard: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
  Snowflake: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line><path d="m20 16-4-4 4-4"></path><path d="m4 8 4 4-4 4"></path><path d="m16 4-4 4-4-4"></path><path d="m8 20 4-4 4 4"></path></svg>,
  Table: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14v4"></path><path d="M20 14v4"></path><path d="M2 10h20"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path></svg>,
  // ไอคอนถาดเสิร์ฟสำหรับเมนูใหม่
  Tray: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13h18M3 17h18M5 13l1-8h12l1 8"></path></svg>,
  Settings: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Support: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
};

export default function StaffLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/staff", icon: Icons.Dashboard },
    { name: "Serving Queue", path: "/staff/queue", icon: Icons.Tray }, // เพิ่มเมนูคิวเสิร์ฟ
    { name: "Freezer Stock", path: "/staff/freezer", icon: Icons.Snowflake },
    { name: "Dining Tables", path: "/staff/tables", icon: Icons.Table },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans text-[#333]">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#EFEBE4] flex flex-col fixed h-full z-10 border-r border-[#e0dcd5]">
        <div className="p-8 pb-6 flex items-center gap-0">
          <h1 className="text-lg font-black tracking-widest text-[#302221] leading-tight">
            SHABU STOCK
          </h1>
        </div>

        <nav className="flex-1 mt-2">
          <ul className="space-y-1.5 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`
                      w-full flex items-center gap-3.5 px-4 py-3 text-[13px] font-semibold transition-all rounded-lg
                      ${isActive ? "bg-[#F4EFEA] text-[#302221] shadow-sm border-l-4 border-[#5A403E]" : "text-[#7B726B] hover:bg-[#e0dcd5]"}
                    `}
                  >
                    <item.icon />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 space-y-3 px-3">
          <button className="w-full py-3 bg-[#5A403E] text-white font-bold rounded-lg hover:bg-[#4a322f] shadow-md transition-colors text-sm">
            Order
          </button>
          <div className="border-t border-[#d6d0c4] pt-2">
            <button className="w-full flex items-center gap-3.5 px-4 py-2.5 text-[13px] font-semibold text-[#7B726B] hover:bg-[#e0dcd5] rounded-lg">
              <Icons.Settings /> Settings
            </button>
            <button className="w-full flex items-center gap-3.5 px-4 py-2.5 text-[13px] font-semibold text-[#7B726B] hover:bg-[#e0dcd5] rounded-lg">
              <Icons.Support /> Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <div className="flex-1 flex overflow-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}