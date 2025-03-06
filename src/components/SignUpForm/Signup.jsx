import {Link, useNavigate} from "react-router-dom"
import "../LoginForm/Login.css"
import { useState } from 'react';
import "./Signup.css"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously } from "firebase/auth";
import {auth} from "../Firebase/firebase.js"
import SuccessModal from "../../Utils/SuccessModal.jsx";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState('');
  const [toastMessage, setToastMessage] = useState(null); // To manage toast notifications

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    // Name validation
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 3) {
      tempErrors.fullName = "Name must be at least 3 characters";
      isValid = false;
    }
    
    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
      isValid = false;
    }
    
    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(formData.password)) {
      tempErrors.password = "Password must contain at least one number, one uppercase and one lowercase letter";
      isValid = false;
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = "Passwords do not match";
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
        // Create user with Firebase
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        
        // User created successfully
        console.log("User created:", userCredential.user);
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        
        // Store email in session storage to pre-fill login form
        sessionStorage.setItem('registeredEmail', formData.email);
        
        setToastMessage({ operation: "success", msg: "Account created successfully! Please login to continue." });
        setTimeout(() => {
          navigate('/login');
        }, 3000);
        
      } catch (error) {
        // Handle Firebase errors
        console.error("Signup error:", error);
        let errorMessage = "Failed to create account";
        
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = "This email is already in use";
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = "Invalid email address";
        } else if (error.code === 'auth/weak-password') {
          errorMessage = "Password is too weak";
        }
        
        setAuthError(errorMessage);
        setToastMessage({ operation: "error", msg: errorMessage});
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const handleGoogleSignup = async () => {
    setAuthError('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign up successful:", result.user);
      
      // Navigate to main page after successful Google signup
      setToastMessage({ operation: "success", msg: "Account created successfully! Please login to continue." });
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
    } catch (error) {
      console.error("Google signup error:", error);
      setAuthError("Google sign up failed. Please try again.");
      setToastMessage({ operation: "error", msg: "Google sign up failed. Please try again." });
    }
  };
  
  const handleGuestAccess = async () => {
    setAuthError('');
    try {
      const result = await signInAnonymously(auth);
      console.log("Guest access granted:", result.user);
      
      // Navigate to main page after successful guest login
      setToastMessage({ operation: "success", msg: "Logged in as guest successfully." });
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
    } catch (error) {
      console.error("Guest access error:", error);
      setAuthError("Guest access failed. Please try again.");
      setToastMessage({ operation: "error", msg: "Guest access failed. Please try again." });
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form-header">
        <h1>Create Account</h1>
        <p>Join our podcast streaming community</p>
      </div>

      {toastMessage && <SuccessModal operation={toastMessage.operation} msg={toastMessage.msg} />}
      
      {authError && (
        <div className="auth-error-message">
          {authError}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "error" : ""}
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
        
        <button 
          type="submit" 
          className="primary-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>
      
      <div className="auth-divider">
        <span>OR</span>
      </div>
      
      <div className="social-login-options">
        <button 
          className="social-button google-button" 
          onClick={handleGoogleSignup}
        >
          <svg className="google-icon" viewBox="0 0 24 24">
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
          </svg>
          Sign up with Google
        </button>
        
        <button 
          className="social-button guest-button" 
          onClick={handleGuestAccess}
        >
          Continue as Guest
        </button>
      </div>
      
      <div className="auth-switch">
        <p>
          Already have an account? 
          <Link to={"/login"}>
          <button 
            type="button" 
            className="text-button" 
          >
            Log In
          </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;