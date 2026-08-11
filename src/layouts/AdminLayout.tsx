import { Outlet, useNavigate, useLocation } from "react-router-dom";

// --- ไอคอนต่างๆ สำหรับ Sidebar และ Topbar ---
const Icons = {
  Dashboard: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
  Menu: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>, // ใช้ไอคอนจำลอง
  User: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  History: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg>,
  Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Support: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
  Search: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
};

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation(); // ไว้เช็กว่าตอนนี้อยู่หน้าไหน

  // ข้อมูลเมนู
  const navItems = [
    { name: "Dashboard", path: "/admin", icon: Icons.Dashboard },
    { name: "Menu", path: "/admin/menu", icon: Icons.Menu },
    { name: "User", path: "/admin/user", icon: Icons.User },
    { name: "History", path: "/admin/history", icon: Icons.History },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans text-[#333]">
      
      {/* Sidebar ฝั่งซ้าย */}
      <aside className="w-[240px] bg-[#F4EFEA] flex flex-col fixed h-full z-10 border-r border-[#e8e3dd]">
        <div className="p-8 pb-4">
          <h1 className="text-xl font-black tracking-widest text-[#2c2221]">
            SHABU STOCK
          </h1>
        </div>

        <nav className="flex-1 mt-6">
          <ul className="space-y-1">
            {navItems.map((item) => {
              // เช็กว่าหน้าปัจจุบันตรงกับเมนูนี้ไหม
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`
                      w-full flex items-center gap-4 px-8 py-3 text-sm font-semibold transition-colors relative
                      ${isActive ? "bg-[#EAE4DB] text-[#302221]" : "text-[#7B726B] hover:bg-[#ede8e1] hover:text-[#302221]"}
                    `}
                  >
                    <item.icon />
                    {item.name}
                    {/* ขีดน้ำตาลด้านขวาสำหรับเมนูที่ Active */}
                    {isActive && <div className="absolute right-0 top-0 h-full w-1.5 bg-[#4A322F] rounded-l-md" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* เมนูด้านล่าง */}
        <div className="p-4 border-t border-[#e5dfd8]">
          <button className="w-full flex items-center gap-4 px-4 py-2.5 text-sm font-semibold text-[#7B726B] hover:text-[#302221]">
            <Icons.Settings /> Settings
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-2.5 text-sm font-semibold text-[#7B726B] hover:text-[#302221]">
            <Icons.Support /> Support
          </button>
        </div>
      </aside>

      {/* Main Content Area ฝั่งขวา */}
      <main className="flex-1 ml-[240px] flex flex-col">
        
        {/* Topbar */}
        <header className="h-[72px] bg-[#FDFBF7] border-b border-[#eee] flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="relative w-[280px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Icons.Search />
            </div>
            <input 
              type="text" 
              placeholder="Search inventory..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#e0dcd5] rounded-full text-sm outline-none focus:border-[#694b49] transition-colors shadow-sm"
            />
          </div>
        </header>

        {/* พื้นที่สำหรับ Render หน้าต่างๆ (Dashboard จะมาโผล่ตรงนี้) */}
        <div className="p-8 flex-1">
          <Outlet />
        </div>

      </main>
    </div>
  );
}