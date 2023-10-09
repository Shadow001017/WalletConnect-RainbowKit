import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import { FaList, FaSign, FaSignOutAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {

  const { theme } = useTheme();

  const listStyle = {
    "textDecoration": "none",
    "color": "black"
  };

  const openVault = () => {
    window.open(window.location.origin + "/vault", "_blank", "noreferrer");
  }

  return (
    <div className={`navbar ${theme} flex text-gray-400`}>
      <div className="hidden sm:flex sm:flex-row self-center">
        <Link to="/" className="ml-4">
          <img className="p-2 self-center hidden lg:block" src="./img/logo.png" style={{ height: "50px" }}></img>
          <img className="p-2 self-center hidden md:block lg:hidden" style={{ height: "50px" }} src="./img/mobile-logo.png"></img>
        </Link>
        <Link to="/" className="dropdown ml-1 md:ml-8">Trade
          <div className="dropdown-content mt-3">
            <Link to="/" className="rounded-t-md">Exchange</Link>
            <Link to="/">Liquidity</Link>
            <Link to="/">Limit Order</Link>
            <Link to="/">
              Stable Swap
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/">
              Bridge
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/" className="rounded-b-lg">
              Leverage Trading
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
          </div>
        </Link>
        <Link to="/" className="dropdown">Earn
          <div className="dropdown-content mt-3">
            <Link to="/" className="rounded-t-lg">Farms</Link>
            <Link to="/">Pools</Link>
            <Link to="/vault" className="rounded-b-lg">
              Vaults
            </Link>
          </div>
        </Link>
        <Link to="/" className="dropdown">Defi
          <div className="dropdown-content mt-3">
            <Link to="/" className="rounded-t-lg">
              DawnStar
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/" className="rounded-b-lg">
              MadMex
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
          </div>
        </Link>
        <Link to="/" className="dropdown">Launch</Link>
        <Link to="/" className="dropdown">Referrals</Link>
        <Link to="/" className="dropdown">Games</Link>
        <Link to="/" className="dropdown" style={{ paddingRight: "20px" }}>
          <FaList className="ml-2" style={{ height: "24px" }} />
          <div className="dropdown-content">
            <Link to="/" className="rounded-t-lg">Analytics</Link>
            <Link to="/">
              MMF Dex (Cronos)
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/">
              Mad Meerkat NFT
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/">
              Docs
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/">
              Apply to list
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/">
              Dex Screener
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/">
              CoinMarketCap
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/">
              CoinGecko
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
            <Link to="/" className="rounded-b-lg">
              Matic Faucet
              <FaSignOutAlt className="float-right" style={{ height: "30px" }} />
            </Link>
          </div>
        </Link>
      </div>
      <div></div>
      <div className="relative sm:absolute sm:right-0 flex flex-row items-center pt-1" style={{ width: "300px" }}>
        <Link className="flex flex-row w-3/8 px-4 items-center">
          <img className="p-3 self-center" style={{ height: "50px" }} src="./img/mobile-logo.png"></img>
          <div className="">$0.010</div>
        </Link>
        <Link className="hidden sm:block w-5/8 px-3 mr-2 bg-purple-600 rounded-full text-white font-bold hover:bg-purple-800" style={{ marginRight: "20px" }}>Connect Wallet</Link>
      </div>
      <ConnectButton />
      {/* <button className="block absolute right-0 sm:hidden bg-purple-600 rounded-full text-white font-bold hover:bg-purple-800 px-2" style={{height:"30px", marginTop:"15px", marginRight:"10px"}}>Connect Wallet</button> */}
    </div>
  );
};

export default Navbar;
