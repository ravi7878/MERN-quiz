import {combineReducers} from "redux"
import UserReducer from "./UserReducer"
import QuizReducer from "./QuizReducer"
const RootReducer = combineReducers( {
 quiz:QuizReducer,
 user:UserReducer
})

export default RootReducer