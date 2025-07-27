import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
    <footer className=" bg-green-300 flex items-end ">
      
    <h2 className="">© 2025 Mercator Technologies Ltd. All rights reserved.</h2>
    
    
    </footer>
    </>
  )
}

export default Footer