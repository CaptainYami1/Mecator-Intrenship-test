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
      <div className="px-4 sm:px-10 p-10 ">
       
        <Header />

        <main className="flex items-center justify-center h-[calc(100vh-184px)] sm:h-[calc(100vh-150px)] max-w-[800px] mx-auto ">
          <div className="flex flex-col items-center mx-auto">
            <img src={BlueCardBodyPics} alt="" className="mx-auto"/>

            <div className="my-17.5 text-center">
              <SectionTitle
                title="Secure Card Activation"
                subtitle="Activate your card and choose a secure PIN for your transactions"
                small = {false}
              />
            </div>

            <Prybtn
              text="Continue"
              onClick={() => navigate("/Account-Validation")}
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
