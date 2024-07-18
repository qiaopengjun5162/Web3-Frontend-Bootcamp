import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { Link } from "react-router-dom";
import Eth from "../eth.svg";
import Logo from "../moralis-logo.svg";

function Header(props) {

  const { address, isConnected, connect } = props;

  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <ConnectButton />
      </div>
    </header>
  );
}

export default Header;
