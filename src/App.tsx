import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// นำเข้า Layout และหน้าต่างๆ ของ Admin
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import MenuManagementPage from './pages/admin/MenuManagementPage'; // นำเข้าหน้า Menu ที่เพิ่งสร้าง

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* กลุ่มหน้า Auth */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* กลุ่มหน้า Admin (ครอบด้วย AdminLayout) */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* ใช้ index เพื่อบอกว่านี่คือหน้า Default ย่อย เมื่อเข้า /admin */}
          <Route index element={<DashboardPage />} />
          
          {/* หน้าจัดการเมนู เมื่อเข้า /admin/menu */}
          <Route path="menu" element={<MenuManagementPage />} /> {/* เพิ่ม Route สำหรับหน้า Menu */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;