import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import MenuManagementPage from './pages/admin/MenuManagementPage';
// 1. นำเข้าไฟล์ใหม่
import UserManagementPage from './pages/admin/UserManagementPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="menu" element={<MenuManagementPage />} />
          
          {/* 2. เพิ่ม Route สำหรับหน้า User */}
          <Route path="user" element={<UserManagementPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;