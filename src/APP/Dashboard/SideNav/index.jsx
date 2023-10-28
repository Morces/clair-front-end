import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import SideBtn from "./SideBtn";

import Logo from "../../assets/logo.jpg";

import { GrClose, GrServices } from "react-icons/gr";
import { BiBarChartSquare } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { PiGearSixFill } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";

const SideNav = () => {
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="">
      <GiHamburgerMenu
        onClick={() => setNavOpen(!navOpen)}
        className={`ham p-3 h-[90%] w-fit bg-white rounded text-black absolute lg:hidden text-3xl z-40 top-3 left-4 ${
          navOpen && "-left-16"
        } ease-in-out duration-200`}
      />

      <GrClose
        onClick={() => setNavOpen(!navOpen)}
        className={`ham p-3 h-fit w-fit bg-white rounded text-black absolute opacity-100 lg:hidden text-3xl z-40 top-3  ${
          !navOpen ? "-left-16" : "left-4"
        } duration-200`}
      />

      <div
        className={`
      ${navOpen ? "left-[0]" : "-left-[300px]"}
      cursor-pointer absolute z-30 min-w-[210px] px-5 bg-white 
      lg:sticky top-0 h-screen overflow-x-hidden overflow-y-hidden scroll-hidden 
      flex flex-col gap-3 ease-out duration-200`}
      >
        <div className="w-full sticky top-0 bg-white pb-1 pt-8 flex justify-center items-center">
          <img
            onClick={() => navigate("/dashboard")}
            src={Logo}
            alt=""
            className="w-[150px]"
          />
        </div>

        <div className="h-full flex flex-col gap-3">
          <SideBtn
            shrink={false}
            link="/dashboard"
            onClickFn={() => setNavOpen(false)}
            label="Dashboard"
          >
            <LuLayoutDashboard className="text-2xl" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/microservices"
            onClickFn={() => setNavOpen(false)}
            label="MicroServices"
          >
            <PiGearSixFill className="text-2xl" />
          </SideBtn>

          <SideBtn
            shrink={false}
            link="/profile"
            onClickFn={() => setNavOpen(false)}
            label="Profile"
          >
            <FiUser className="text-2xl" />
          </SideBtn>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
