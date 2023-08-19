
export const catagoryTypes = {
    StartCatagoryFetching:"StartCatagoryFetching",
    FetchCatagorySuccess:"FetchCatagorySuccess",
    FetchCatagoryFail: "FetchCatagoryFail"
}

const catagoryIntial= {
    Catagory: [],
    ErrorMessage: null
}




export const catagoryReducer = (state =catagoryIntial, action)=>{
    const {type, payload }= action;

    switch(type){
        case catagoryTypes.FetchCatagorySuccess:
            return {...state,Catagory: payload}
        case catagoryTypes.FetchCatagoryFail:
            return {...state, ErrorMessage: payload}
        default:
            return state
    }
}