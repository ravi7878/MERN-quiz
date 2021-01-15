import {GET_QUIZ_QUESTIONS ,QuizDispatchTypes} from "../Action/QuizActionType"

interface DefaultState{
    loading: boolean,
    questions?:any
   
}

const initialState:DefaultState = {
    loading:false,
    questions:[]
}
const QuizReducer = (state:DefaultState = initialState,action:QuizDispatchTypes) : DefaultState =>{
    switch(action.type)
    {
        case GET_QUIZ_QUESTIONS:
            return {
                ...state,
                questions:action.payload
            }
        default : 
            return state
    }
}

export default QuizReducer