import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <>
      {!isAuthPage && <Header />}
      <main className="min-h-screen px-4 py-8">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
