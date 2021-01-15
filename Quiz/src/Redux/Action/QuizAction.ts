import {Dispatch} from "redux"
import {ENTER_QUIZ,ENTER_QUIZ_FAIL , ENTER_QUIZ_SUCCESS,GET_QUIZ_DONE,GET_QUIZ_QUESTIONS ,QuizDispatchTypes} from "./QuizActionType"
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
        const quiz = await axios.get(`http://localhost:5000/api/quiz/${res.data.id}`)
        console.log(quiz)
        dispatch({
           type:GET_QUIZ_DONE,
           payload:quiz.data.quiz
       })
    } catch (e) {
        dispatch({
            type:ENTER_QUIZ_FAIL
        })
    }
}

export const getQuizQuestions = (count:number , difficulty:string , type:string) => async(dispatch:Dispatch<QuizDispatchTypes>) => {
    try {
       const body = {
            NumberofQuestions: count,
            SelectCategory: "History",
            SelectDifficulty: difficulty,
            SelectType: type
          }
        const res = await axios.post("http://localhost:5000/api/questions",body)     

         dispatch({
            type:GET_QUIZ_QUESTIONS,
            payload:res.data.question
        })
    } catch (e) {
        dispatch({
            type:ENTER_QUIZ_FAIL
        })
    }
}

