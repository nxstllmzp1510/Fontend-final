import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// นำเข้า 2 ไฟล์ใหม่ที่เราเพิ่งสร้าง
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';

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
          
          {/* อนาคตถ้าสร้างหน้า Menu ก็มาใส่เพิ่มตรงนี้ได้เลย 
              <Route path="menu" element={<MenuPage />} /> 
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;