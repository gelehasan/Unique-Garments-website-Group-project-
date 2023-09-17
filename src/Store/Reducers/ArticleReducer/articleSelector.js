import { createSelector } from "reselect";

const articleReducer = (state)=> state.article;


const articleSlice = createSelector(
    [articleReducer],
    (articleState)=> articleState.articleData
)



export const RetrieveArticleData = createSelector(
    [articleSlice],
    (articleObject)=>{

        return articleObject
    }
)


