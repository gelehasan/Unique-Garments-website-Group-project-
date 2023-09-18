import { userActionTypes } from "./userReducer";

export const SetUser = (user)=>{

    return {type:userActionTypes.setCurrentUser,payload: user}
}