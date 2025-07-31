import Header from "../../reuseables/Header/Header";
import Prybtn from "../../reuseables/Prybtn";
import Footer from "../../reuseables/Footer/Footer";
import SectionTitle from "../../reuseables/SectionTitle";
import Card1 from "../../../assets/Card 1.png";
import Card2 from "../../../assets/Card 2.png";
import Card3 from "../../../assets/Card 3.png";
import Card5 from "../../../assets/Card 5.png";
import Card6 from "../../../assets/Card 6.png";
import { GoDotFill } from "react-icons/go";
import Laptopsize from "./Modals/Modal";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useCard } from "../../../hooks/useCard";

const CardView = () => {
  const [closemodal, setCloseModal] = useState(true);
  const [pinStatus, setPinStatus] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const {
    vervePin,
    masterPoundsPin,
    platinumNairaPin,
    platinumUSDPin,
    masterUSDPin,
  } = useCard();

  const cards = [
    { id: "verve-naira", image: Card1 },
    { id: "master-pounds", image: Card2 },
    { id: "platinum-naira", image: Card3 },
    { id: "platinum-usd", image: Card5 },
    { id: "master-usd", image: Card6 },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const activeCardId = cards[activeSlide]?.id;

  // still update the current active slide

  return (
    <div className="px-4 sm:px-10 p-10 ">
      <Header />

      {/* Main fills remaining space without growing too much */}
      <div className=" flex flex-col items-center pt-10  lg:my-10 md:justify-center h-[calc(100vh-164px)] md:h-[calc(100vh-350px)]   mx-auto text-center ">
        <SectionTitle
          title="All Cards Linked"
          subtitle="Kindly select the card you will like to be activated"
        />

        <div className="items-center  mt-10 w-full   ">
          <div className="gd-carousel-wrapper max-w-md mx-auto  ">
            <Carousel
              responsive={responsive}
              beforeChange={(index) => {
                let newIndex = Math.min(index - 2, cards.length);
                newIndex = newIndex >= cards.length ? 0 : newIndex;
                newIndex = newIndex < 0 ? cards.length - 1 : newIndex;

                setActiveSlide(newIndex);
              }}
              showDots
              infinite
              swipeable
              keyBoardControl
              customTransition="all 0.5s"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              renderDotsOutside
              itemClass="px-4"
              className="gd-carousel"
            >
              {cards.map((card) => (
                <div key={card.id}>
                  <img
                    src={card.image}
                    alt={card.id}
                    className="w-full z-50 mb-1 rounded-3xl max-w-[360px] max-h-[229px] flex flex-col place-self-center"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="flex items-center justify-center gap-2 pt-6 lg:pt-14 text-center">
            <p className="text-[20px] text-[#1a314d] tracking-[-1] font-semibold ">
              {activeCardId === "verve-naira"
                ? "Verve Blue Naira Debit Card"
                : activeCardId === "master-pounds"
                ? "MasterCard GBP"
                : activeCardId === "platinum-naira"
                ? "MasterCard Platinum Naira"
                : activeCardId === "platinum-usd"
                ? "MasterCard Platinum USD"
                : activeCardId === "master-usd"
                ? "MasterCard Main Client USD"
                : null}
            </p>{" "}
            {(activeCardId === "verve-naira" && vervePin) ||
            (activeCardId === "master-pounds" && masterPoundsPin) ||
            (activeCardId === "platinum-naira" && platinumNairaPin) ||
            (activeCardId === "platinum-usd" && platinumUSDPin) ||
            (activeCardId === "master-usd" && masterUSDPin) ? (
              <p className="text-[13.5px] font-medium py-0.5 pl-1.5 pr-2 flex items-center bg-green-100 border border-green-200 rounded-full text-green-700 gap-1.5 ">
                <div className="">
                  <GoDotFill size={12} />
                </div>
                Active
              </p>
            ) : (
              <p className="text-[13.5px] gap-1 font-medium py-0.5 pl-1.5 pr-2 flex items-center bg-gray-100 border border-gray-200 rounded-full text-gray-700  ">
                <GoDotFill size={12} className="text-gray-500" />
                Inactive
              </p>
            )}
          </div>
        </div>

        <div className=" w-full px-5 flex flex-col items-center gap-4 mt-20 mx-auto">
          <Prybtn
            text="Activate Card"
            onClick={() => setCloseModal(false)}
            disabled={
              (activeCardId === "verve-naira" && vervePin) ||
              (activeCardId === "master-pounds" && masterPoundsPin) ||
              (activeCardId === "platinum-naira" && platinumNairaPin) ||
              (activeCardId === "platinum-usd" && platinumUSDPin) ||
              (activeCardId === "master-usd" && masterUSDPin)
                ? true
                : false
            }
          />
        </div>
      </div>

      <div className="">
        <Laptopsize
          activeCardId={activeCardId}
          closemodal={closemodal}
          setCloseModal={setCloseModal}
          pinStatus={pinStatus}
          setPinStatus={setPinStatus}
        />
      </div>
      {/* Footer (shrinks to content size) */}

      <Footer />
    </div>
  );
};

export default CardView;
