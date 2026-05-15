import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
      <Outlet />
    </main>
  );
}