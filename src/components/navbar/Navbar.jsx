import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tadiwos Anegagregn
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/tadios.anegagereng">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/tadi.dev/">
            <img src="/instagram.png" alt="" />
          </a>
          
          <a href="#">
            <img src="/LinkedIn.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
