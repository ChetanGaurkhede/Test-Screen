import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-[5vw] h-[100vh] bg-white p-2 flex flex-col justify-between items-center">
      <div>
        <img
          src="src/assets/Images/phantasm_logo_icon_-01_480 1.png"
          alt="phantasm_logo_icon_"
        />
      </div>
      <div className="h-[80vh] flex flex-col justify-around">
        <div className="h-[60%] flex flex-col justify-around">
          <Link
            to="/category"
            className={`p-2 rounded-xl ${
              isActive("/category") ? "bg-blue-500" : ""
            }`}
          >
            <img src="src/assets/Images/Category.png" alt="Category" />
          </Link>
          <Link
            to="/bag"
            className={`p-2 rounded-xl ${
              isActive("/bag") ? "bg-blue-500" : ""
            }`}
          >
            <img src="src/assets/Images/Bag.png" alt="Bag" />
          </Link>
          <Link
            to="/user"
            className={`p-2 rounded-xl ${
              isActive("/user") ? "bg-blue-500" : ""
            }`}
          >
            <img src="src/assets/Images/2 User.png" alt="2 User" />
          </Link>
          <Link
            to="/inventory"
            className={`p-2 rounded-xl ${
              isActive("/inventory") ? "bg-blue-500" : ""
            }`}
          >
            <img src="src/assets/Images/Folder.png" alt="Folder" />
          </Link>
          <Link
            to="/chat"
            className={`p-2 rounded-xl ${
              isActive("/chat") ? "bg-blue-500" : ""
            }`}
          >
            <img src="src/assets/Images/Chat.png" alt="Chat" />
          </Link>
          <Link
            to="/setting"
            className={`p-2 rounded-xl ${
              isActive("/setting") ? "bg-blue-500" : ""
            }`}
          >
            <img src="src/assets/Images/Setting.png" alt="Setting" />
          </Link>
        </div>
        <div className="h-[17%] flex flex-col justify-around">
          <Link
            to="/frame"
            className={`p-2 rounded-xl ${
              isActive("/frame") ? "bg-blue-500" : ""
            }`}
          >
            <img src="src/assets/Images/Frame 8.png" alt="Frame 8" />
          </Link>
          <Link
            to="/container"
            className={`p-2 rounded-xl ${
              isActive("/container") ? "bg-blue-500" : ""
            }`}
          >
            <img src="src/assets/Images/container.png" alt="container" />
          </Link>
        </div>
      </div>
      <div>
        <Link
          to="/frame1"
          className={`p-2 rounded-xl ${
            isActive("/frame1") ? "bg-blue-500" : ""
          }`}
        >
          <img src="src/assets/Images/Frame 9.png" alt="Frame 9" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
