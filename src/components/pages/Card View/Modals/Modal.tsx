import { IoMdClose } from "react-icons/io";
import Prybtn from "../../../reuseables/Prybtn";
import { useRef, useState } from "react";

import checkmark from "../../../../assets/ChatGPT Image Jul 21, 2025, 09_01_49 PM.png";
import Buttons from "./buttons";

const Modal = ({
  closemodal,
  setCloseModal,
  pinStatus,
  setPinStatus,
  activeCardId,
}: any) => {
  const [error, setError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [pin1Digits, setPin1Digits] = useState<string[]>([]);
  const [pin2Digits, setPin2Digits] = useState<string[]>([]);

  const pin1Ref = useRef<HTMLInputElement>(null);
  const pin2Ref = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    e.target.value = value;
  };

  const handleSubmit = () => {
    // Handle the submit logic here

    const pin1 = pin1Ref.current?.value || "";
    const pin2 = pin2Ref.current?.value || "";
    if (pin1 !== pin2) {
      setError("PINs do not match");
      return;
    } else if (pin1.length !== 4 || pin2.length !== 4) {
      setError("PIN must be 4 digits");
      return;
    }
    setError("");
    if (activeCardId === "verve-naira") {
      sessionStorage.setItem("verve-pin", pin1);
    } else if (activeCardId === "master-pounds") {
      sessionStorage.setItem("master-pounds-pin", pin1);
    } else if (activeCardId === "platinum-naira") {
      sessionStorage.setItem("platinum-naira-pin", pin1);
    } else if (activeCardId === "platinum-usd") {
      sessionStorage.setItem("platinum-usd-pin", pin1);
    } else if (activeCardId === "master-usd") {
      sessionStorage.setItem("master-usd-pin", pin1);
    }
    setPinStatus(true);
  };

  const handleButtonClick = (value: string) => {
    if (value === "clear") {
      setMobileError("");
      setPin1Digits([]);
      setPin2Digits([]);
      return;
    }

    if (value === "del") {
      setMobileError("");
      if (pin2Digits.length > 0) {
        setPin2Digits((prev) => prev.slice(0, -1));
      } else if (pin1Digits.length > 0) {
        setPin1Digits((prev) => prev.slice(0, -1));
      }
      return;
    }

    setPin1Digits((prev) => [...prev, value]);

    if (pin1Digits.length < 4) {
      const newPin1 = [...pin1Digits, value];
      setPin1Digits(newPin1);
    } else if (pin2Digits.length < 4) {
      const newPin2 = [...pin2Digits, value];
      setPin2Digits(newPin2);

      // After setting pin2, check for full match
      const pin1 = pin1Digits.slice(0, 4).join("");
      const pin2 = [...pin2Digits, value].join("");

      if (pin2.length === 4) {
        if (pin1 !== pin2) {
          setTimeout(() => {
            setMobileError("PINs do not match");
            setPin1Digits([]);
            setPin2Digits([]);
          }, 300);

          return;
        } else {
          setMobileError(""); // Clear any previous error

          // Save to sessionStorage
          const storageKeyMap: { [key: string]: string } = {
            "verve-naira": "verve-pin",
            "master-pounds": "master-pounds-pin",
            "platinum-naira": "platinum-naira-pin",
            "platinum-usd": "platinum-usd-pin",
            "master-usd": "master-usd-pin",
          };

          const key = storageKeyMap[activeCardId];
          if (key) sessionStorage.setItem(key, pin1);

          setTimeout(() => setPinStatus(true), 300);
          setPin1Digits([]);
          setPin2Digits([]);
        }
      }
    }
  };
  return (
    <>
      {pinStatus ? (
        <div
          className={
            closemodal
              ? "hidden"
              : "fixed justify-center content-end w-auto  top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-xs bg-gray-500/30 sm:content-center"
          }
        >
          <div className="bg-white items-center justify-center rounded-t-2xl sm:rounded-lg shadow-lg h-[66%] sm:h-auto p-6 sm:max-w-md mx-auto flex flex-col">
            <img src={checkmark} alt="" className="w-[200px] height-[200px]" />
            <div className="text-center">
              <h2 className="text-lg font-semibold">Activation Successful!</h2>
              <p className="text-sm font-light text-[#475467] pt-3.5 px-13 mb-[74px]">
                Your card has been successfully activated and is now ready for
                transactions.
              </p>
            </div>

            <Prybtn
              text="Okay"
              onClick={() => {
                setCloseModal(true);
                setPinStatus(false);
              }}
            />
          </div>
        </div>
      ) : (
        <div
          className={
            closemodal
              ? "hidden"
              : "fixed justify-center w-auto  top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-xs bg-gray-500/30 content-center"
          }
        >
          <div className="hidden bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto sm:flex flex-col gap-6 close">
            <div className="flex justify-between items-center ">
              <h2 className="text-2xl font-medium tracking-[-0.6]">Create PIN</h2>
              <button
                title="close"
                className="p-1.5  border-[#dee2e9] border-[0.7px] rounded-md"
                onClick={() => setCloseModal(true)}
              >
                <IoMdClose />
              </button>
            </div>

            <div className="">
              <label htmlFor="create-pin" className="font-medium tracking-[-0.6%] text-sm">
                Choose 4-digit PIN
              </label>
              <input
                type="password"
                ref={pin1Ref}
                className="w-full text-sm mt-1 px-4 py-[13px] border border-[#ced5de] rounded-md outline-none "
                placeholder="Enter 4-digit PIN"
                maxLength={4}
                onChange={handleInputChange}
              />
            </div>

            <div className="">
              <label htmlFor="confirm-pin" className="font-medium text-sm tracking-[-0.6%]">
                Confirm 4-digit PIN
              </label>
              <input
                type="password"
                ref={pin2Ref}
                className="w-full text-sm mt-1 px-4 py-[13px] border border-[#ced5de] rounded-md outline-none "
                placeholder="Enter 4-digit PIN"
                maxLength={4}
                onChange={handleInputChange}
              />
              <p className="text-red-500 mt-2">{error}</p>
            </div>
            <Prybtn text="Confirm" onClick={handleSubmit} className="max-w-none"/>
          </div>

          {/*Mobile */}
          <div className="fixed justify-center content-end w-auto  top-0 left-0 right-0 bottom-0 z-50 sm:hidden  ">
            <div className="bg-white  content-end rounded-t-2xl   py-4  mx-auto flex flex-col ">
              <button
                title="close"
                className="p-1.5 w-fit mx-10 mb-4 border border-neutral-100 self-end rounded-md"
                onClick={() => {
                  setCloseModal(true);
                  setPin1Digits([]);
                  setPin2Digits([]);
                  
                }}
              >
                <IoMdClose />
              </button>
              <div className="flex flex-col items-center">
                <div className="text-center">
                  <h2 className="mb-12.5 font-medium text-xl">
                    {pin1Digits.length < 4 ? "Create PIN" : "Confirm PIN"}
                  </h2>
                  <div className="mb-15">
                    <p className="font-medium text-sm mb-3">
                      {pin1Digits.length < 4 ? "Choose" : "Confirm"} 4-digit PIN
                    </p>

                    {pin1Digits.length < 4 ? (
                      <div className="bg-[#f5f5f5] p-4 flex items-center gap-6 rounded-full">
                        <span
                          className={
                            pin1Digits.length >= 1
                              ? "w-4 h-4 bg-black rounded-full"
                              : "w-4 h-4 bg-[#c2c3c9] rounded-full"
                          }
                        ></span>
                        <span
                          className={
                            pin1Digits.length >= 2
                              ? "w-4 h-4 bg-black rounded-full"
                              : "w-4 h-4 bg-[#c2c3c9] rounded-full"
                          }
                        ></span>
                        <span
                          className={
                            pin1Digits.length >= 3
                              ? "w-4 h-4 bg-black rounded-full"
                              : "w-4 h-4 bg-[#c2c3c9] rounded-full"
                          }
                        ></span>
                        <span
                          className={
                            pin1Digits.length >= 4
                              ? "w-4 h-4 bg-black rounded-full"
                              : "w-4 h-4 bg-[#c2c3c9] rounded-full"
                          }
                        ></span>
                      </div>
                    ) : (
                      <div className="bg-[#f5f5f5] p-4 flex items-center gap-6 rounded-full">
                        <span
                          className={
                            pin2Digits.length >= 1
                              ? "w-4 h-4 bg-black rounded-full"
                              : "w-4 h-4 bg-[#c2c3c9] rounded-full"
                          }
                        ></span>
                        <span
                          className={
                            pin2Digits.length >= 2
                              ? "w-4 h-4 bg-black rounded-full"
                              : "w-4 h-4 bg-[#c2c3c9] rounded-full"
                          }
                        ></span>
                        <span
                          className={
                            pin2Digits.length >= 3
                              ? "w-4 h-4 bg-black rounded-full"
                              : "w-4 h-4 bg-[#c2c3c9] rounded-full"
                          }
                        ></span>
                        <span
                          className={
                            pin2Digits.length >= 4
                              ? "w-4 h-4 bg-black rounded-full"
                              : "w-4 h-4 bg-[#c2c3c9] rounded-full"
                          }
                        ></span>
                      </div>
                    )}
                    <p className="text-red-500">{mobileError}</p>
                  </div>
                </div>
                <Buttons onClick={handleButtonClick} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
