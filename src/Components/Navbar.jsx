import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full h-[10vh] xl:w-[5vw] xl:h-[100vh] bg-red-white p-2 flex xl:flex-col justify-between items-center fixed bottom-0 xl:static shadow-2xl ">
      <div>
        <img
          src="src/assets/Images/phantasm_logo_icon_-01_480 1.png"
          alt="phantasm_logo_icon_"
          className="w-8 h-8 xl:w-auto xl:h-auto"
        />
      </div>
      <div className="flex xl:flex-col justify-around items-center xl:h-[80vh]">
        <div className="flex xl:flex-col justify-around items-center xl:h-[60%]">
          <Link to="/category" className={`p-2 rounded-xl ${isActive("/category") ? "bg-blue-500" : ""}`}>
            <img src="src/assets/Images/Category.png" alt="Category" className="w-6 h-6 xl:w-auto xl:h-auto" />
          </Link>
          <Link to="/bag" className={`p-2 rounded-xl ${isActive("/bag") ? "bg-blue-500" : ""}`}>
            <img src="src/assets/Images/Bag.png" alt="Bag" className="w-6 h-6 xl:w-auto xl:h-auto" />
          </Link>
          <Link to="/user" className={`p-2 rounded-xl ${isActive("/user") ? "bg-blue-500" : ""}`}>
            <img src="src/assets/Images/2 User.png" alt="2 User" className="w-6 h-6 xl:w-auto xl:h-auto" />
          </Link>
          <Link to="/inventory" className={`p-2 rounded-xl ${isActive("/inventory") ? "bg-blue-500" : ""}`}>
            <img src="src/assets/Images/Folder.png" alt="Folder" className="w-6 h-6 xl:w-auto xl:h-auto" />
          </Link>
          <Link to="/chat" className={`p-2 rounded-xl ${isActive("/chat") ? "bg-blue-500" : ""}`}>
            <img src="src/assets/Images/Chat.png" alt="Chat" className="w-6 h-6 xl:w-auto xl:h-auto" />
          </Link>
          <Link to="/setting" className={`p-2 rounded-xl ${isActive("/setting") ? "bg-blue-500" : ""}`}>
            <img src="src/assets/Images/Setting.png" alt="Setting" className="w-6 h-6 xl:w-auto xl:h-auto" />
          </Link>
        </div>
        <div className="flex xl:flex-col justify-around items-center xl:h-[17%]">
          <Link to="/frame" className={`p-2 rounded-xl ${isActive("/frame") ? "bg-blue-500" : ""}`}>
            <img src="src/assets/Images/Frame 8.png" alt="Frame 8" className="w-6 h-6 xl:w-auto xl:h-auto" />
          </Link>
          <Link to="/container" className={`p-2 rounded-xl ${isActive("/container") ? "bg-blue-500" : ""}`}>
            <img src="src/assets/Images/container.png" alt="container" className="w-6 h-6 xl:w-auto xl:h-auto" />
          </Link>
        </div>
      </div>
      <div>
        <Link to="/frame1" className={`p-2 rounded-xl ${isActive("/frame1") ? "bg-blue-500" : ""}`}>
          <img src="src/assets/Images/Frame 9.png" alt="Frame 9" className="w-6 h-6 xl:w-auto xl:h-auto" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
