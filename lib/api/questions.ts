import { Question } from "../types";
import { API_URL } from "./constant";

export const createQuestion = async ({data, createdFor, createdBy}: {data: string, createdFor: string, createdBy?: string}): Promise<Question> => {
    const res = await fetch(`${API_URL}/questions`, {
        method: "POST",
        body: JSON.stringify({data, createdFor, createdBy}),
    })
    
    const jsonRes = await res.json();

    if(jsonRes.error){
      throw new Error(jsonRes.message)
    }
  
    return jsonRes;
}

export const deleteQuestion = async(id: string) => {
    const res = await fetch(`${API_URL}/questions/${id}`, {
        method: "DELETE",
        credentials: "include",
    })
    
    const jsonRes = await res.json();

    if(jsonRes.error){
      throw new Error(jsonRes.message)
    }
  
    return jsonRes;
}