import {combineReducers} from "redux"
import UserReducer from "./UserReducer"
const RootReducer = combineReducers( {
 quiz:UserReducer ,
 user:UserReducer
})

export default RootReducer