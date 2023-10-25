import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="wrapper">
      <form>
        <div className="row">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>

        <div className="email-form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="row">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
        </div>

        <div className="robot-form-group">
          <div className="shaded-area"></div>
          <div className="checkbox-container">
            <input type="checkbox" id="notARobot" name="notARobot" />
            <label htmlFor="notARobot">I am not a robot</label>
          </div>
        </div>

        <div className="terms-checkbox-container">
          <input type="checkbox" id="termsAndConditions" name="termsAndConditions" />
          <label htmlFor="termsAndConditions">
            <a href="#">Terms and Conditions</a> are applied!
          </label>
        </div>

        <div className="button-container">
          <button type="button" className="apply-button">
            Apply
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
