import React from "react";

const Tooltip = ({ children, tooltipText }) => {
    const tipRef = React.createRef(null);
    const handleMouseEnter = () => {
        tipRef.current.style.opacity = 1;
        tipRef.current.style.marginLeft = "20px";
    }
    const handleMouseLeave = () => {
        tipRef.current.style.opacity = 0;
        tipRef.current.style.marginLeft = "10px";
    }
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute whitespace-no-wrap bg-white text-black text-xs px-4 py-2 rounded flex items-center transition-all duration-150"
                style={{ top: "100%", opacity: 0 , width:"250px"}}
                ref={tipRef}
            >
                {tooltipText}
            </div>
            {children}
        </div>
    );
}

export default Tooltip;