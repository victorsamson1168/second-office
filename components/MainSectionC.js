import MainSectionCStyle from "../styles/MainSectionC.module.scss";
// import India from "../assests/India.svg";
import RollingCard from "../components/RollingNoCard";
import Testimonial from "../components/Testimonial";
import DeveloperCard from "../components/DeveloperCard";
import Image from "next/image"
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const MainSectionC=()=> {
const developerCards=[<DeveloperCard></DeveloperCard>,<DeveloperCard></DeveloperCard>,<DeveloperCard></DeveloperCard>,<DeveloperCard></DeveloperCard>,<DeveloperCard></DeveloperCard>];

const displayDeveloperCard=()=>{
  return(developerCards.map((card)=>
  {
    return(card);
  }))
}

useEffect(() => {
  AOS.init({
    duration:1500
  });
}, [])

  return (
    <div className={MainSectionCStyle.parentContainer}>
      <div className="containerside">
        <div className={MainSectionCStyle.flexContainer}>
          <h2 className={MainSectionCStyle.heading}>
            Microsoft, Amazon & Citibank speedrun software development from
            their satellite offices in India. Follow suit.
          </h2>
          <Image src="/India.svg" layout="intrinsic" height={400} width={367} className={MainSectionCStyle.indiaLogo} />
          <div className={MainSectionCStyle.rollingCardContainer}>
            <RollingCard></RollingCard>
            <RollingCard></RollingCard>
          </div>
          <Testimonial></Testimonial>
          <div className={MainSectionCStyle.mockUpContainer}>
            <div className={MainSectionCStyle.mockUpHeading} data-aos="fade-right">
              <h1 className={MainSectionCStyle.mockUpTitle}>Access to 40,000+ Top notch talent.</h1>
              <p className={MainSectionCStyle.mockUpSubTitle}>
                We operate one of the top job portals in India. That’s why we
                have access to top-notch engineering talent.
              </p>
            </div>
            <Image src="/PhoneMockup.svg" layout="intrinsic" width={344} height={587} className={MainSectionCStyle.mockup}></Image>
          </div>

          
        </div>
        
      </div>
      <div className={MainSectionCStyle.developerCardContainer}>
          {displayDeveloperCard()}        
        </div>
    </div>
  );
}


export default MainSectionC;
