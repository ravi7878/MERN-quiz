export const ENTER_QUIZ = "ENTER_QUIZ"
export const ENTER_QUIZ_FAIL = "ENTER_QUIZ_FAIL"
export const ENTER_QUIZ_SUCCESS = "ENTER_QUIZ_SUCCESS"
export const GET_QUIZ_DONE = "GET_QUIZ_DONE"
export const GET_QUIZ_QUESTIONS = "GET_QUIZ_QUESTIONS"
export type UserDetail = {
    detail : {
        name:String,
        email:String,
        status:Boolean,
        msg : String
    }
}
export type User ={
    detail : UserDetail[]
}
export interface EnterQuiz {
    type : typeof ENTER_QUIZ
}

export interface EnterQuizFail{
    type :typeof ENTER_QUIZ_FAIL
}

export interface EnterQuizSuccess{
    type : typeof ENTER_QUIZ_SUCCESS
    payload:User
}

export type QuizDetail = {
    quiz : []
}
export type QuizCompleted = {
    quiz : QuizDetail[]
}
export interface GetQuizDone{
    type : typeof GET_QUIZ_DONE,
    payload:QuizCompleted
}


export type Questions ={
    question :[]
}
export type QuestionsFetch = {
    question : Questions[]
}
export interface GetQuestion {
    type : typeof GET_QUIZ_QUESTIONS,
    payload : QuestionsFetch
}
export type QuizDispatchTypes = EnterQuiz | EnterQuizFail | EnterQuizSuccess | GetQuizDone | GetQuestion
