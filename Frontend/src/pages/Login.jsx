import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

const Auth = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [otpFromApi, setOtpFromApi] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    otp: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  // Toggle between Sign Up and Sign In
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: '', email: '', otp: '', password: '' });
    setMessage('');
  };

  // Handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(otpFromApi != formData.otp){
      alert("otp not matched");
      setMessage(''); // Clear previous messages
      return;
    }
    setMessage(''); // Clear previous messages

    try {
      if (isSignUp) {
        // Sign Up Request
        const response = await axios.post('/api/signup', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        setMessage(response.data.message || 'Sign up successful!');
      } else {
        // Sign In Request
        const response = await axios.post('/api/signin', {
          email: formData.email,
          password: formData.password
        });
        //if done then 
        props.authorizedKaro(true);
        setMessage(response.data.message || 'Sign in successful!');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };
  const hanldeotp = async () => {
          try {
            const response = await axios.post('/api/signup', {
             email : formData.email
            });
            alert("otp sended !!");
            console.log(response);
            
          } catch (error) {
            alert("send otp error");
          }
  }

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {isSignUp && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          id='email-input'
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        {
          isSignUp && <>
          <button onClick={hanldeotp} className="otp-btn">Send Otp</button>
          
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={formData.otp}
              onChange={handleChange}
              required
            />
          </>
        }
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <p className="message">{message}</p>
      <button onClick={toggleForm}>
        {isSignUp ? 'Already have an account? Sign In' : 'New user? Sign Up'}
      </button>
    </div>
  );
};

export default Auth;
