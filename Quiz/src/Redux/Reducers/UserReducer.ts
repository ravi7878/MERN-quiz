import {ENTER_QUIZ,ENTER_QUIZ_FAIL,ENTER_QUIZ_SUCCESS,GET_QUIZ_DONE, User,UserDetail ,QuizDispatchTypes} from "../Action/QuizActionType"

interface DefaultState{
    loading: boolean,
    user?: any,
    quiz?:any
   
}

const initialState:DefaultState = {
    loading:false,
    user:[],
    quiz:[]
}
const UserReducer = (state:DefaultState = initialState,action:QuizDispatchTypes) : DefaultState =>{
    switch(action.type)
    {
        case ENTER_QUIZ_FAIL:
            return {
                loading:false
            }
        case ENTER_QUIZ:
            return {
                loading:true
            }
        case ENTER_QUIZ_SUCCESS:
            return {
                ...state,
                loading :false,
                user:action.payload
            }
        case GET_QUIZ_DONE:
            return {
                ...state,
                quiz:action.payload
            }
        default : 
            return state
    }
}

export default UserReducer