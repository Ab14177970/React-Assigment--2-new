import React from 'react';
import '../styles.css';

function SignupPage() {
  return (
    <div className="sign container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <div className="name-group">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;