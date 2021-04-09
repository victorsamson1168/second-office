import Adv from "../styles/Advertisement.module.scss";

const Advertisement = (props) => {
  return (
      <div className={Adv.container}>
          {props.image}
      </div>
  );
};
export default Advertisement;
