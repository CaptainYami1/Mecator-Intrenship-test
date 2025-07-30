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
      <div className=" p-10 ">
        <Header />

        <main className=" flex flex-col justify-center items-center h-[calc(100vh-350px)] mx-auto text-center max-w-120 sm:pb-0 ">
          <div className="flex flex-col items-center  gap-9 ">
            <SectionTitle
              h2="Secure Card Activation"
              p="Enter OTP sent to registered phone number."
            />

            <div className="text-start w-full ">
              <label htmlFor="otp" className="mt-10  text-gray-950 font-medium">
                One-Time Password {"{OTP}"}
              </label>
              <div className="grid grid-cols-6 my-2  gap-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <input
                    key={idx}
                    type="tel"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-12 aspect-square text-lg text-center border border-gray-300 rounded-md shadow-md"
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
              <p className="w-fit">{`00:${timeLeft.toString().padStart(2, "0")}`}</p>
              <p className="text-red-500 h-4">{error}</p>

              <div className=" flex flex-col items-center gap-4 pt-9 sm:pt-24">
                <Prybtn text="Continue" onClick={() => handleSubmit()} />
                <p className="text-gray-600">
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
