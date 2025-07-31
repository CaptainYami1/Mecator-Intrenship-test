import { useNavigate } from "react-router-dom";
import Header from "../../reuseables/Header/Header";
import BlueCardBodyPics from "../../../assets/1df75510-b096-4cc2-84c3-4f7c1a0ef128_removalai_preview 1.png";
import Prybtn from "../../reuseables/Prybtn";
import Footer from "../../reuseables/Footer/Footer";
import SectionTitle from "../../reuseables/SectionTitle";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 sm:px-10 p-5 m-auto w-full max-w-[1440px]">
       
        <Header />

        <main className="flex items-center mt-[52px] max-h-[845px]  sm:max-h-none sm:mt-0 sm:justify-center h-[calc(100vh-245px)]  sm:h-[calc(100vh-150px)] mx-auto ">
          <div className="flex flex-col items-center mx-auto h-full ">
            <img src={BlueCardBodyPics} alt="" className="mx-auto max-w-[275px] w-full sm:max-w-none"/>

            <div className="my-17.5 text-center ">
              <SectionTitle
              
                title="Secure Card Activation"
                subtitle="Activate your card and choose a secure PIN for your transactions"
                small = {false}
              />
            </div>

            <Prybtn
              text="Continue"
              onClick={() => navigate("/Account-Validation")}
              className="mt-auto sm:mt-0"
            />
            
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
