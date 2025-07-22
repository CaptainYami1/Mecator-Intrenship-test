import { createContext, useState,useEffect } from "react";

// Define the context type
type MyContextType = {
  accountNumber: string;
  setAccountNumber: (number: string) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);
const MyProvider = (props: any) => {
     const [accountNumber, setAccountNumber] = useState("");
     useEffect(() => {
   
  }, [accountNumber]);
  return <MyContext.Provider value={{accountNumber, setAccountNumber}}>{props.children}</MyContext.Provider>;
};

export { MyProvider, MyContext };
