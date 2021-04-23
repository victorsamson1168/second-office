import TableStyle from "../styles/PricingTable.module.scss";
import Cross from "../assests/cross.svg"
import Tick from "../assests/tick.svg"

const Table = (props) => {
  return (
    <div className={TableStyle.container}>
    <div className='containerside'>
      <h2 className={TableStyle.title}>The best way to harness global talent.<br/>In every way. </h2>
      <div className={TableStyle.tableContainer}>
      <table>
        <tr>
          <th className={TableStyle.normalHeading}>Features </th>
          <th className={TableStyle.specialHeading}>Freelancing</th>
          <th className={TableStyle.specialHeading}>Offshore Outsourcing</th>
          <th className={TableStyle.specialHeading}>Second Office</th>
        </tr>
        <tr>
          <td className={TableStyle.features}>Available Pool of Talent<br/> <span className={TableStyle.subheading}>Who gets your</span></td>
          <td>Limited</td>
          <td><Cross/></td>
          <td><Tick/></td>
        </tr>
        <tr>
          <td className={TableStyle.features}>Payment Transparency<br/> <span className={TableStyle.subheading}>Who gets your </span></td>
          <td><Tick/></td>
          <td><Cross/></td>
          <td><Tick/></td>
        </tr>
        <tr>
          <td className={TableStyle.features}>Safety in Size<br/> <span className={TableStyle.subheading}>Can you </span> </td>
          <td><Cross/></td>
          <td><Tick/></td>
          <td><Tick/></td>
        </tr>
        <tr>
          <td className={TableStyle.features}>Diffusion of Corporate Culture<br/> <span className={TableStyle.subheading}>Can you </span></td>
          <td><Tick/></td>
          <td><Cross/></td>
          <td><Tick/></td>
        </tr>
        
      </table>
      </div>
    </div>
    </div>
    
  );
};
export default Table;
