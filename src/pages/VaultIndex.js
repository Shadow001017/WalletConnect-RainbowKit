import React, { useState } from "react";
import { Link,useParams } from "react-router-dom";
import "../assets/css/Vault.css";
import { FaList, FaTwitter, FaMedium, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { BsChevronDown, BsList } from 'react-icons/bs';
import { IoIosInformationCircleOutline, IoIosArrowBack } from 'react-icons/io'
import { MdMoreHoriz } from 'react-icons/md';
import { useEffect } from "react";
import * as con from "../constants.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Tooltip  from "../components/Tooltip";

var options = {
  'first' : false,
  'second' : true,
}

const VaultIndex = () => {
    const { id } = useParams();

    const [ openM, setOpenM ] = useState(false);
    const [ openS, setOpenS ] = useState(false);
    const [ key, setKey ] = useState("Default");
    const [ menu, setMenu ] = useState("hidden");
    const [myContent, setMyContent] = useState([]);
    const [ head, setHead ] = useState(0);

    const tip1 = "The APY may not reflect the actual percentage and should be used as an estimate. To achieve the target APY, it is important to stake for a longer period of time because of the auto-compounding maximizer effect."
    const tip2 = "The rewards shown are estimates and will only be realized on claim";
    const tip3 = "The net APR comes from both emissions from dividend pool as well as trading fees earned by being an LP holder.";

    var dat;
    for(var i = 0; i< con.vaultList.length; i ++)
        if(con.vaultList[i].name==id) dat=con.vaultList[i];

    useEffect(() => {
    const handleMouseClick = (event) => {
        if(event.target.innerText=="Default" || event.target.innerText=="TVL" || event.target.innerText=="APY") {
            setKey(event.target.innerText);
        }
        setOpenM(false);
        setOpenS(false);
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
    console.log(id);
    setOpenS(true);
  }

  const handleMenu = () => {
    if(menu=="hidden") setMenu("relative flex flex-col pl-4 pt-8 bg-gray-800");
    else setMenu("hidden");
  }

  const setStake = () => {
    setHead(0);
  }

  const setBoost = () => {
    setHead(1);
  }

  const setUnstake = () => {
    setHead(2);
  }

  return (
    <div className="vault">
        <div className="flex flex-col" style={{maxWidth:"1200px", width:"100%", justifyContent:"center"}}>
            <div className="v-navbar flex flex-row text-gray-400 mt-4 mb-4">
                <BsList className="ml-3 text-white text-4xl block md:hidden hover:bg-purple-700 rounded-md" onClick={handleMenu} />
                <Link to="/" className="flex flex-row pl-4 hidden md:flex">
                    <img className="p-2" src="../img/logo.png"></img>
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
                    <button className="hidden text-white md:block p-2 rounded-md border-2 border-purple-700 hover:bg-gray-500" style={{width:"150px"}}>Connect Wallet</button>
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

            <div className="bg-gray-800 w-11/12 rounded-md p-3 self-center flex">
                <span className="self-center bg-purple-700 rounded-full p-1 mx-3">
                    NOTE
                </span>
                <span className="text-white">For maximizer vaults, the longer you do not claim, the higher your APY. This is due to the unique compounding algorithm that our vaults use. Claiming to sell into forming LP will net you lower returns than if you were to leave your rewards in the vault.</span>
            </div>

            <div className="px-20 py-4 text-white">
                <Link to="/vault" className="flex flex-row pb-4">
                    <IoIosArrowBack className="text-2xl text-white"/>
                    <span>Back</span>
                </Link>
                <div className="w-full flex">
                    <div onClick={setStake} className={`${dat.type2=="Single"?"w-1/2":"w-1/3"} py-4 font-bold text-center cursor-pointer rounded-t-md hover:bg-gray-700 ${head==0?"bg-gray-800":""}`}>Stake</div>
                    <div onClick={setBoost} className={`${dat.type2=="Single"?"hidden":"w-1/3"} py-4 font-bold text-center cursor-pointer rounded-t-md hover:bg-gray-700 ${head==1?"bg-gray-800":""}`}>Boost</div>
                    <div onClick={setUnstake} className={`${dat.type2=="Single"?"w-1/2":"w-1/3"} py-4 font-bold text-center cursor-pointer rounded-t-md hover:bg-gray-700 ${head==2?"bg-gray-800":""}`}>UnStake</div>
                </div>
                <div className="flex flex-col relative p-8 bg-gray-800">
                    <div className="flex py-4 relative" style={{borderBottomWidth:"1px", borderColor:"gray"}}>
                        <div>
                        {
                            dat.name.indexOf('-')==-1?
                            <img className="h-10" src={"../img/"+dat.name+".svg"}></img>
                            :<div>
                                <img className="h-8" style={{left:"0px",top:"20px"}} src={"../img/"+dat.name.split('-')[1]+".svg"}></img>
                                <img className="absolute h-8" style={{left:"10px",top:"30px"}} src={"../img/"+dat.name.split('-')[0]+".svg"}></img>
                            </div>
                        }
                        </div>
                        <div className="flex flex-col ml-8">
                            <div className="flex pb-1">
                                <div className="bg-purple-600 text-white rounded-md text-xs px-1 mr-1">{dat.type1}</div>
                                <div className="text-gray-400 align-middle self-center text-xs">{dat.type2}</div>
                            </div>
                            <div className="text-white font-bold self-start">{dat.name}</div>
                        </div>
                    </div>
                    <div className="flex pt-4 pb-2 relative">
                        <div className="pr-2">APY/APR</div>
                        <Tooltip tooltipText={tip1}>
                            <IoIosInformationCircleOutline data-tooltip-target="tooltip-default" type="button" className="text-2xl"/>
                        </Tooltip>
                        <div className="absolute right-0">{dat.APY}%/{dat.APY*0.8}%</div>
                    </div>
                    <div className={`${dat.type2=="Single"?"hidden":""} flex pb-2 relative`}>
                        <div className="pr-2">Fee APR</div>
                        <Tooltip tooltipText={tip3}>
                            <IoIosInformationCircleOutline data-tooltip-target="tooltip-default" type="button" className="text-2xl"/>
                        </Tooltip>
                        <div className="absolute right-0">{dat.APY/3}%</div>
                    </div>
                    <div className="flex pb-2 relative">
                        <div>Staked</div>
                        <div className="absolute right-0">{dat.Staked}</div>
                    </div>
                    <div className="flex pb-2 relative">
                        <div>Profit</div>
                        <Tooltip tooltipText={tip2}>
                            <IoIosInformationCircleOutline data-tooltip-target="tooltip-default" type="button" className="text-2xl"/>
                        </Tooltip>
                        <div className="absolute right-0">{dat.Profit}</div>
                    </div>
                    <div className="flex pb-2 justify-end">
                        <div className="float-right">Balance:0.000</div>
                    </div>
                    <div className={`${head==1?"hidden":"flex flex-col"}`}>
                        <div className="absolute bg-gray-800 rounded-md py-2 px-4 cursor-pointer hover:bg-gray-900" style={{left:"55px", top:`${dat.type2=="Single"?"270px":"300px"}`}}>Max</div>
                        <input className="bg-gray-600 text-3xl text-right rounded-md p-4" />
                        <span className="py-4"></span>
                    </div>
                    <div className="bg-purple-700 text-center p-4 rounded-md hover:bg-purple-900 cursor-pointer">Connect Wallet</div>
                    <div className={`${dat.type2=="Single"?"hidden":""} ${head==1?"hidden":"flex flex-col"} text-gray-500 text-center pt-6 cursor-pointer`}>Tip:Boost your profits by staking Mad Meerkat Nfts first</div>
                </div>
            </div>

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

export default VaultIndex;
