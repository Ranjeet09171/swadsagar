import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

function Login() {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const registerUser = (LoginData) => {

  let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === LoginData.email &&
        user.password === LoginData.password
    );

    if (validUser) {

     localStorage.setItem("currentUser", JSON.stringify(validUser));
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // ✅ logout all users
  users = users.map(user => ({
    ...user,
    isLoggedIn: false
  }));

  // ✅ login current user
  const updatedUsers = users.map(user =>
    user.email === LoginData.email &&
    user.password === LoginData.password
      ? { ...user, isLoggedIn: true }
      : user
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  toast.success(`Welcome ${validUser.name}!`);

setTimeout(() => {
  navigate("/veg");
  window.location.reload();
}, 2000); // wait for toast
  
}else {
      alert("Invalid username or password");
    }
  };

  return (
  <div className="login-wrapper">
  <div className="login-card">
    <h2>Login</h2>

    <form onSubmit={handleSubmit(registerUser)}>
      <div className="form-group">
        <label>Email</label>
        <input type="email" {...register("email")} />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" {...register("password")} />
      </div>

      <button type="submit" className="login-btn">Login</button>
    </form>
  </div>
</div>
);
}

export default Login;