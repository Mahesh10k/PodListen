import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../SignUpForm/Signup.css";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase.js";
import SuccessModal from "../../Utils/SuccessModal.jsx";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const registeredEmail = sessionStorage.getItem('registeredEmail');
    if (registeredEmail) {
      setFormData(prev => ({ ...prev, email: registeredEmail }));
      sessionStorage.removeItem('registeredEmail');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email address";
      isValid = false;
    }
    
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("User logged in:", userCredential.user);
        localStorage.setItem("userName", userCredential.user.email.split("@")[0]);
        localStorage.setItem("ProfilePic", "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504=");
        setToastMessage({ operation: "success", msg: "Login Success..." });
        setTimeout(() => navigate('/dashboard'), 3000);
        setFormData({ email: '', password: '' });
      } catch (error) {
        let errorMessage = "Failed to log in";
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          errorMessage = "Invalid email or password";
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = "Invalid email address";
        } else if (error.code === 'auth/too-many-requests') {
          errorMessage = "Too many failed login attempts. Please try again later";
        }
        setToastMessage({ operation: "error", msg: errorMessage });
        setAuthError(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setToastMessage({ operation: "error", msg: "Please enter your email first" });
      return;
    }
    try {
      await sendPasswordResetEmail(auth, formData.email);
      setToastMessage({ operation: "success", msg: "Password reset email sent! Check your inbox." });
    } catch (error) {
      console.error("Password reset error:", error);
      let errorMessage = "Failed to send reset email";
      if (error.code === 'auth/user-not-found') {
        errorMessage = "No account found with this email";
      }
      setToastMessage({ operation: "error", msg: errorMessage });
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form-header">
        <h1>Welcome Back</h1>
        <p>Login to continue your podcast journey</p>
      </div>
      {authError && <div className="auth-error-message">{authError}</div>}  
      {toastMessage?.msg && <SuccessModal operation={toastMessage.operation} msg={toastMessage.msg} />}
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} className={errors.email ? "error" : ""} />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} className={errors.password ? "error" : ""} />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="forgot-password">
          <button type="button" className="text-button" onClick={handleForgotPassword}>Forgot Password?</button>
        </div>
        <button type="submit" className="primary-button" disabled={isSubmitting}>{isSubmitting ? "Logging in..." : "Log In"}</button>
      </form>
      <div className="auth-switch">
        <p>Don&apos;t have an account? <Link to={"/signup"}><button type="button" className="text-button">Sign Up</button></Link></p>
      </div>
    </div>
  );
};
export default LoginForm;
