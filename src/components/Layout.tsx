import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header
        name="Zhansaya"
        role="Aspiring Web Developer"
      />

      <Outlet />

      <Footer text="© 2026 Zhansaya" />
    </>
  );
}

export default Layout;