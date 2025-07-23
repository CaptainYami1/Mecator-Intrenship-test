import BlueCardBodyPics from '../../../assets/1df75510-b096-4cc2-84c3-4f7c1a0ef128_removalai_preview 1.png'
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
    <footer className={pathname==="/OTP" || pathname==="/Account-Validation" ?" sm:flex  justify-between  w-full " : "hidden sm:flex"}>
    <h2 className="hidden sm:block text-sm font-400 content-end sm:w-full">© 2025 Mercator Technologies Ltd. All rights reserved.</h2>
    <div className={pathname==="/" ? "hidden sm:block w-full place-items-end" :"w-full place-items-end mt-40 sm:mt-0"}><img src={BlueCardBodyPics} alt="" className='w-[250px]'/></div>
    </footer>
    </>
  )
}

export default Footer