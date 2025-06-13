import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ChatSidebar from "../ChatSideBar/ChatSideBar";

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />

      <Header />
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
      <ChatSidebar /> 
    </div>
  );
};

export default Layout;
