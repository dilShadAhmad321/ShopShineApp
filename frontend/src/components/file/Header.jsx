import React, { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../css/Header.css"
import Img from "../Images/icons/main-logo.png";
const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    // <header className="header" ref={headerRef}>
    //   <div className="head">
    // header
    //   </div>

    //   <div id="cantainer-background">
    //     <nav class="navbar navbar-expand" id="navbar-color">
    //       <div class="collapse navbar-collapse" id="collapsibleNavbar">
    //         <ul class="navbar-nav">
    //           <li class="nav-item">
    //             <NavLink class="nav-link" to="/">
    //               Home
    //             </NavLink>
    //           </li>
    //           <li class="nav-item">
    //             <NavLink class="nav-link" to="/contact">
    //               Contact Us
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="nav-right">
    //         <div className="nav_right d-flex align-items-center gap-4">
    //           <div className="Menubar nav_btns d-flex align-items-center gap-2">
    //             {user ? (
    //               <>
    //                 <h5 className="mb-0" style={{ color: "red" }}>
    //                   {user.username}
    //                 </h5>

    //                 <button className="btn1" onClick={logout}>
    //                   Logout
    //                 </button>
    //               </>
    //             ) : (
    //               <>
    //                 <button className="btn1">
    //                   <Link className="login" to="/login">
    //                     Login
    //                   </Link>
    //                 </button>
    //                 <button className="btn1">
    //                   <Link className="register" to="/register">
    //                     Register
    //                   </Link>
    //                 </button>
    //               </>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </header>


          <div className="top-header">
          <div className="logo"><img src={Img} alt=""></img>
          <h4>ShopShine</h4></div>
          <input  type="search" placeholder="Search Product"></input>
          <div className="head-nav">
          {user ? (
                  <>
                    <h5 className="mb-0 mt-1 mr-2"  style={{ color: "cyan" }}>
                      {user.username}
                    </h5>

                    <button className="btn" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                  <div className="head-btn">
                    <button className="btn">
                      <Link className="login" to="/login">
                        Login
                      </Link>
                    </button>
                    <button className="btn">
                      <Link className="register" to="/register">
                        Register
                      </Link>
                    </button>
                    </div>
                  </>
                )}
          </div>
          
        </div>


  );
};
export default Header;

