import {Dispatch} from "redux"
import {ENTER_QUIZ,ENTER_QUIZ_FAIL , ENTER_QUIZ_SUCCESS,GET_QUIZ_DONE,GET_QUIZ_QUESTIONS,RESET_QUESTIONS ,QuizDispatchTypes} from "./QuizActionType"
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

export const submitQuizResult = (userId:string ,answers:any,resultNumber:number , count:number,type:string,difficulty:string) => async(dispatch:Dispatch<QuizDispatchTypes>) => 
{
    let result = 0
    const correct = answers.filter((item:any)=>{return item.result === "correct"}).length
    if(resultNumber >= 50)
    {
        result = 1
    }
    const body = {
        
            userId:userId,
            quizDetail: {
                NumberofQuestions: count,
                CorrectAnswer:correct,
                SelectCategory: "History",
                SelectDifficulty: "easy",
                SelectType: "multiple choice"
            },
            quizResult:result
    }
    const res = await axios.post("http://localhost:5000/api/quiz",body)
    if(res.status === 200)
    {
        const quiz = await axios.get(`http://localhost:5000/api/quiz/${userId}`)
        console.log(quiz.data.quiz)
        dispatch({
           type:GET_QUIZ_DONE,
           payload:quiz.data.quiz,
       })
       dispatch({
           type:RESET_QUESTIONS,
           payload:[]
       })
    }
    
}