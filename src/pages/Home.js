import React from "react";
import "../assets/css/Home.css";
import { BsBarChartFill } from "react-icons/bs";
import { BiDollarCircle } from 'react-icons/bi';
import { ReactComponent as MyCircle } from "../assets/img/circle.svg";
import { ReactComponent as MyChart } from "../assets/img/chart.svg";
import { ReactComponent as MyChart2 } from "../assets/img/chart2.svg";
import { useTheme } from "../context/ThemeContext";

export default function Home() {

    const { theme } = useTheme();

    return (
        <>
            <div className="">
                <div className="w-full bg-black relative" style={{height:"600px"}}>
                    <img className="absolute anim-star" 
                        src="../img/star-big.png" 
                        style={{left:"10%", top:"35%", width:"124px", height:"109px"}}
                        ></img>
                    <img className="absolute anim-star" src="../img/star-small.png" style={{left:"20%", top:"18%", width:"70px", height:"62px"}}></img>
                    <img className="absolute anim-star1" 
                        src="../img/three-stars.png" 
                        style={{left:"75%", top:"18%", width:"130px", height:"144px", zIndex:1}}
                        ></img>
                    <img className="absolute anim-star" src="../img/star-big.png" style={{left:"75%", top:"70%", width:"124px", height:"109px"}}></img>
                    <div className="pt-24 relative">
                        <div className="flex flex-col text-white items-center">
                            <img src="../img/madmex.svg" style={{width:"400px", height:"100px"}} ></img>
                            <div className="font-bold text-xl">Newly Launched Decentralized Spot & Perpetual Exchange</div>
                            <div className="font-bold text-3xl pb-16">Trade up to 30x Leverage!</div>
                            <button className="trade anim-trade">Trade Here</button>
                        </div>
                    </div>
                </div>
                
                <div className="part2 py-10">
                    <div className="flex text-white justify-center" style={{maxWidth:"1000px", width:"100%"}}>
                        <div className="container grid px-32 grid-cols-1 md:grid-cols-3 md:px-2 lg:grid-cols-4 lg:px-2">
                            <div className={`pad ${theme} relative p-5`}>
                                <div className="absolute" style={{right:"20px"}}><MyChart fill={theme=="light"?"slategray":"white"}/></div>
                                <div className={`pt-24 text-3xl font-bold ${theme=="light"?"text-black":"text-white"}`}>$1.78</div>
                                <div className="text-3xl text-purple-700 font-bold">million</div>
                                <br/>
                                <div className={`${theme=="light"?"text-black":"text-white"}`}>Total Value Locked</div>
                            </div>
                            <div className={`pad ${theme} relative p-5`}>
                                <div className="absolute" style={{right:"20px"}}><BiDollarCircle className={`text-4xl ${theme=="light"?"text-gray-600":"text-white"}`}/></div>
                                <div className={`pt-24 text-3xl font-bold ${theme=="light"?"text-black":"text-white"}`}>1.48</div>
                                <div className="text-3xl text-purple-700 font-bold">million</div>
                                <br/>
                                <div className={`${theme=="light"?"text-black":"text-white"}`}>Circulating Market Cap</div>
                            </div>
                            <div className={`pad ${theme} relative p-5`}>
                                <div className="absolute" style={{right:"20px"}}><MyCircle fill={theme=="light"?"slategray":"white"}/></div>
                                <div className={`pt-24 text-3xl font-bold ${theme=="light"?"text-black":"text-white"}`}>152</div>
                                <div className="text-3xl text-purple-700 font-bold">million</div>
                                <br/>
                                <div className={`${theme=="light"?"text-black":"text-white"}`}>Circulating Supply</div>
                            </div>
                            <div className="hidden md:block lg:hidden"></div>
                            <div className={`pad ${theme} relative p-5`}>
                                <div className="absolute" style={{right:"20px"}}><MyChart2 fill={theme=="light"?"slategray":"white"}/></div>
                                <div className={`pt-24 text-3xl font-bold ${theme=="light"?"text-black":"text-white"}`}>1.49</div>
                                <div className="text-3xl text-purple-700 font-bold">billion</div>
                                <br/>
                                <div className={`${theme=="light"?"text-black":"text-white"}`}>Total Volume Traded</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`part3 ${theme} relative pt-10`}>
                    <div className="flex flex-col md:flex-row" style={{maxWidth:"1000px", width:"100%", height:"600px"}}>
                        <div className="block md:hidden pb-4">
                            <img src="../img/MMF.png" className="anim-star top-0 float-right"  style={{width:"20%"}}></img>
                            <img src="../img/MMO.png" className="anim-star absolute right-0"  style={{width:"20%"}}></img>
                            <img src="../img/SVN.png" className="anim-star1 absolute right-0" style={{width:"20%"}}></img>
                            <img src="../img/MMT.png" className="anim-star absolute right-0" style={{width:"20%"}}></img>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 md:px-10 md:py-20">
                            <div className={`${theme=="light"?"text-black":"text-white"} text-3xl font-bold`}>MM FInance has the largest ecosystem in the defi space with its DEX, Yeield Optimizer, NFT, Algo Stablecoin and many more.</div>
                            <br />
                            <div className="font-bold text-gray-600">MMF is currently operating on Cronos and recently launched on Polygon. Stay turned.</div>
                            <br />
                            <div className="flex flex-row">
                                <button className="py-2 px-5 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-800 hover:text-gray-600">Trade Now</button>
                                <a className="p-2 text-purple-600 font-bold" href="#">Learn</a>
                            </div>
                        </div>
                        <div className="hidden md:block relative w-1/2">
                            <img src="../img/MMF.png" className="anim-star"></img>
                            <img src="../img/MMO.png" className="anim-star absolute top-0"></img>
                            <img src="../img/SVN.png" className="anim-star1 absolute top-0"></img>
                            <img src="../img/MMT.png" className="anim-star absolute top-0"></img>
                        </div>
                    </div>
                </div>
                <div className="part4 relative">
                    <div className="flex flex-col md:flex-row py-20 sm:pb-40" style={{maxWidth:"1000px", width:"100%"}}>
                        <div className="hidden md:block relative w-1/2">
                            <img src="../img/banner2-1.png" className="anim-star "></img>
                            <img src="../img/banner2-2.png" className="anim-star absolute top-0"></img>
                            <img src="../img/banner2-3.png" className="anim-star absolute top-0"></img>
                        </div>
                        <div className="block md:hidden pb:4">
                            <img src="../img/banner2-1.png" className="anim-star top-0 float-right w-1/4"></img>
                            <img src="../img/banner2-2.png" className="anim-star absolute right-0 w-1/4"></img>
                            <img src="../img/banner2-3.png" className="anim-star absolute right-0 w-1/4"></img>
                        </div>
                        <div className="flex flex-col md:w-1/2 px-4 md:pt-40">
                            <div className="text-3xl font-bold">
                                <span className={`${theme=="light"?"text-gray-600":"text-white"}`}>Earn</span>
                                <span className={`${theme=="light"?"text-gray-800":"text-white"}`}> passive income by staking your crypto assets.</span>
                            </div>
                            <br />
                            <div>
                                <span className={`${theme=="light"?"text-gray-600":"text-white"}`}>
                                MM.Finance makes it easy to make your crypto work for you.
                                Simply take and enjoy the rewards.
                                </span>
                            </div>
                            <br />
                            <div className="flex flex-row">
                                <button className="py-2 px-5 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-800 hover:text-gray-600">Explore</button>
                                <a className="p-2 text-purple-600 font-bold" href="#">Learn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

