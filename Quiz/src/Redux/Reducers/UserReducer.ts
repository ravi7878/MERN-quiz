import {ENTER_QUIZ,ENTER_QUIZ_FAIL,ENTER_QUIZ_SUCCESS, User,UserDetail ,QuizDispatchTypes} from "../Action/QuizActionType"

interface DefaultState{
    loading: boolean,
    user?: any,
   
}

const initialState:DefaultState = {
   loading:false,
   user:undefined,
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
                loading:false,
                user:action.payload
            }
        default : 
            return state
    }
}

export default UserReducer