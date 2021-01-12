import {Dispatch} from "redux"
import {ENTER_QUIZ,ENTER_QUIZ_FAIL , ENTER_QUIZ_SUCCESS,QuizDispatchTypes} from "./QuizActionType"
import axios from "axios"
export const userEnter = (name:String,email:String) =>async ( dispatch:Dispatch<QuizDispatchTypes>)=>{
    
    try {
        console.log("user enter",name,email)
        dispatch({
            type:ENTER_QUIZ
        })
        const body = {
            name:name,
            email:email
        }
         const res = await axios.post("http://localhost:5000/api/user",body)
         
         dispatch({
            type:ENTER_QUIZ_SUCCESS,
            payload:res.data
        })
    } catch (e) {
        dispatch({
            type:ENTER_QUIZ_FAIL
        })
    }
}