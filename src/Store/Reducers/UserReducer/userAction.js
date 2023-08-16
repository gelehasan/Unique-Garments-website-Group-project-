import { userActionTypes } from "./userTypex";

export const SetUser = (user)=>{

    return {type:userActionTypes.setCurrentUser,payload: user}
}