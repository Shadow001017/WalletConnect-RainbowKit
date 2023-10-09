import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import { MdClose } from "react-icons/md";
import Navbar from "./Navbar";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
      let lastScrollY = window.pageYOffset;
      // function to run on scroll
      const updateScrollDirection = () => {
          const scrollY = window.pageYOffset;
          const direction = scrollY > lastScrollY ? "down" : "up";
          if (direction !== scrollDirection) {
            setScrollDirection(direction);
          }
          lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
          window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
  }, [scrollDirection]); // run when scroll direction changes

  return scrollDirection;
};

const Header = () => {

  const scrollDirection = useScrollDirection();

  const [ vis, setVis ] = useState(true);

  const handleHide = () => {
    setVis(false);
  }

  return (
    <>
    <div className={`header ${ scrollDirection === "down" ? "hidden" : "block"}`}>
      <div className="flex flex-row w-full text-left px-2 md:text-center py-5"  style={{display:vis&scrollDirection!="down"?"":"none"}}>
        <div style={{width:"100%"}}>
          <span>PHISHING WARNING:</span>
          &nbsp;&nbsp;
          <span className="text-gray-400">please make sure you're visiting</span>
          &nbsp;&nbsp;
          <span>https://polymm.finance </span>
          <span className="text-gray-400">- check the URL carefully.</span>
          </div>
          <div className="self-center" style={{width:"3%", marginRight:"20px"}}>
            <MdClose onClick={handleHide} className="cursor-pointer text-2xl hover:text-gray-500"/>
          </div>
      </div>
      <Navbar />
    </div>
    </>
  );

};

export default Header;
