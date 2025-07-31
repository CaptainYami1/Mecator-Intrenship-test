import Header from "../../reuseables/Header/Header";
import Prybtn from "../../reuseables/Prybtn";
import Footer from "../../reuseables/Footer/Footer";
import SectionTitle from "../../reuseables/SectionTitle";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect, useState } from "react";
import { MyContext } from "../../../context/MyContext";

const Otp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const accountNumber = state;
  const { setAccountNumber } = useContext(MyContext)!;

  const[error, setError] = useState("")
const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
const handleSubmit = () => {
  const otp = inputRefs.current.map((input) => input?.value).join("");
  if (otp.length !== 6) {
    setError("Please enter the full OTP and try again.");
    return;
  }

  setAccountNumber(accountNumber);
  navigate("/Card-View");
};


const [timeLeft, setTimeLeft] = useState(59);

useEffect(() => {
  const interval = setInterval(() => {
    setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
  }, 1000);
  return () => clearInterval(interval);
}, []);
const handleResend = () => {
  setTimeLeft(60); // reset to 60 seconds or whatever value you use
  setError(""); // clear any error
  // Add any resend OTP API call here if needed
};
  return (
    <>
      <div className=" p-10 px-4 sm:px-10">
        <Header />

        <main className=" flex flex-col items-center pt-[20px] sm:pt-0 sm:justify-center h-[calc(100vh-324px)] sm:h-[calc(100vh-350px)] mx-auto text-center max-w-120 sm:pb-0 ">
          <div className="flex flex-col items-center  gap-9 ">
            <SectionTitle
              title="Secure Card Activation"
              subtitle="Enter OTP sent to registered phone number."
            />

            <div className="text-start w-full ">
              <label htmlFor="otp" className="mt-10  text-gray-950 text-sm font-semibold tracking-[-1]" >
                One-Time Password {"{OTP}"}
              </label>
              <div className="grid grid-cols-6 my-2  gap-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <input
                    key={idx}
                    type="tel"
                    maxLength={1}
                    className="max-w-12 w-full aspect-square text-lg text-center border border-gray-300 outline-none rounded-md shadow-otp"
                    title="otp"
                     pattern="[0-9]*"
                    ref={(el) => { inputRefs.current[idx] = el; }}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d$/.test(value) && idx < 5) {
                        inputRefs.current[idx + 1]?.focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !e.currentTarget.value &&
                        idx > 0
                      ) {
                        inputRefs.current[idx - 1]?.focus();
                      }
                    }}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-[14.5px] tracking-[-0.6]">{`00:${timeLeft.toString().padStart(2, "0")}`}</p>
              <p className="text-red-500 h-4 text-[14.5px] tracking-[-0.6]">{error}</p>

              <div className=" flex flex-col items-center gap-4 pt-[70px] sm:pt-21">
                <Prybtn text="Continue" onClick={() => handleSubmit()} />
                <p className="text-gray-600 tracking-[-0.6] text-[14.5px]">
                  Didn’t receive any OTP?{" "}
                  <span className="text-[#0062e1] font-semibold cursor-pointer hover:text-blue-400" onClick={handleResend}>
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
