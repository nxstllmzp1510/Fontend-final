import { Outlet, useNavigate, useLocation } from "react-router-dom";

const Icons = {
  Dashboard: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
  Bill: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  Settings: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Logout: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
};

export default function CashierLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Table Management", path: "/cashier", icon: Icons.Dashboard },
    { name: "Billing History", path: "/cashier/history", icon: Icons.Bill },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans text-[#333]">
      
      {/* Sidebar - แยกสี Role ให้ชัดเจน */}
      <aside className="w-[260px] bg-[#EFEBE4] flex flex-col fixed h-full z-10 border-r border-[#e0dcd5]">
        <div className="p-8 pb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#d6d0c4] shrink-0"></div>
          <div>
            <h1 className="text-lg font-black tracking-widest text-[#2c2221] leading-tight">
              SHABU STOCK
            </h1>
            <p className="text-[11px] text-[#7B726B] mt-0.5 font-bold uppercase tracking-wider">Cashier Mode</p>
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
                      ${isActive ? "bg-[#302221] text-white shadow-sm" : "text-[#7B726B] hover:bg-[#e0dcd5] hover:text-[#302221]"}
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

        <div className="p-4 border-t border-[#d6d0c4] space-y-1 px-3">
          <button className="w-full flex items-center gap-3.5 px-4 py-2.5 text-[13px] font-semibold text-[#7B726B] hover:bg-[#e0dcd5] hover:text-[#302221] rounded-lg transition-colors">
            <Icons.Settings /> Settings
          </button>
          <button 
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3.5 px-4 py-2.5 text-[13px] font-semibold text-[#7B726B] hover:bg-[#e0dcd5] hover:text-[#302221] rounded-lg transition-colors"
          >
            <Icons.Logout /> Logout
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <header className="h-[60px] bg-[#FDFBF7] border-b border-[#e8e3dd] flex items-center justify-between px-8 sticky top-0 z-10">
           <h2 className="text-lg font-bold text-[#302221]">Front Desk / Cashier</h2>
           <div className="text-sm font-semibold text-[#666]">
             {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
           </div>
        </header>

        {/* Render Cashier Pages */}
        <div className="flex-1 flex overflow-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}