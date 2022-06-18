import axios from "axios"

export const APILOADING="APILOADING";

export const APIERROR="APIERROR";

export const APISUCCESS="APISUCCESS"


export const apisuccess=(payload)=>({

    payload:payload,
    type:APISUCCESS
})

export const apierror=()=>({

    type:APIERROR
})
export const apiLoading=()=>({
    type:APILOADING
})



export const Apidata=(payload)=>(dispatch)=>{
    dispatch(apiLoading())
console.log("rahul")
    axios.get('https://api.covid19api.com/summary').then((res)=>dispatch(apisuccess(res.data)))
    .catch((err)=>dispatch(apierror()))
}
export const Filapidata=(payload)=>(dispatch)=>{
    dispatch(apiLoading())
    
        dispatch(apisuccess(payload))
       
}