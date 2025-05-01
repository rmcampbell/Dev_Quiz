import React from 'react';
import dqLogo from '../images/dq-favicon.png';

const DQLogo: React.FC = () => {
  return <img className="dq-logo" src={dqLogo} alt="Developer Quiz Logo" />;
};
export default React.memo(DQLogo);
