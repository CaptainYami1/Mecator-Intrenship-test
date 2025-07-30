import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";


const SectionTitle = ({ title, subtitle, small = true }: any) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={pathname === "/" ? "" : "min-w-[251px]"}>
      <h2 className={twMerge("text-[28px] font-semibold", small && "text-[24px] tracking-[-1px]")}>{title}</h2>
      <p className={twMerge("text-[18px] ", small && "text-[15px] tracking-[-1px]")}>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
