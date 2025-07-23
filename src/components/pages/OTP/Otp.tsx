import Header from "../../reuseables/Header/Header";
import Prybtn from "../../reuseables/Prybtn";
import Footer from "../../reuseables/Footer/Footer";
import SectionTitle from "../../reuseables/SectionTitle";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../../context/MyContext";

const Otp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const accountNumber = state;
  const { setAccountNumber } = useContext(MyContext)!;

  const handleSubmit = () => {
    navigate("/Card-View");
    setAccountNumber(accountNumber);
  };

  return (
    <>
      <div className="sm:h-screen  sm:justify-between flex flex-col ">
        <Header />

        <main className="  max-w-md md:w-[463px]  mx-auto items-center text-center mt-15 sm:mt-0 gap-4">
          <div className="flex flex-col items-center  gap-9 mx-auto">
            <SectionTitle
              h2="Secure Card Activation"
              p="Enter OTP sent to registered phone number."
            />

            <div className="text-start">
              <label htmlFor="otp" className="mt-10  text-gray-950 font-medium">
                One-Time Password {"{OTP}"}
              </label>
              <div className="flex items-center justify-center gap-2 sm:gap-3 my-4 flex-wrap">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <input
                    key={idx}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-12 h-12 sm:w-14 sm:h-14 text-lg text-center border border-gray-300 rounded-md shadow-md"
                    title="otp"
                  />
                ))}
              </div>
              <p className="w-fit">00:59</p>

              <div className=" flex flex-col items-center gap-4 mt-15">
                <Prybtn text="Continue" onClick={() => handleSubmit()} />
                <p className="text-gray-600">
                  Didn’t receive any OTP?{" "}
                  <span className="text-[#0062e1] font-semibold">
                    Click to resend
                  </span>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Otp;
