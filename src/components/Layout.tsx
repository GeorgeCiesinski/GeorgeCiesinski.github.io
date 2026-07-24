import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="page">
      <Navbar />
      <main className="page__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
