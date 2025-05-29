import { Outlet, useLocation } from "react-router-dom";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <div className="min-h-screen flex flex-col">
      {!shouldHideNavbar && <MainNavBar />}

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      {!shouldHideNavbar && <Footer />}
    </div>
  );
}
