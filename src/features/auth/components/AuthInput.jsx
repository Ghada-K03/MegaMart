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
  return (
    <div className="auth-field">
      <label htmlFor={id} className="auth-label">
        {label}
      </label>
      <input
        id={id}
        className={`auth-input ${error ? "auth-input-error" : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
      />
      {error && <p className="auth-error">{error}</p>}
    </div>
  );
}
export default AuthInput;
