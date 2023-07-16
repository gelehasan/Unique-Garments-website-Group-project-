import { createContext, useState} from "react";

export const UserContext = createContext(
    {
        currentUser:null,
        setCurrentUser: ()=>null
    }
)



export const UserContextProvider = ({children})=>{
    let [currentUser, setCurrentUser] = useState(null);

 let   values={currentUser, setCurrentUser}

 return(
<UserContext.Provider value={values}>{children}</UserContext.Provider>
 )

}