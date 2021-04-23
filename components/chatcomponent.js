import chatcomponentStyle from "../styles/chatcomponent.module.scss";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function chatcomponent() {
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className={chatcomponentStyle.container}>
      <div className={chatcomponentStyle.topHeadingContainer} data-aos="fade-down" data-aos-duration="700">
        <div className={chatcomponentStyle.heading}>
          <p className={chatcomponentStyle.para}>You</p>
        </div>
        <div className={chatcomponentStyle.heading}>
          <p className={chatcomponentStyle.para}>Second Office</p>
        </div>
      </div>
      <div className={chatcomponentStyle.rowContainer}>
        <div className={chatcomponentStyle.chatcontainer} data-aos="fade-down" data-aos-duration="1500">
          <span>Decide the tech stack.</span>
        </div>
        <Image
          src="/ArrowChat.svg"
          layout="intrinsic"
          width={173}
          height={49}
          className={chatcomponentStyle.arrow}
        ></Image>
      </div>
      <div className={chatcomponentStyle.rowContainer}>
        <div
          className={`${chatcomponentStyle.chatcontainer} ${chatcomponentStyle.floatRight}`}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span>
            Sends you screened resumes from across India for you to interview.
            We do this until you find a great fit.
          </span>
        </div>
      </div>
      <div className={chatcomponentStyle.rowContainer}>
        <div className={chatcomponentStyle.chatcontainer} data-aos="fade-down" data-aos-duration="1500">
          <span>Work with your employees at your new Second Office.</span>
        </div>
      </div>
      <div className={chatcomponentStyle.rowContainer}>
        <div
          className={`${chatcomponentStyle.chatcontainer} ${chatcomponentStyle.floatRight}`}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span>
            Takes care of employee attendance and basically all business
            overhead like: payroll, benefits, taxes, rent, equipment, local
            regulations via economies of scale and charges you a small monthly
            management fee. We make globalization accessible to all businesses.
          </span>
        </div>
      </div>
    </div>
  );
}

export default chatcomponent;
