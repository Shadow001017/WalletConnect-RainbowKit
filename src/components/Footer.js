import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import { FaTelegram, FaTwitter, FaMedium, FaDiscord, FaArrowRight, FaRegMoon } from 'react-icons/fa';
import { useTheme } from "../context/ThemeContext";
import { BiSun } from "react-icons/bi";

const Footer = () => {

    const {theme, setTheme } = useTheme();

    const onThemeChange = () => {
        console.log(theme);
        if(theme == "light") setTheme("dark");
        else setTheme("light");
    };
  
    return (
      <div className="footer relative flex flex-col">
          <div className="flex flex-row">
              <div className={`flex ${theme=="light"?"bg-gray-500":"bg-gray-700"} rounded-full p-1 cursor-pointer`} onClick={onThemeChange}>
                  <BiSun className={`${theme=="light"?"text-white":"text-black"} text-2xl`} style={{padding:"3px"}}/>
                  <FaRegMoon className={`${theme=="light"?"text-black bg-white":"text-white bg-black"} text-2xl rounded-full hover:border-purple-600 border-2`}
                      style={{padding:"1px"}} />
              </div>
              <a href="#">
                  <FaTwitter className="text-purple-300 text-xl mx-3 mt-2"/>
              </a>
              <a href="#">
                  <FaMedium className="text-purple-300 text-xl mx-3 mt-2"/>
              </a>
              <a href="#">
                  <FaDiscord className="text-purple-300 text-xl mx-3 mt-2"/>
              </a>
              <a href="#">
                  <FaTelegram className="text-gray-400  text-xl mx-3 mt-2"/>
              </a>
          </div>
          <div className="footer-right">
              <a href="#" className="flex flex-row">
                  <img src="./img/mobile-logo.png" style={{height:"30px"}}></img>
                  <div className="text-gray-400 self-center font-bold px-4">$0.010</div>
                  <button className="py-2 px-5 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-800 hover:text-gray-600">
                      <FaArrowRight />
                  </button>
              </a>
          </div>
      </div>
    );
  
  };
  
export default Footer;
