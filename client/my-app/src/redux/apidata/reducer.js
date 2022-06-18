import {APIERROR,APILOADING,APISUCCESS} from  "./action.js"



let initstate={
    loading:true,
    error:true,
    apidata:[]
}

export const apiReducer=(state=initstate,{payload,type})=>{


    switch (type) {
        case APIERROR:
            return {...state,error:true,loading:false}
         case APILOADING:
            return{...state,error:false,loading:true}
         case APISUCCESS:
            return{...state,error:false,loading:false,apidata:payload}     
    
        default:
            return state;
    }
}