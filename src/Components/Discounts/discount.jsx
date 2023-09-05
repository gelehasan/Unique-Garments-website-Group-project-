import ForYouItems from "../ForYouItems/forYouItems"

const Discount = ({contentTitle, latestRelease})=>{

    return(
    <ForYouItems contentTitle={contentTitle} forYouItems={latestRelease}/>
    )
}
export default Discount;