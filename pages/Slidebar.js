import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink,Link } from "react-router-dom";
import "../css/slidebar.css";
import {
    FaCloudSun,
    FaNewspaper,
    FaLeaf,
    FaVideo,
    FaUsers,
    FaUserTie,
    FaChartLine,
    FaSeedling,
    FaTachometerAlt,
    FaUser,
    
} from "react-icons/fa";

import '../css/landingpage.css';
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    
    const menuItem = [
        {
            path: "/profile-view",  // New path for Profile section
            name: "My Profile",  // Name for Profile section
            icon: <FaUser />  // Profile icon
        },
        {
            path: "/weather",
            name: "Weather Forecasting",
            icon: <FaCloudSun />
        },
        {
            path: "/dashboard", // New path
            name: "My Farm Dashboard", // New name
            icon: <FaTachometerAlt /> // Dashboard icon
        },
        {
            path: "/news",
            name: "News & Schemes",
            icon: <FaNewspaper />
        },
        {
            path: "/greenscan",
            name: "GreenScan Diagnostics",
            icon: <FaLeaf />
        },
        {
            path: "/agriloop",
            name: "AgriLoop (Reel)",
            icon: <FaVideo />
        },
        {
            path: "/community",
            name: "Community Sharing",
            icon: <FaUsers />
        },
        {
            path: "/expert",
            name: "Expert Connections",
            icon: <FaUserTie />
        },
        {
            path: "/market",
            name: "Market Analysis",
            icon: <FaChartLine />
        },
        {
            path: "/guidance",
            name: "Dairy & Poultry Guidance",
            icon: <FaSeedling />
        }
    ];
    
    

    return (
        <div className="sidebar">
            <div className="slicontainer">
                <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebarr">
                    <div className="top_section">
                    <h1
    style={{ display: isOpen ? "block" : "none" }}
    className="logo"
>
    <Link to="/">
    <img src={require('../assests/logo.png')} alt="Farm Connect Logo" style={{ width: "150px", height: "auto" }} /></Link>
</h1>


                        <div
                            style={{ marginLeft: isOpen ? "50px" : "0px" }}
                            className="bars"
                        >
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    {menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="link"
                            activeclassname="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div
                                style={{
                                    display: isOpen ? "block" : "none"
                                }}
                                className="link_text"
                            >
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                </div>
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;
