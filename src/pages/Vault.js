import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Vault.css";
import { FaList, FaTwitter, FaMedium, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { BsChevronDown, BsList } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';
import { useEffect } from "react";
import * as con from "../constants.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";

var options = {
  'first' : false,
  'second' : true,
}

const Vault = () => {

  const [ openM, setOpenM ] = useState(false);
  const [ openS, setOpenS ] = useState(false);
  const [ pool, setPool ] = useState(true);
  const [ single, setSingle] = useState(true);
  const [ openD, setOpenD ] = useState(false);
  const [ key, setKey ] = useState("Default");
  const [ menu, setMenu ] = useState("hidden");

  useEffect(() => {
    const handleMouseClick = (event) => {
      if(event.target.innerText=="Default" || event.target.innerText=="TVL" || event.target.innerText=="APY") {
        setKey(event.target.innerText);
      }
      setOpenM(false);
      setOpenS(false);
      setOpenD(false);
    };

    window.addEventListener('mousedown', handleMouseClick);

    return () => {
      window.removeEventListener('mousedown', handleMouseClick);
    };
  }, []);

  const handleOpenM = () => {
    setOpenM(true);
  };

  const handleOpenS = () => {
    setOpenS(true);
  }

  const handlePool = () => {
    setPool(!pool);
  }

  const handleSingle = () => {
    setSingle(!single);
  }

  const handleOpenD = () => {
    setOpenD(true);
  }

  const handleMenu = () => {
    if(menu=="hidden") setMenu("relative flex flex-col pl-4 pt-8 bg-gray-800");
    else setMenu("hidden");
  }

  const listItems = con.vaultList.map((element) => 
    <Link to={`/vault/${element.name}`} className="myitems flex text-center items-center cursor-pointer">
      <div className="flex justify-center py-4 w-1/3 relative">
        <div className="w-1/3 float-right relative">
        {
        element.name.indexOf('-')==-1?
        <img className="absolute h-12" style={{right:"10px"}} src={"./img/"+element.name+".svg"}></img>
        :<div>
          <img className="absolute h-8" style={{right:"20px"}} src={"./img/"+element.name.split('-')[1]+".svg"}></img>
          <img className="absolute h-8" style={{top:"15px", right:"10px"}} src={"./img/"+element.name.split('-')[0]+".svg"}></img>
        </div>
        }
        </div>
        <div className="flex flex-col w-2/3">
          <div className="flex pb-1">
            <div className="bg-purple-600 text-white rounded-md text-xs px-1 mr-1">{element.type1}</div>
            <div className="text-gray-400 align-middle self-center text-xs">{element.type2}</div>
          </div>
          <div className="text-white font-bold self-start">{element.name}</div>
        </div>
      </div>
      <div className="text-purple-700 font-bold w-1/6">{element.APY}%</div>
      <div className="w-1/6 text-white">{element.Earn}</div>
      <div className="w-1/6 text-white">{element.Platform}</div>
      <div className="w-1/6 text-white">${element.TVL.toLocaleString("en-US")}</div>
    </Link>
  );

  return (
    <div className="vault">
      <div className="flex flex-col" style={{maxWidth:"1200px", width:"100%", justifyContent:"center"}}>
        <div className="v-navbar flex flex-row text-gray-400 mt-4 mb-4">
          <BsList className="ml-3 text-white text-4xl block md:hidden hover:bg-purple-700 rounded-md" onClick={handleMenu} />
          <Link to="/" className="flex flex-row pl-4 hidden md:flex">
            <img className="p-2" src="./img/logo.png"></img>
          </Link>
          <div className="right-0 flex flex-row mr-5">
            <div className="hidden md:flex">
              <Link to="/vault" className="text-purple-600 font-bold pr-4" style={{paddingTop:"20px"}}>VAULT</Link>
              <Link className="v-dropdown" onClick={handleOpenS}>SWAP
                <div className="dropdown2-content text-sm text-center" style={{display:openS?"block":"none", paddingTop:"15px"}}>
                  <Link to="/" className="rounded-t-lg">Buy MMO</Link>
                  <Link to="/" className="rounded-b-lg">Form Liquidity</Link>
                </div>
              </Link>
              <Link to="/" className="v-dropdown">GAMES</Link>
              <Link to="/" className="v-dropdown">GUIDE</Link>
              <Link className="dropdown2" onClick={handleOpenM}>
                <MdMoreHoriz className="ml-2 text"/>
                <div className="dropdown2-content text-sm text-center" style={{display:openM?"block":"none"}}>
                  <Link to="/" className="rounded-t-lg">MM Finance (Polygon)</Link>
                  <Link to="/">Dawn Star</Link>
                  <Link to="/">Mad Meerkat NFT</Link>
                  <Link to="/" className="rounded-b-lg">Apply for Vault</Link>
                </div>
              </Link>
            </div>
            <button className="hidden md:block p-2 rounded-md border-2 border-purple-700" style={{width:"150px"}}>Connect Wallet</button>
            <button className="block absolute right-0 md:hidden rounded-md border-2 p-2 border-purple-700 " style={{ marginRight:"20px"}}>Connect Wallet</button>
          </div>
        </div>

        <div className={menu}>
          <Link to="/" className="text-purple-800 py-3">Vault</Link>
          <Link to="/" className="text-white py-3">Swap</Link>
          <Link to="/" className="text-white py-3">Games</Link>
          <Link to="/" className="text-white py-3">Guide</Link>
          <Link to="/" className="text-white py-3">MM Finance(Polygon)</Link>
          <Link to="/" className="text-white py-3">Dawn Star</Link>
          <Link to="/" className="text-white py-3">Mad Meerkat NFT</Link>
          <Link to="/" className="text-white py-3">Apply for Vault</Link>
        </div>

        <div id="help" className="self-center rounded-md mt-4">
          MMO help MaTIC lovers earn more MATIC. Stake MMO and earn MATIC
        </div>

        <div style={{paddingTop:"50px", paddingBottom:"50px"}}>
          <div className="grid grid-cols-2 md:grid-cols-4 text-white place-self-center">
            <div className="v-rec rounded-lg text-white pt-6 pl-6">
              <div className="font-bold text-xl">$571,952</div>
              <div className="font-bold text-xl">Staked</div>
              <br/>
              <div className="text-xs">Total Value Locked</div>
            </div>
            <div className="v-rec rounded-lg text-white pt-6 pl-6">
              <div className="font-bold text-xl">$192,323.45</div>
              <br/>
              <br/>
              <div className="text-xs">Market Cap</div>
            </div>
            <div className="v-rec rounded-lg text-white pt-6 pl-6">
              <div className="font-bold text-xl">0.088 MMO</div>
              <div className="font-bold text-xl">per MMF</div>
              <br/>
              <div className="text-xs">Emissios</div>
            </div>
            <div className="v-rec rounded-lg text-white pt-6 pl-6">
              <div className="font-bold text-xl">Up to 465%</div>
              <br/>
              <br/>
              <div className="text-xs">APY</div>
            </div>
          </div>
        </div>

        <div className="mtb-header text-sm py-3 relative">
          <div className={
            (pool)?"p-2 rounded-md bg-purple-800 hover:bg-purple-600 text-white cursor-pointer"
            :"p-2 rounded-md text-gray-400 hover:bg-purple-600 hover:text-white cursor-pointer"
            }
            onClick={handlePool}>
              Liquidity Pool
          </div>
          <div className={
            (single)?"p-2 rounded-md bg-purple-800 hover:bg-purple-600 text-white cursor-pointer"
            :"p-2 rounded-md text-gray-400 hover:bg-purple-600 hover:text-white cursor-pointer"
            } 
            onClick={handleSingle}>
              Single
          </div>
          <input className="text-white bg-gray-700 text-center rounded-md" placeholder="Search by name" />
          <div className="absolute right-0">
            <a className="v-dropdown2 cursor-pointer" onClick={handleOpenD}>
              <div className="flex">
                <div>{key}</div>
                <BsChevronDown />
              </div>
              <div className="dropCus-content text-sm text-center" style={{display:openD?"block":"none"}}>
                <Link className="rounded-t-lg">Default</Link>
                <Link>TVL</Link>
                <Link className="rounded-b-lg">APY</Link>
              </div>
            </a>
          </div>
        </div>

        <div className="tbheader flex rounded-t-md">
          <div className="w-1/3">Vault Name</div>
          <div className="w-1/6">APY</div>
          <div className="w-1/6">Earn</div>
          <div className="w-1/6">Platform</div>
          <div className="w-1/6">TVL</div>
        </div>

        {
          listItems
        }

        <div className="v-footer self-center">
          <div className="flex flex-row pt-10">
            <FaTwitter className="p-1 text-4xl text-white"/>
            <FaMedium className="p-1 text-4xl text-white"/>
            <FaDiscord className="p-1 text-4xl text-white"/>
            <FaTelegramPlane className="p-1 text-4xl text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
