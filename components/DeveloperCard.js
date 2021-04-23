import DeveloperCardStyle from "../styles/DeveloperCard.module.scss"
// import DevAvatar from "../assests/dp.svg"
import Image from "next/image"
function DeveloplerCard() {
    return (
        <div className={DeveloperCardStyle.CardContainer}>
            <Image src="/dp.svg" className={DeveloperCardStyle.avatar} height={156} width={156}></Image>
            <div className={DeveloperCardStyle.detailsContainer}>
                <p className={DeveloperCardStyle.name}>Rajat Saini</p>
                <p className={DeveloperCardStyle.designation}>Lead Blockchain Engineer</p>
                <p className={DeveloperCardStyle.previous}>Previously at Microsoft</p>
            </div>


            
        </div>
    )
}

export default DeveloplerCard;
