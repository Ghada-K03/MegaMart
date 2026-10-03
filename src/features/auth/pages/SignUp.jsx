import { useState } from "react";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
import logo from "../../../assets/MegaMart-logo.svg";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function SignUp() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   confirmPassword: "",
  // });
  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // }
  const { formData, handleChange } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);

  function validateForm() {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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

    console.log("Sign up data:", formData);
  }
  return (
    <main className="login-page signup-page">
      <section className="login-card">
        <img src={logo} className="login-logo" alt="MegaMart" />
        <div className="login-content signup-content">
          <div className="login-heading">
            <h1>Sign Up</h1>
            <p>
              Let’s get you all st up so you can access your personal account.
            </p>
          </div>
          <form
            className="login-form signup-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="signup-row">
              <AuthInput
                id="firstName"
                label="First name"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <AuthInput
                id="lastName"
                label="Last name"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>
            <div className="signup-row">
              <AuthInput
                id="email"
                label="Email"
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <AuthInput
                id="phone"
                label="Phone number"
                type="tel"
                name="phone"
                placeholder="+972 500000000"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>
            <AuthInput
              id="password"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <AuthInput
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Enter Your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            <label className="signup-checkbox">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
              />
              <span>
                I agree to all{" "}
                <a href="#" className="signup-text">
                  {" "}
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="signup-text">
                  {" "}
                  Privacy Policy
                </a>
              </span>
            </label>
            <AuthButton type="submit" disabled={!agreed}>
              Create Account
            </AuthButton>

            <p className="auth-signup-text">
              Already have an account?{" "}
              <Link to="/login" className="signup-text">
                Login
              </Link>
            </p>

            <div className="login-divider signup-divider">
              <p>Or sign up with</p>
            </div>

            <div className="social-icons-login social-icons-signup">
              <button
                type="button"
                className="social-button"
                aria-label="Sign up with Facebook"
              >
                <FaFacebook className="facebook-icon" />
              </button>

              <button
                type="button"
                className="social-button"
                aria-label="Sign up with Google"
              >
                <FcGoogle />
              </button>

              <button
                type="button"
                className="social-button"
                aria-label="Sign up with Apple"
              >
                <FaApple />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
export default SignUp;
