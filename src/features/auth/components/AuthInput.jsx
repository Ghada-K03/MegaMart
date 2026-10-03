import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
function AuthInput({
  id,
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
  return (
    <div className="auth-field">
      <label htmlFor={id} className="auth-label">
        {label}
      </label>
      <div className="auth-input-wrapper">
        <input
          id={id}
          className={`auth-input ${isPassword ? "auth-input-password" : ""} ${error ? "auth-input-error" : ""}`}
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
        />
        {isPassword && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? <FiEyeOff /> : <FiEye />}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
      {error && <p className="auth-error">{error}</p>}
    </div>
  );
}
export default AuthInput;
