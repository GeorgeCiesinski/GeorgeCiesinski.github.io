/**
 * Shared page shell: navbar, routed main content, and footer.
 */

import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

/** Shell with navbar, routed page content, and footer. */
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
