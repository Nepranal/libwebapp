import Footer from "./Footer";
import Navbar from "./navbar";
const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            <div className="Children">
            {children}
            </div>

            <Footer />
        </div>
    );
}

export default Layout;