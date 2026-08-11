import { BrowserRouter, Routes, Route } from 'react-router-dom';

// แก้ 3 บรรทัดนี้ให้ชี้ไปที่โฟลเดอร์ auth ที่เพิ่งสร้างใหม่
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        {/* ... */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;