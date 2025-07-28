import { useLocation } from "react-router-dom";

const SectionTitle = (props:any) => {

  const location = useLocation();
    const pathname = location.pathname;

  return (
    <div className={pathname === "/" ? "" : "min-w-[251px] px-11"}>
        <h2 className="text-[24px] font-semibold">{props.h2}</h2>
          <p className="text-[15px]">
            {props.p}
          </p>
    </div>
  )
}

export default SectionTitle