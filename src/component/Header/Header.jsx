import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-cyan-950">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white">
            <li className="hover:bg-orange-700">
              <a>Home</a>
            </li>
            <li className="hover:bg-orange-700">
              <a>Order</a>
            </li>
            <li className="hover:bg-orange-700">
              <a>Blog</a>
            </li>
            <li className="hover:bg-orange-700">
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
