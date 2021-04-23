import RollingStyle from "../styles/RollingCard.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";



function RollingNoCard() {

  useEffect(() => {
    AOS.init({
      duration:1500
    });
  }, [])

  return (
    <div className={RollingStyle.cardContainer} data-aos="fade-down">
      <h2 className={RollingStyle.innerText}>
        You get full control so that everything
        <span className={RollingStyle.number}> 40,000 <br/></span>
        small management fee.
      </h2>
    </div>
  );
}

export default RollingNoCard;
