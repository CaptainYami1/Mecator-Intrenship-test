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
   
      <div className="sm:hidden">
        {pathname === "/Card-View" ? (<div className="w-max mx-auto md-hidden mb-3">
          <Dash />
        </div>
        ): null}

        <div
            
            className={
              accountNumber
                ? "justify-center sm:flex items-center gap-1.5   "
                : "justify-items-center sm:flex items-center gap-1.5 w- "
            }
          >
            <div
              className={
                pathname === "/Card-View"
                  ? "flex justify-center mb-3  hidden"
                  : "flex items-center mb-3 sm:hidden w-full  justify-center  "
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
                  pathname === "/Card-View" ? " flex justify-center w-full mb-3 md:hidden " : "mx-auto"
                }
              >
                <Dash />
              </div>
            </div>

            </div>
            </div>
        <header className="flex justify-between items-center w-full mt-10 sm:mt-0 mx-auto">
          
            <div onClick={() => navigate("/")} className={accountNumber? "flex items-center sm:w-[256px] w-full":"flex items-center sm:w-[256px] w-full justify-center"}>
              <img src={IbtcLogo} alt="" className="" />

              <div className="hidden sm:block max-w-fnull h-auto ">
                <img src={ibtc} alt="" />
              </div>
            </div>
          

          <div className="hidden lg:block ">
            <Dash />
          </div>

          <div>
            {accountNumber ? (
              <div className="flex items-center gap-2  justify-end w-[256px]">
                <FaUserCircle size={35} />
                <div className="">
                  <p className="text-[16px] font-semibold">{accountNumber}</p>
                  <p className="text-[12px] ">Marcus Rashford</p>
                </div>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2 w-[263px] justify-end">
                <img src={UserShieldicon} alt="" />
                <span className=" text-sm font-semibold">
                  Secure Web Portal
                </span>
              </div>
            )}
          </div>
          
        </header>
      
    </>
  );
};

export default Header;
