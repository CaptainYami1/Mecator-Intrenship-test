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
    <div className="h-screen  justify-between gap-10 flex flex-col m-10 ">
      <Header />

      <main className="flex flex-col items-center mx-auto text-center my-5 sm:my-0 ">
        <div className="flex flex-col items-center mb-30 w-full">
          <SectionTitle
            h2="Secure Card Activation"
            p="Please provide your Stanbic account number."
          />

          <div className="text-start w-full">
            <h2 className="mt-10">Account Number</h2>
            <input
              id="accountNumber"
              type="text"
              inputMode="numeric"
              className="border border-gray-300 rounded-md p-2 my-2 w-full"
              placeholder="10 digit NUBAN"
              value={accountInput}
              onChange={handleInputChange}
            />
            {accountInput.length === 10 && (
              <p className=" flex items-center gap-1.5 font-medium">
                <span className="text-green-500">
                  <IoCheckmarkCircleSharp />
                </span>{" "}
                MARCUS RASHFORD
              </p>
            )}
            <p
              className={
                accountInput.length === 10
                  ? "hidden"
                  : " text-red-500 font-medium"
              }
            >
              {errorMessage}
            </p>
          </div>
        </div>
        
          <Prybtn text="Continue" onClick={() => handleSubmit()} />
        
      </main>

      <Footer />
    </div>
  );
};

export default AccountValidation;
