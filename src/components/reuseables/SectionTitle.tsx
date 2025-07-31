
import { twMerge } from "tailwind-merge";


const SectionTitle = ({ title, subtitle, small = true }: any) => {
  
  

  return (
    <div className= "max-w-[251px] sm:max-w-none flex flex-col items-center gap-4 sm:gap-0">
      <h2 className={twMerge("sm:text-[28px] text-[18px] leading-[100%] sm:leading-normal text-[#1a314d] tracking-[-1px] font-semibold", small && "text-[24px] tracking-[-1px]")}>{title}</h2>
      <p className={twMerge("text-[14px] sm:text-[18px] text-[#1a314d] tracking-[-1px]", small && "text-[15px] font-medium tracking-[-1px]")}>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
