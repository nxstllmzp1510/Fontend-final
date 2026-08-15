import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Icons = {
  Dashboard: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
  Table: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14v4"></path><path d="M20 14v4"></path><path d="M2 10h20"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path></svg>,
  Settings: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Support: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
};

export default function StaffLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/staff", icon: Icons.Dashboard },
    { name: "Dining Table Number", path: "/staff/tables", icon: Icons.Table },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans text-[#333]">
      
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#EFEBE4] flex flex-col fixed h-full z-10 border-r border-[#e0dcd5]">
        <div className="p-8 pb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#d6d0c4] shrink-0"></div>
          <div>
            <h1 className="text-lg font-black tracking-widest text-[#2c2221] leading-tight">
              FOOD STOCK
            </h1>
          </div>
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
                      ${isActive ? "bg-[#F4EFEA] text-[#302221] border-l-4 border-[#5A403E]" : "text-[#7B726B] hover:bg-[#e0dcd5]"}
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
        {/* Top Navbar จำลอง */}
        <header className="h-[60px] bg-white border-b border-[#e8e3dd] flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="relative w-[300px]">
            <input 
              type="text" 
              placeholder="Search inventory..." 
              className="w-full pl-10 pr-4 py-2 bg-[#F4EFEA] border-none rounded-full text-sm outline-none focus:ring-1 focus:ring-[#694b49]"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}