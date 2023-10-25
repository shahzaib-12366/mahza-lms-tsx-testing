import React from 'react';
import Header from './pricingHeader';
import Plans from './Plans';
import Register from '../Login/register';

const PricingPlans: React.FC = () => {
  return (
    <div>
      <Header />
      <Plans />
      <Register />
    </div>
  );
}

export default PricingPlans;
