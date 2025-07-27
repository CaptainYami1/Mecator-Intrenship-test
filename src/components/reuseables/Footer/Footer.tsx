import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <footer
        className={pathname ==="/"? "flex items-end":pathname ==="/Card-View"? "flex items-end h-[13.75rem] bg-none sm:bg-[url('/src/assets/1df75510-b096-4cc2-84c3-4f7c1a0ef128_removalai_preview%201.png')] bg-no-repeat bg-right bg-contain" :"flex items-end h-[26.75rem] sm:h-[13.75rem] bg-[url('/src/assets/1df75510-b096-4cc2-84c3-4f7c1a0ef128_removalai_preview%201.png')] bg-no-repeat bg-right bg-contain"}>
        <h2 className="font-normal text-sm md:block hidden">
          © 2025 Mercator Technologies Ltd. All rights reserved.
        </h2>
      </footer>
    </>
  );
};

export default Footer;
