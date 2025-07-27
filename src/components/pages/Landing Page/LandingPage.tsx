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
      <div className="flex justify-between flex-col h-screen m-10 ">
       
        <Header />

        <main className="mx-auto text-center">
          <div className="inline-block ">
            <img src={BlueCardBodyPics} alt="" className=""/>

            <div className="my-12.5 ">
              <SectionTitle
                h2="Secure Card Activation"
                p="Activate your card and choose a secure PIN for your transactions"
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
