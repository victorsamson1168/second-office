import PricingSecC from "../styles/PricingSectionC.module.scss";
import Advertisment from "./Advertisement";

import Kinfolk from "../assests/company/Kinfolk.svg";
import Citibank from "../assests/company/citibank.svg";


const PricingSectionC = (props) => {
    let companies = [
        <Citibank />,
        <Kinfolk />,
        <Citibank />,
        <Kinfolk />,
        <Kinfolk />,
        <Citibank />,
        <Kinfolk />,
        <Citibank />,
        <Kinfolk />,
        <Kinfolk />,       
        
      ];

    let returnComonentList = () => {
        return companies.map((comp) => <Advertisment image={comp} />);
      };

  return (
    <div className={PricingSecC.container}>
    <div className='containerside'>
      <h2 className={PricingSecC.title}>Loved by 80,000+ organizations <br/> across the globe</h2>
      <div className={PricingSecC.compContainer}>{returnComonentList()}</div>
     
    </div>
    </div>
    
  );
};
export default PricingSectionC;
