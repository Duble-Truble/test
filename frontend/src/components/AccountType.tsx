import React, { useState } from 'react';
import '../css/AccountType.css';

const AccountType = () => {
  const [accountType, setAccountType] = useState(null);

  const handleSelectAccountType = (type) => {
    setAccountType(type);

  };

  return (
    <div className="account-type-page">
      <div className="background-image-container">

        <div className="text-content">

          <blockquote>
            <div className="duble-quotes">“</div>
            The passage experienced a surge in popularity
            during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.

          </blockquote>
          <div className='end-of-text-identifier'></div>

        </div>

      </div>
      <div className="account-content"> {/* Content on the left side, like quotes or images */} </div>
      <div className="account-type-container">
        <header className="account-type-header">
          <h1>Join Us!</h1>
          <p>To begin this journey, tell us what type of account you'd be opening.</p>
        </header>
        <div className="account-type-option"
          onClick={() => handleSelectAccountType('individual')}
        >
          <div className="account-type-icon poligon1" >
            <div className="inner-icon2"></div>
          </div>
          <span className="account-type-text">Individual</span>
        </div>
        <div className="account-type-option"
          onClick={() => handleSelectAccountType('business')}
        >
          <div className="account-type-icon poligon2">
            <div className="inner-icon2"></div>
          </div>
          <span className="account-type-text">Business</span>
        </div>

      </div>
    </div>
  );
};

export default AccountType;
