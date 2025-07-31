import IbtcLogo from "../../../assets/image 1.png";
import ibtc from "../../../assets/Combined-Shape.png";
import UserShieldicon from "../../../assets/user-shield-01.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../context/MyContext";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import Dash from "./dash/Dash";

const Header = () => {
  const navigate = useNavigate();

  const { accountNumber } = useContext(MyContext)!;
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
   <header>
      <div className="sm:hidden">
        {pathname === "/Card-View" ? (<div className="w-max mx-auto md-hidden mb-7.5">
          <Dash />
        </div>
        ): null}

        <div
            
            className={
              accountNumber
                ? "justify-center sm:flex items-center gap-1.5   "
                : "justify-items-center sm:flex items-center gap-1.5 "
            }
          >
            <div
              className={
                pathname === "/Card-View"
                  ? "sm:flex justify-center mb-7.5  hidden"
                  : "flex items-center mb-[35px] sm:hidden w-full  justify-center  "
              }
            >
              <button
                onClick={() => navigate(-1)}
                className={
                  pathname === "/" || pathname === "/Card-View" ? "hidden " : ""
                }
                title="Go back"
              >
                <MdKeyboardBackspace size={24} />
              </button>
              <div
                className={
                  pathname === "/Card-View" ? " flex justify-center w-full mb-7.5 md:hidden " : "mx-auto"
                }
              >
                <Dash />
              </div>
            </div>

            </div>
            </div>
        <div className="flex justify-between items-center w-full mx-auto">
          
            <div onClick={() => navigate("/")} className={accountNumber ? "flex items-center sm:w-[256px] w-full":"flex items-center sm:w-[256px] w-full justify-center"}>
            <div className={pathname === "/" ? "flex flex-col justify-center sm:flex-row items-center" :"flex items-center"}>
              <img src={IbtcLogo} alt="" className=" mx-auto" />

              <div className={pathname === "/"? "" :"hidden sm:block max-w-full h-auto"}>

                <img src={ibtc} alt="" className={accountNumber ? "hidden sm:block" : ""} />
                </div>
              </div>
            </div>
          

          <div className="hidden lg:block ">
            <Dash />
          </div>

          <div>
            {accountNumber ? (
              <div className="flex items-center gap-2  justify-end w-[256px]">
                <FaUserCircle size={35} />
                <div className="text-[#1a314d]">
                  <p className="text-[13px] tracking-[-0.6px] sm:text-[16px] font-semibold ">{accountNumber}</p>
                  <p className="text-[10px] sm:text-[12px] ">Marcus Rashford</p>
                </div>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2 text-gray-900 w-[263px] justify-end">
                <img src={UserShieldicon} alt="" />
                <span className=" text-sm font-semibold">
                  Secure Web Portal
                </span>
              </div>
            )}
          </div>
          
        </div>
      </header>
    </>
  );
};

export default Header;
