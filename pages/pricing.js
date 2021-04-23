import Foot from "../components/Footer";
import Nav from "../components/Nav";
import PricingSectionC from "../components/PricingSectionC";
import PricingTable from "../components/PricingTable";

function pricing() {
    return (
        <div>
            <Nav></Nav>
            <PricingTable></PricingTable>
            <PricingSectionC></PricingSectionC>
            <Foot></Foot>
            
        </div>
    )
}

export default pricing
