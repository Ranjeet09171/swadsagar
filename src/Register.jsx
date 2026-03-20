import { useForm } from "react-hook-form";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitLogics = (data) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if email already exists
    const userExists = users.some(user => user.email === data.email);
    
    if (userExists) {
      alert("Email already registered! Please login.");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registration Successful!");
    reset();  
    navigate("/login");
       
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit(submitLogics)}>
          <input
            type="text"
            placeholder="Enter Name"
            className="input-field"
            {...register("name", { required: "Name is required" })}
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="input-field"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
            {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />

          <button className="register-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;