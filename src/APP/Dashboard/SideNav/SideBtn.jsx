import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SideBtn = ({
  children,
  onClickFn = () => {},
  link = "/dashboard",
  shrink = true,
  label = "Label",
}) => {
  const [highlight, setHighlight] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathAfterDashboard = location.pathname.replace("/dashboard", "");
    if (pathAfterDashboard.length > 1) {
      if (link.replace("/dashboard", "").length > 1)
        setHighlight(
          pathAfterDashboard.includes(link.replace("/dashboard", ""))
        );
      else setHighlight(link.replace("/dashboard", "").length > 1);
      return;
    }
    setHighlight(link === "/dashboard");
  }, [location]);

  return (
    <div
      onClick={() => {
        onClickFn();
        navigate(link);
      }}
      className={`flex items-center gap-3 text-base font-medium font-poppins w-full  xl:w-[216px] 
            py-3 pl-4 rounded-[30px] cursor-pointer
            ${highlight ? "bg-primary text-white" : "text-primary"}
            `}
    >
      {children}
      <p className={shrink ? "hidden xl:block" : ""}>{label}</p>
    </div>
  );
};

export default SideBtn;
