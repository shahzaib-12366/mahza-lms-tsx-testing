import React from 'react';
import { ReactComponent as AbizIcon } from '../../assets/images/A B Z-2 1.svg';
import { ReactComponent as InstaIcon } from '../../assets/images/insta.svg';
import { ReactComponent as MetaIcon } from '../../assets/images/meta.svg';
import { ReactComponent as XIcon } from '../../assets/images/x.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/linked.svg';

interface FooterProps {
  // Add any necessary props here
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='company-details'>
          <AbizIcon height={70} width={70} />
          <div className='footer-items'>
            <span className='footer-item'>329 Queensberry Street, North Melbourne VIC 3051, Australia.</span>
            <span className='footer-item'>042 6738 27</span>
            <span className='footer-item'>support@abizsol.com</span>
            <div className='social-icons'>
              <MetaIcon />
              <XIcon />
              <InstaIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div className='footer-section'>
          <div>
            <span className='footer-heading'>Our Company</span>
            <div className='footer-items'>
              <span className='footer-item'>Our Company</span>
              <span className='footer-item'>About Us</span>
              <span className='footer-item'>Contact Us</span>
              <span className='footer-item'>Community</span>
              <span className='footer-item'>Student Perks</span>
              <span className='footer-item'>Blog</span>
              <span className='footer-item'>Affiliate Program</span>
              <span className='footer-item'>Careers</span>
            </div>
          </div>
          <div>
            <span className='footer-heading'>Topics</span>
            <div className='footer-items'>
              <span className='footer-item'>HTML</span>
              <span className='footer-item'>CSS</span>
              <span className='footer-item'>Design</span>
              <span className='footer-item'>JavaScript</span>
              <span className='footer-item'>Ruby</span>
              <span className='footer-item'>PHP</span>
              <span className='footer-item'>Android</span>
              <span className='footer-item'>Development Tools</span>
              <span className='footer-item'>Business</span>
            </div>
          </div>
          <div>
            <span className='footer-heading'>Tracks</span>
            <div className='footer-items'>
              <span className='footer-item'>Web Design</span>
              <span className='footer-item'>Web Development</span>
              <span className='footer-item'>Rails Development</span>
              <span className='footer-item'>PHP Development</span>
              <span className='footer-item'>Android Development</span>
              <span className='footer-item'>Start A Business</span>
              <span className='footer-item'>Test</span>
            </div>
          </div>
          <div>
            <span className='footer-heading'>Support</span>
            <div className='footer-items'>
              <span className='footer-item'>Documentations</span>
              <span className='footer-item'>Forums</span>
              <span className='footer-item'>Language Packs</span>
              <span className='footer-item'>Release Status</span>
            </div>
          </div>
        </div>
      </div>
      <div className='company-policy'>
        <div className='copy-text'>Copyright © 2020 CreativeLayers. All Right Reserved.</div>
        <div style={{ gap: '10px' }} className='d-flex justify-space-between'>
          <span>Home</span>
          <span>Site Map</span>
          <span>Privacy Policy</span>
          <span>Web User Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
