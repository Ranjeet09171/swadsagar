import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/login"); // 🔒 protect page
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // ❌ logout all users
    users = users.map((u) => ({
      ...u,
      isLoggedIn: false,
    }));

    localStorage.setItem("users", JSON.stringify(users));

    // ❌ remove current user
    localStorage.removeItem("currentUser");

    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2>👤 User Profile</h2>

        <div className="profile-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;