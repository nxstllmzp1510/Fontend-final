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
import CashierReceiptPage from './pages/cashier/CashierReceiptPage'; 

// --- กลุ่มหน้า Customer ---
import CustomerMenuPage from './pages/customer/CustomerMenuPage'; 
import CustomerCartPage from './pages/customer/CustomerCartPage';
import CustomerSuccessPage from './pages/customer/CustomerSuccessPage'; 

// --- กลุ่มหน้า Staff ---
import StaffLayout from './layouts/StaffLayout';
import StaffDashboardPage from './pages/staff/StaffDashboardPage';
import StaffTableOrderPage from './pages/staff/StaffTableOrderPage';
import StaffFreezerStockPage from './pages/staff/StaffFreezerStockPage';
import StaffServingQueuePage from './pages/staff/StaffServingQueuePage';
import StaffPrepFridgePage from './pages/staff/StaffPrepFridgePage';
// 1. นำเข้าไฟล์เบิกของ
import StaffTransferStockPage from './pages/staff/StaffTransferStockPage';

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
          <Route path="expired-inventory" element={<ExpiredGoodsPage />} />
        </Route>

        <Route path="/cashier" element={<CashierLayout />}>
          <Route index element={<CashierDashboardPage />} />
          <Route path="orders" element={<CashierOrderListPage />} />
          <Route path="payment" element={<CashierPaymentPage />} />
          <Route path="receipt" element={<CashierReceiptPage />} />
        </Route>

        <Route path="/order" element={<CustomerMenuPage />} />
        <Route path="/order/cart" element={<CustomerCartPage />} />
        <Route path="/order/success" element={<CustomerSuccessPage />} />

        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<StaffDashboardPage />} />
          <Route path="queue" element={<StaffServingQueuePage />} />
          <Route path="tables" element={<StaffTableOrderPage />} />
          <Route path="freezer" element={<StaffFreezerStockPage />} />
          <Route path="prep" element={<StaffPrepFridgePage />} />
          
          {/* 2. ผูก Route เข้ากับ /staff/transfer */}
          <Route path="transfer" element={<StaffTransferStockPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;