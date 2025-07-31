import { twMerge } from "tailwind-merge";

const Prybtn = ({onClick, disabled, className, text}:any) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={twMerge("extra max-w-[360px] bg-[#0062e1] hover:bg-blue-400 text-white font-semibold w-full py-[16px] px-4 rounded-md text-md", className, 
          disabled && "bg-blue-300 text-white font-semibold w-full py-[16px] px-4 rounded-lg text-md"
            )}
      >
        {text}
      </button>
    </>
  );
};

export default Prybtn;
