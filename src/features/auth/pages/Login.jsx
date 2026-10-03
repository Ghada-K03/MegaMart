import "../styles/Auth.css";
import { useState } from "react";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
import logo from "../../../assets/MegaMart-logo.svg";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function Login() {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // }
  const { formData, handleChange } = useForm({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  function validateForm() {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  }
  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
  }
  return (
    <main className="login-page">
      <section className="login-card">
        <img src={logo} className="login-logo" alt="MegaMart" />
        <div className="login-content">
          <div className="login-heading">
            <h1>Login</h1>
            <p>Login to access your travelwise account</p>
          </div>
          <form className="login-form" noValidate onSubmit={handleSubmit}>
            <AuthInput
              id="email"
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              error={errors.email}
            />
            <AuthInput
              id="password"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
              error={errors.password}
            />
            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <AuthButton type="submit">Login</AuthButton>
          </form>
          <p className="auth-signup-text">
            Don’t have an account?
            <Link to="/signup" className="signup-text">
              Sign up
            </Link>
          </p>
          <div className="login-divider">
            <p>Or login with</p>
          </div>
          <div className="social-icons-login">
            <button
              type="button"
              className="social-button facebooc-icon"
              aria-label="Login with FaceBook"
            >
              <FaFacebook />
            </button>
            <button
              type="button"
              className="social-button"
              aria-label="Login with Google"
            >
              <FcGoogle />
            </button>
            <button
              type="button"
              className="social-button"
              aria-label="Login with Apple"
            >
              <FaApple />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Login;
