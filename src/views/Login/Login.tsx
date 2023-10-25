import React from 'react';
import { ReactComponent as AbizIcon } from '../../assets/images/A B Z-2 1.svg';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard');
  }

  return (
    <div className="d-flex">
      <div className="flex-basis-50 join-section">
        <div className="intro-text">
          <div className="text-center join-text">Join our community</div>
          <div className="text-end stat-text">100,000 ACTIVE MEMBERS</div>
        </div>
      </div>
      <div className="flex-basis-50 p-50">
        <div className="login-form">
          <div className="d-flex justify-center">
            <AbizIcon />
          </div>
          <div className="d-flex justify-center login-text">Login To Your Account</div>
          <div className="d-flex justify-center free-trial-text">Let’s get started with 30 days free trial.</div>
          <div className="login-inputs">
            <Input className="remove-border" placeholder="Name" />
            <Input className="remove-border" placeholder="Email" />
            <Input className="remove-border" placeholder="Password" />
            <Button onClick={handleClick} type="primary" className="login-btn" block>
              Create Account
            </Button>
          </div>
        </div>
        <div className="login-bottom">
          <div className="help-me-text"><a href="#">Need Help!</a></div>
          <div className="social-icons">
            <a href="#"><FacebookOutlined /></a>
            <a href="#"><InstagramOutlined /></a>
            <a href="#"><LinkedinOutlined /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
