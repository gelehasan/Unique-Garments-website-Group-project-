import { userActionTypes } from "./userTypex";
const userInitialState= {
    currentUser: null
}


export const userReducer = (state= userInitialState, action) =>{
  const {type,payload } = action;

  switch(type){
    case userActionTypes.setCurrentUser:
        return {...state, currentUser:payload};
    default :
    return  state
  }
}