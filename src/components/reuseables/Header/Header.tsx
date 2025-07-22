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
      <div className="">
        <header className="flex justify-between items-center w-full mx-auto">
          <div
            onClick={() => navigate("/")}
            className={
              accountNumber
                ? "justify-center sm:flex items-center gap-1.5 w-full sm:w-[263px]"
                : "justify-items-center sm:flex items-center gap-1.5 w-full sm:w-[263px]"
            }
          >
            <div
              className={
                pathname === "/Card-View"
                  ? "flex justify-center w-max"
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
                  pathname === "/Card-View" ? "w-full mx-auto mb-3 sm:hidden " : "mx-auto"
                }
              >
                <Dash />
              </div>
            </div>
            <div className="flex items-center">
              <img src={IbtcLogo} alt="" className="" />

              <div className="hidden sm:block max-w-full h-auto ">
                <img src={ibtc} alt="" />
              </div>
            </div>
          </div>

          <div className="hidden md:block ">
            <Dash />
          </div>

          <div>
            {accountNumber ? (
              <div className="flex items-center gap-2 w-[263px] justify-end">
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
      </div>
    </>
  );
};

export default Header;
