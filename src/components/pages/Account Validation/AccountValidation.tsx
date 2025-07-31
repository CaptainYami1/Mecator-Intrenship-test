import Header from "../../reuseables/Header/Header";
import Prybtn from "../../reuseables/Prybtn";
import Footer from "../../reuseables/Footer/Footer";
import SectionTitle from "../../reuseables/SectionTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const AccountValidation = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [accountInput, setAccountInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setAccountInput(value);
  };

  const handleSubmit = () => {
    if (accountInput.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit account number.");
      return;
    }
    setErrorMessage("");
    // You can use context here if needed, but do not redeclare accountNumber

    navigate("/OTP", { state: accountInput });
  };
  return (
    <div style={{ backgroundPosition: 'right 40px bottom 40px' }} className="p-10 px-4 sm:px-10 m-auto  max-w-[1440] bg-[url('/src/assets/1df75510-b096-4cc2-84c3-4f7c1a0ef128_removalai_preview%201.png')] bg-no-repeat bg-size-[220px] bg-position-[bottom_right_40px] ">
      <Header />

      <main className="flex flex-col items-center pt-[20px] sm:pt-0 sm:justify-center h-[calc(100vh-189px)] sm:h-[calc(100vh-150px)] max-w-[360px] mx-auto text-center   ">
        <div className="flex flex-col items-center mb-[75px] sm:mb-24.5 w-full ">
          <SectionTitle
            title="Secure Card Activation"
            subtitle="Please provide your Stanbic account number."
          />

          <div className="text-start w-full flex flex-col gap-2">
            <label htmlFor="accountNumber" className="mt-10 text-sm text-gray-950 inline-block">Account Number</label>
            <input
              id="accountNumber"
              type="text"
              inputMode="numeric"
              className="border border-gray-300 bg-white rounded-lg p-3 text-[13.5px] w-full outline-none"
              placeholder="10 digit NUBAN"
              value={accountInput}
              onChange={handleInputChange}
            />
            {accountInput.length === 10 ? (
              <p className=" flex items-center gap-1.5 text-[11.5px] font-light h-3.5">
                <span className="text-green-500">
                  <IoCheckmarkCircleSharp />
                </span>{" "}
                MARCUS RASHFORD
              </p>
            ):<p className=" text-red-500 text-[11.5px] font-light h-3.5">
              {errorMessage}
            </p> }
           
          </div>
        </div>
        
          <Prybtn text="Continue" onClick={() => handleSubmit()} />
        
      </main>

      <Footer />
    </div>
  );
};

export default AccountValidation;
