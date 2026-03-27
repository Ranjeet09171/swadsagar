import Home from "./Home";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import Cart from "./Cart";

import "./App.css";

import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Order from "./Order";
import Register from "./Register";
import Login from "./Login";
import Addition from "./Addition";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from "react";
import Profile from "./Profile";

// Separate component that uses navigation hooks
function AppContent() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState({});
    const [logoHover, setLogoHover] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location.pathname);
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.isLoggedIn);

    const totalQuantity = useSelector(
        state => state.cart.totalQuantity
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.user-menu-container')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Update active link on navigation
    useEffect(() => {
        setActiveLink(window.location.pathname);
    }, [window.location.pathname]);

    const handleLogout = () => {
        setLoading(prev => ({ ...prev, logout: true }));
        
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users = users.map(user => ({
                ...user,
                isLoggedIn: false
            }));
            localStorage.setItem("users", JSON.stringify(users));
            
            toast.success("Logged out successfully! 🎉", {
                position: "top-right",
                autoClose: 2000,
            });
            
            setLoading(prev => ({ ...prev, logout: false }));
            setIsOpen(false);
            window.location.href = "/login";
        }, 1000);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <>
            <ToastContainer 
                position="top-right" 
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <nav className="navbar">
                {/* Animated Logo */}
                <div 
                    className="logo"
                    onMouseEnter={() => setLogoHover(true)}
                    onMouseLeave={() => setLogoHover(false)}
                    onClick={() => window.location.href = "/home"}
                >
                     {/* that line is SwadSagar Icon */}
                    <i className={`fas fa-utensils ${logoHover ? 'fa-spin' : ''}`} style={{ color: '#FFD700' }}></i>
                    <span style={{ 
                        background: logoHover ? 'linear-gradient(45deg, #FFD700, #FFA500)' : 'none',
                        WebkitBackgroundClip: logoHover ? 'text' : 'none',
                        WebkitTextFillColor: logoHover ? 'transparent' : 'white',
                        transition: 'all 0.3s ease'
                    }}>
                        Swad Sagar
                    </span>
                    {logoHover && <i className="fas fa-star" style={{ color: '#FFD700', fontSize: '14px' }}></i>}
                </div>

                <div className="nav-links">
                    {/* Home */}
                    <Link 
                        to="/home" 
                        onClick={() => handleLinkClick("/home")}
                        className={activeLink === "/home" ? "active" : ""}
                    >
                        {/* that line is Home Icon */}
                        <i className="fas fa-home" style={{ color: '#4A90E2' }}></i>  
                        Home
                    </Link>

                    {/* Veg-items */}
                    <Link 
                        to="/veg" 
                        onClick={() => handleLinkClick("/veg")}
                        className={activeLink === "/veg" ? "active" : ""}
                    >
                         {/* that line is veg Icon */}
                        <i className="fas fa-leaf" style={{ color: '#2ECC71' }}></i>
                        Veg-items
                    </Link>

                    <Link to="/profile">Profile</Link>

                    {/* Non-Veg */}
                    <Link 
                        to="/nonveg" 
                        onClick={() => handleLinkClick("/nonveg")}
                        className={activeLink === "/nonveg" ? "active" : ""}
                    >
                         {/* that line is nonveg Icon */}
                        <i className="fas fa-drumstick-bite" style={{ color: '#E74C3C' }}></i>
                        Non-Veg
                    </Link>

                    {/* Cart with animated badge */}
                    <Link 
                        to="/cart" 
                        onClick={() => handleLinkClick("/cart")}
                        className={activeLink === "/cart" ? "active" : ""}
                        style={{ position: 'relative' }}
                    >
                         {/* that line is cart Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        Cart 
                        {totalQuantity > 0 && (
                            <span>
                                {totalQuantity}
                            </span>
                        )}
                    </Link>

                    {/* Order */}
                    <Link 
                        to="/order" 
                        onClick={() => handleLinkClick("/order")}
                        className={activeLink === "/order" ? "active" : ""}
                    >
                         {/* that line is ordor Icon */}
                        <i className="fas fa-clipboard-list" style={{ color: '#9B59B6' }}></i>
                        Order
                    </Link>
                    
                    {/* User section with enhanced dropdown */}
                    {user ? (
                        <div className="user-menu-container">
                            <button
                                className="user-btn"
                                onClick={() => setIsOpen(!isOpen)}
                                disabled={loading.logout}
                            >
                                <i className={`fas fa-user-circle ${isOpen ? 'fa-spin' : ''}`}></i>
                                {user.name} 
                                <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ fontSize: '12px' }}></i>
                            </button>

                            {isOpen && (
                                <div className="dropdown-menu">
                                    <button
  className="dropdown-item"
  onClick={() => navigate("/profile")}
>
  <i className="fas fa-user"></i>
  View Profile
</button>

                                    <button
                                        className="dropdown-item"
                                        onClick={() => {
                                            toast.info("Settings feature coming soon! ⚙️");
                                            setIsOpen(false);
                                        }}
                                    >
                                        <i className="fas fa-cog"></i>
                                        Settings
                                    </button>

                                    <button
                                        className="dropdown-item logout"
                                        onClick={handleLogout}
                                        disabled={loading.logout}
                                    >
                                        {loading.logout ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin"></i>
                                                Logging out...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-sign-out-alt"></i>
                                                Logout
                                            </>
                                        )}
                                    </button>
                                    
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link 
                                to="/register" 
                                onClick={() => handleLinkClick("/register")}
                                className={activeLink === "/register" ? "active" : ""}
                            >
                                <i className="fas fa-user-plus"></i>
                                Register
                            </Link>
                            <Link 
                                to="/login" 
                                onClick={() => handleLinkClick("/login")}
                                className={activeLink === "/login" ? "active" : ""}
                            >
                                <i className="fas fa-sign-in-alt"></i>
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/veg" element={<Veg />} />
                <Route path="/nonveg" element={<NonVeg />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add" element={<Addition />} />
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

// Main App component with Router
function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;