/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = ({ ping = true }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const [currentLocation, setCurrentLocation] = useState("");

  const [openChevron, setOpenChevron] = useState(false);

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = {
      year: "numeric",
      month: "long",
      weekday: "long",
    };

    const formattedDate = today.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const pathname = location.pathname.replace("/dashboard/", "");
    const somethingHere = pathname.split("/")[0];
    const capitalizedSomethingHere =
      somethingHere.charAt(0).toUpperCase() + somethingHere.slice(1);
    setCurrentLocation(capitalizedSomethingHere);
  }, [location]);

  return (
    <div className="sticky right-0 w-[99%] z-20 top-0 bg-white mr-6 py-7 px-6 mx-4  flex flex-col sm:flex-row justify-between items-start md:items-center font-karla">
      <div className="text-lg md:text-xl lg:pl-0 font-semibold text-gray font-poppins flex items-center gap-x-3">
        WELCOME ADMIN
        <span>👋</span>
      </div>
      <div className="flex items-center text-base font-medium text-primary">
        {currentDate}
      </div>
      <div className="flex justify-end text-xl items-center gap-x-3 cursor-pointer">
        <AiOutlineLogout className="text-center text-xl" />
        <p className="text-primary font-medium text-base"> Log Out</p>
      </div>
    </div>
  );
};

export default TopBar;
