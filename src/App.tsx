import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ถ้าเปิดหน้าแรก (/) ให้แสดงหน้า Login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* ถ้าเปิด /signup ให้แสดงหน้า Signup */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;