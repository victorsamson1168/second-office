import MainSectionBStyle from "../styles/MainSectionB.module.scss";
import ChatComponent from "../components/ChatComponent";
import Image from "next/image";
function MainSectionB() {
  return (
    <div className={MainSectionBStyle.mainContainer}>
      <div className="containerside">
        <div className={MainSectionBStyle.parentFlexContainer}>
          <div className={MainSectionBStyle.left}>
            <Image
              className={MainSectionBStyle.img}
              src="https://source.unsplash.com/400x400/?laptop"
              width={400}
              height={400}
              layout="intrinsic"
            ></Image>
          </div>
          <div className={MainSectionBStyle.right}>
            <h1 className={MainSectionBStyle.title}>
              A second office for companies and gain India provides{" "}
              <span className={MainSectionBStyle.highlighted}>
                access to 1.3 billion pool
              </span>{" "}
              of talent that you have full control and{" "}
              <span className={MainSectionBStyle.changeColor}>
                perfect integration
              </span>{" "}
              with your headquarters that 2x your software development for the
              best.
            </h1>
            <ChatComponent></ChatComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSectionB;
