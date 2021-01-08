import {Dispatch} from "redux"
import {ENTER_QUIZ,ENTER_QUIZ_FAIL , ENTER_QUIZ_SUCCESS,QuizDispatchTypes} from "./QuizActionType"
import axios from "axios"
export const userEnter = async (dispatch:Dispatch<QuizDispatchTypes>)=>{
    
    try {
        dispatch({
            type:ENTER_QUIZ
        })
        const body = {
            name:"Ravi Kevadiya",
            email:"rkevadiya300@gmail.com"
        }
         const res = await axios.post("http://localhost:5000/api/user",body)
         console.log(res.data);
         
    } catch (e) {
        dispatch({
            type:ENTER_QUIZ_FAIL
        })
    }
}