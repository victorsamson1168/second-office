import SectioncStyle from "../styles/BlogSectionC.module.scss";
import Card from "./BlogCard";

const SectionC = () => {
  const CardArray = [
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
  ];

  const displayCard = () => {
    return CardArray.map((item) => {
      return item;
    });
  };

  return (
    <div className="containerside">
      <div className={SectioncStyle.centerContainer}>
        <div className={SectioncStyle.heightContainer}>{displayCard()}</div>
      </div>
    </div>
  );
};

export default SectionC;
