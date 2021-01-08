export const ENTER_QUIZ = "ENTER_QUIZ"
export const ENTER_QUIZ_FAIL = "ENTER_QUIZ_FAIL"
export const ENTER_QUIZ_SUCCESS = "ENTER_QUIZ_SUCCESS"

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


export type QuizDispatchTypes = EnterQuiz | EnterQuizFail | EnterQuizSuccess