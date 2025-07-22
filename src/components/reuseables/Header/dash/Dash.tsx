
import { useLocation } from 'react-router-dom';

const Dash = () => {
    const location = useLocation();
    const pathname = location.pathname;
  return (
    <div>
         <div className=" w-full">
          {pathname === "/" ? null : pathname === "/Account-Validation" ? (
            <div className="flex items-center gap-1">
              <p className="w-15 h-1 bg-blue-700 rounded-[5px]"></p>
              <p className="w-15 h-1 bg-gray-200 rounded-[5px]"></p>
              <p className="w-15 h-1 bg-gray-200 rounded-[5px]"></p>
            </div>
          ) : pathname === "/OTP" ? (
            <div className="flex items-center gap-1">
              <p className="w-15 h-1 bg-blue-700 rounded-[5px]"></p>
              <p className="w-15 h-1 bg-blue-700 rounded-[5px]"></p>
              <p className="w-15 h-1 bg-gray-200 rounded-[5px]"></p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <p className="w-15 h-1 bg-blue-700 rounded-[5px]"></p>
              <p className="w-15 h-1 bg-blue-700 rounded-[5px]"></p>
              <p className="w-15 h-1 bg-blue-700 rounded-[5px]"></p>
            </div>
          )}
        </div>
    </div>
  )
}

export default Dash