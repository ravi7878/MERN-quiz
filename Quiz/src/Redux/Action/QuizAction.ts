import {Dispatch} from "redux"
import {ENTER_QUIZ,ENTER_QUIZ_FAIL , ENTER_QUIZ_SUCCESS,GET_QUIZ_DONE,QuizDispatchTypes} from "./QuizActionType"
import axios from "axios"
export const userEnter = (name:String,email:String) =>async ( dispatch:Dispatch<QuizDispatchTypes>)=>{   
    try {
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

export const getUserQuizCompleted = (id:String) => async (dispatch:Dispatch<QuizDispatchTypes>) => 
{
    try {
        const res = await axios.get(`http://localhost:5000/api/quiz/${id}`)
         dispatch({
            type:GET_QUIZ_DONE,
            payload:res.data.quiz
        })
    } catch (e) {
        dispatch({
            type:ENTER_QUIZ_FAIL
        })
    }
}