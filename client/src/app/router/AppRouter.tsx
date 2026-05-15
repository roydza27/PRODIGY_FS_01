import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Layouts
import PublicLayout from "@/shared/layouts/PublicLayout";
import AuthLayout from "@/shared/layouts/AuthLayout";

// Import Pages
import HomePage from "@/features/home/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
// import DashboardPage from "@/features/dashboard/pages/DashboardPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
  {/* 
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;