import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <footer
        className={
          pathname === "/"
            ? "flex items-end"
            : ""
           
        }
      >
        <h2 className="font-normal text-sm md:block hidden text-[#515154]">
          © 2025 Mercator Technologies Ltd. All rights reserved.
        </h2>
      </footer>
    </>
  );
};

export default Footer;
