import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Icons = {
  Dashboard: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
  Flame: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>,
  Tray: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13h18M3 17h18M5 13l1-8h12l1 8"></path></svg>,
  Snowflake: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line><path d="m20 16-4-4 4-4"></path><path d="m4 8 4 4-4 4"></path><path d="m16 4-4 4-4-4"></path><path d="m8 20 4-4 4 4"></path></svg>,
  Fridge: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="5" y1="10" x2="19" y2="10"></line><line x1="9" y1="14" x2="9" y2="14.01"></line></svg>,
  Table: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14v4"></path><path d="M20 14v4"></path><path d="M2 10h20"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path></svg>,
  Transfer: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>,
  ClipboardPlus: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>,
  Settings: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Support: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
};

export default function StaffLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/staff", icon: Icons.Dashboard },
    { name: "Kitchen Queue", path: "/staff/kitchen", icon: Icons.Flame }, // 👈 เมนูสำหรับพ่อครัว
    { name: "Batch Entry", path: "/staff/batch", icon: Icons.ClipboardPlus },
    { name: "Transfer Stocks", path: "/staff/transfer", icon: Icons.Transfer },
    { name: "Serving Queue", path: "/staff/queue", icon: Icons.Tray }, 
    { name: "Prep Fridge", path: "/staff/prep", icon: Icons.Fridge }, 
    { name: "Freezer Stock", path: "/staff/freezer", icon: Icons.Snowflake },
    { name: "Dining Tables", path: "/staff/tables", icon: Icons.Table },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans text-[#333]">
      <aside className="w-[260px] bg-[#EFEBE4] flex flex-col fixed h-full z-10 border-r border-[#e0dcd5]">
        <div className="p-8 pb-6 flex items-center gap-0">
          <h1 className="text-lg font-black tracking-widest text-[#302221] leading-tight">
            SHABU STOCK
          </h1>
        </div>

        <nav className="flex-1 mt-2 overflow-y-auto scrollbar-hide">
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

        <div className="p-4 space-y-3 px-3 shrink-0">
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

      <main className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <div className="flex-1 flex overflow-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}