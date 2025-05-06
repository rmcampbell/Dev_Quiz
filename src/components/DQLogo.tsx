import React from 'react';
import dqLogo from '../images/dq-icon.webp';

const DQLogo: React.FC = () => {
  return <img className="dq-logo" src={dqLogo} alt="Developer Quiz Logo" />;
};

export default React.memo(DQLogo);
