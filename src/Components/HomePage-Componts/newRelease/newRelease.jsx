import ForYouItems from "../ForYouItems/forYouItems"

const LatestRelease = ({contentTitle, latestRelease})=>{

    
    return(
    <ForYouItems contentTitle={contentTitle} forYouItems={latestRelease}/>
    )
}
export default LatestRelease;