import Navbar from "../components/Navbar/index.js";
import Footer from "@/components/Footer/index.js";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content bg-custom-color">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
