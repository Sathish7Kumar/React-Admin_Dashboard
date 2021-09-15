import React from 'react';

function Sidebar () {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>

            <hr className="sidebar-divider" />
            <li className="nav-item">
                <a className="nav-link">
                    <i className="fas fa-users"></i>
                    <span>Users</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">
                    <i className="fab fa-product-hunt"></i>
                    <span>Products</span>
                </a>
            </li>

            <hr className="sidebar-divider d-none d-md-block"></hr>

            
        </ul>
    )
}

export default Sidebar;