
import {applyMiddleware,createStore,combineReducers} from "redux"
import thunk from "redux-thunk"

import {apiReducer} from "./apidata/reducer"






let rootreducr=combineReducers({
    apiReducer:apiReducer
})


export const store=createStore(rootreducr,applyMiddleware(thunk))