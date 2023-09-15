import AccountManagement from "../../Components/UserAccountManagement/AccountManagement";
import { Helmet } from "react-helmet";
const Profile = ()=>{
    return(
        <>
          <Helmet>
        <title>Profile page</title>
        <meta name='description' content='Here you can change your profile setting ' /> 
      </Helmet>
      <AccountManagement/>
        </>
    )
}


export default Profile;
