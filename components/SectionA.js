import { Button } from "@material-ui/core";
import Sec from "../styles/SectionA.module.scss";
import Advertisment from "./Advertisement";
import Kinfolk from "../assests/company/Kinfolk.svg";
import Citibank from "../assests/company/citibank.svg";

const SectionA = () => {
  let companies = [
    <Citibank />,
    <Kinfolk />,
    <Citibank />,
    <Kinfolk />,
    <Kinfolk />,
    
    
  ];
/**
 * 
 * @returns returns the list of company components from the companies array
 */
  let returnComonentList = () => {
    return companies.map((comp) => <Advertisment image={comp} />);
  };
  return (
    <>
      <div className="containerside">
        <div className={Sec.heightContainer}>
          <div className={Sec.subContainer}>
            <div className={Sec.left}>
              <h1 className={"title " + Sec.titleLocal}>
                Microsoft, Amazon & Citibank speedrun software development from
                their satellite offices in India. Follow suit.
              </h1>
              <p className={Sec.sub}>
                20,000+ overseas software engineers, ready to be seated in an
                office.
                <br /> Accountability meets remote teams. 20,000+ overseas
                software engineers.
              </p>
              <Button variant="contained" size="large" className={Sec.clrBtn}>
                Schedule a free tour
              </Button>
            </div>
            <div className={Sec.right}>
              <div className={Sec.image}></div>
            </div>
          </div>
          <div className={Sec.container}>{returnComonentList()}</div>
        </div>
      </div>
    </>
  );
};
export default SectionA;
