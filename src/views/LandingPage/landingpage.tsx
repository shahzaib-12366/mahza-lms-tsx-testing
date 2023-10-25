import React from 'react';
import Landingheader from './header';
import Content from './content';
import Footer from '../../components/shared/Footer';

export default function LandingPage() {
  return (
    <div>
      <Landingheader />
      <div style={{ minHeight: '2750px' }}>
        <Content />
      </div>
      <Footer />
    </div>
  );
}
