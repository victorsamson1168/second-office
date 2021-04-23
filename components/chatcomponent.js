import chatcomponentStyle from "../styles/chatcomponent.module.scss";
import Image from "next/image";
function chatcomponent() {
  return (
    <div className={chatcomponentStyle.container}>
      <div className={chatcomponentStyle.topHeadingContainer}>
        <div className={chatcomponentStyle.heading}>
          <p className={chatcomponentStyle.para}>You</p>
        </div>
        <div className={chatcomponentStyle.heading}>
          <p className={chatcomponentStyle.para}>Second Office</p>
        </div>
      </div>
      <div className={chatcomponentStyle.rowContainer}>
        <div className={chatcomponentStyle.chatcontainer}>
          <span>Decide the tech stack.</span>
        </div>
        <Image
          src="/ArrowChat.svg"
          layout="intrinsic"
          width={173}
          height={49}
          className={chatcomponentStyle.arro}
        ></Image>
      </div>
      <div className={chatcomponentStyle.rowContainer}>
        <div
          className={`${chatcomponentStyle.chatcontainer} ${chatcomponentStyle.floatRight}`}
        >
          <span>
            Sends you screened resumes from across India for you to interview.
            We do this until you find a great fit.
          </span>
        </div>
      </div>
      <div className={chatcomponentStyle.rowContainer}>
        <div className={chatcomponentStyle.chatcontainer}>
          <span>Work with your employees at your new Second Office.</span>
        </div>
      </div>
      <div className={chatcomponentStyle.rowContainer}>
        <div
          className={`${chatcomponentStyle.chatcontainer} ${chatcomponentStyle.floatRight}`}
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
