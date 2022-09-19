import React from "react";
import wallet from "../../assets/wallet.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Put your Crypto holdings to good use!
        </h1>
        <p>
          Get Instant Loans for your crypto with just a few clicks. Zero Paper
          Documentation, Hassle free and totally liquidable at any time!
        </p>
      </div>

      <div className="header-image">
        <img src={wallet} alt="BTC_Wallet" />
      </div>
    </div>
  );
};

export default Header;
