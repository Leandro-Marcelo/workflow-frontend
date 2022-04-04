import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../logo/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#212123] text-gray-300">
            <div className="flex justify-between px-2 py-2 w-full">
                <div className="flex ">
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1 h-[50px] w-[80px] text-white flex items-center justify-center rounded-[7px]">
                        Board
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1  text-white flex items-center justify-center rounded-[7px]">
                        Challenge 1 - ONE
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1 text-white flex items-center justify-center rounded-[7px]">
                        estrella
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1 text-white flex items-center justify-center rounded-[7px]">
                        Leandro Marcelo's workspace
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1  text-white flex items-center justify-center rounded-[7px]">
                        private
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1  text-white flex items-center justify-center rounded-[7px]">
                        LM
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1  text-white flex items-center justify-center rounded-[7px]">
                        Invite
                    </p>
                </div>
                <div className="flex">
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1  text-white flex items-center justify-center rounded-[7px]">
                        Power-Ups
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1  text-white flex items-center justify-center rounded-[7px]">
                        Automation
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1  text-white flex items-center justify-center rounded-[7px]">
                        Filter
                    </p>
                    <p className="mr-3  bg-[rgba(228,228,231,0.2)] hover:bg-white/40 px-2 py-1  text-white flex items-center justify-center rounded-[7px]">
                        ... Show menu
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
