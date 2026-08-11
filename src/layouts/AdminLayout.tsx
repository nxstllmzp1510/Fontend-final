import { Outlet, useNavigate, useLocation } from "react-router-dom";

// --- ไอคอนชุดใหม่สำหรับ Sidebar ---
const Icons = {
  Overview: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
  Cutlery: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
  Users: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Arrows: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>,
  Logs: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  Clock: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
  Settings: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
  Logout: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
};

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // อัปเดตชื่อเมนูและเส้นทางให้ตรงกับดีไซน์ใหม่
  const navItems = [
    { name: "Overview", path: "/admin", icon: Icons.Overview },
    { name: "Menu Management", path: "/admin/menu", icon: Icons.Cutlery },
    { name: "User Management", path: "/admin/user", icon: Icons.Users },
    { name: "Inventory Logs", path: "/admin/inventory-logs", icon: Icons.Arrows },
    { name: "System Logs", path: "/admin/system-logs", icon: Icons.Logs },
    { name: "Expired Inventory", path: "/admin/expired-inventory", icon: Icons.Clock },
  ];

  return (
    <div className="flex min-h-screen bg-[#FDFBF7] font-sans text-[#333]">
      
      {/* Sidebar ฝั่งซ้าย */}
      <aside className="w-[260px] bg-[#F4EFEA] flex flex-col fixed h-full z-10 border-r border-[#e8e3dd]">
        <div className="p-8 pb-6">
          <h1 className="text-xl font-black tracking-widest text-[#2c2221] leading-tight">
            SHABU STOCK
          </h1>
          <p className="text-xs text-[#7B726B] mt-1 font-medium">Administrator</p>
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
                      ${isActive ? "bg-[#694b49] text-white shadow-sm" : "text-[#7B726B] hover:bg-[#ede8e1] hover:text-[#302221]"}
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

        {/* เมนูด้านล่าง */}
        <div className="p-4 border-t border-[#e5dfd8] space-y-1 px-3">
          <button className="w-full flex items-center gap-3.5 px-4 py-2.5 text-[13px] font-semibold text-[#7B726B] hover:bg-[#ede8e1] hover:text-[#302221] rounded-lg transition-colors">
            <Icons.Settings /> Settings
          </button>
          <button className="w-full flex items-center gap-3.5 px-4 py-2.5 text-[13px] font-semibold text-[#7B726B] hover:bg-[#ede8e1] hover:text-[#302221] rounded-lg transition-colors">
            <Icons.Logout /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area ฝั่งขวา */}
      <main className="flex-1 ml-[260px] flex flex-col min-h-screen">
        
        {/* Topbar แบบใหม่ เรียบๆ */}
        <header className="h-[60px] bg-[#FDFBF7] border-b border-[#e8e3dd] flex items-center px-8 sticky top-0 z-10">
           {/* ดึงชื่อหน้าจาก Path มาแสดง หรือปล่อยโล่งไว้แล้วให้หน้า Page จัดการเอง */}
           <h2 className="text-lg font-bold text-[#302221] capitalize">
              {location.pathname === '/admin/user' ? 'User Permissions' : ''}
           </h2>
        </header>

        {/* พื้นที่ Render หน้า */}
        <div className="p-8 flex-1">
          <Outlet />
        </div>

      </main>
    </div>
  );
}