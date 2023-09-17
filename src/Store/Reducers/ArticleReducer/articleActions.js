import { articleTypes } from "./articleReducer"; 
import { getArticleData } from "../../../Firebase/firebase";


export const SetArticleData = (Data)=>{

    return {type:articleTypes.FetchArticlesData, payload:Data}
}

export async function fetchAndDispatchArticles(dispatch) {
    try {
      let articlesData = await getArticleData();
      dispatch(SetArticleData(articlesData));
    } catch (error) {
      // Handle the error here if needed
      console.error("Error fetching articles:", error);
    }
  }




