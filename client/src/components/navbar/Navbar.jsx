import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // État pour le menu déroulant

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setIsDropdownOpen(false); // Ferme le menu après la déconnexion
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Basculer l'état du menu déroulant
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TripNest</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span onClick={toggleDropdown} className="username">
              {user.username}
            </span>{" "}
            {/* Ajout d'un gestionnaire de clic */}
            {isDropdownOpen && ( // Affiche le menu déroulant si ouvert
              <div className="dropdownMenu">
                <button className="dropdownItem" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
