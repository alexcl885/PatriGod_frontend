import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Layout = () => {
    return (    
        <div>  
            <ScrollToTop></ScrollToTop>
            <Header/>  
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
}
 
export default Layout;