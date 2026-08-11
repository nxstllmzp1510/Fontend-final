import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import MenuManagementPage from './pages/admin/MenuManagementPage';
import UserManagementPage from './pages/admin/UserManagementPage'; 
import InventoryLogsPage from './pages/admin/InventoryLogsPage';
import SystemLogsPage from './pages/admin/SystemLogsPage';
// 1. นำเข้าไฟล์ใหม่
import ExpiredGoodsPage from './pages/admin/ExpiredGoodsPage';

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
          <Route path="user" element={<UserManagementPage />} /> 
          <Route path="inventory-logs" element={<InventoryLogsPage />} />
          <Route path="system-logs" element={<SystemLogsPage />} />
          
          {/* 2. เพิ่ม Route สำหรับหน้าตรวจสอบสินค้าหมดอายุ */}
          <Route path="expired-inventory" element={<ExpiredGoodsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;