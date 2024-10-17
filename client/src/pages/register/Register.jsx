import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css"; // Add styles here if necessary

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", credentials);
      navigate("/login"); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="rInput"
        />
        <button onClick={handleRegister} className="rButton">
          Register
        </button>
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default Register;