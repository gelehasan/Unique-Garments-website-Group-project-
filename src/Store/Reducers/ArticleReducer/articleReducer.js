
export const articleTypes={
    FetchArticlesData: "FetchArticlesData"
}

const IntialArticleState= {
    articleData:[]
}



export const articleReducer = (state=IntialArticleState, action)=>{
    const {type, payload}= action;

    switch(type){
        case articleTypes.FetchArticlesData:
            return {...state, articleData:payload}
        default:
        return state
    }
}