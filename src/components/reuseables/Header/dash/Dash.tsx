import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dash = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      <div className=" w-full">
        {pathname === "/" ? null : pathname === "/Account-Validation" ? (
          <div className="flex items-center gap-1">
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-[#0062e1]  cursor-pointer"></p>
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-gray-200  cursor-pointer"></p>
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-gray-200  cursor-pointer"></p>
          </div>
        ) : pathname === "/OTP" ? (
          <div className="flex items-center gap-1">
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-[#0062e1]  cursor-pointer"onClick={()=>navigate("/Account-Validation")}></p>
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-[#0062e1] cursor-pointer hover:scale-105 transition"></p>
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-gray-200  cursor-pointer"></p>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-[#0062e1]  cursor-pointer"></p>
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-[#0062e1] hover:scale-105 transition cursor-pointer " onClick={()=>navigate("/OTP")}></p>
            <p className="w-6.5 sm:w-15 h-1 rounded-2xl bg-[#0062e1]  cursor-pointer"></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dash;
