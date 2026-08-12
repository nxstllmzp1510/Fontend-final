import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- กลุ่มหน้า Auth ---
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// --- กลุ่มหน้า Admin ---
import AdminLayout from './layouts/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import MenuManagementPage from './pages/admin/MenuManagementPage';
import UserManagementPage from './pages/admin/UserManagementPage'; 
import InventoryLogsPage from './pages/admin/InventoryLogsPage';
import SystemLogsPage from './pages/admin/SystemLogsPage';
import ExpiredGoodsPage from './pages/admin/ExpiredGoodsPage';

// --- กลุ่มหน้า Cashier ---
import CashierLayout from './layouts/CashierLayout';
import CashierDashboardPage from './pages/cashier/CashierDashboardPage';
import CashierOrderListPage from './pages/cashier/CashierOrderListPage'; 
import CashierPaymentPage from './pages/cashier/CashierPaymentPage';
// 1. นำเข้าไฟล์หน้าพรีวิวใบเสร็จที่เพิ่งสร้าง
import CashierReceiptPage from './pages/cashier/CashierReceiptPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* เส้นทางกลุ่มหน้า Auth */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* เส้นทางกลุ่มหน้า Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="menu" element={<MenuManagementPage />} />
          <Route path="user" element={<UserManagementPage />} /> 
          <Route path="inventory-logs" element={<InventoryLogsPage />} />
          <Route path="system-logs" element={<SystemLogsPage />} />
          <Route path="expired-inventory" element={<ExpiredGoodsPage />} />
        </Route>

        {/* เส้นทางกลุ่มหน้า Cashier */}
        <Route path="/cashier" element={<CashierLayout />}>
          <Route index element={<CashierDashboardPage />} />
          <Route path="orders" element={<CashierOrderListPage />} />
          <Route path="payment" element={<CashierPaymentPage />} />
          
          {/* 2. เพิ่ม Route สำหรับหน้าพรีวิวใบเสร็จ */}
          <Route path="receipt" element={<CashierReceiptPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;