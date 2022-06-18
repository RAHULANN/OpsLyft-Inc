import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Apidata,Filapidata} from "../redux/apidata/action"
import "./nav.css"
export const Navbar =()=>{
const[indata,setIndata]=useState()


const dispatch=useDispatch()


const serchfun=()=>{
    let filldata=apidata.Countries.filter((e)=>{let d=e.Country.toLowerCase()
     let f=indata.toLowerCase()
     if(d==f){
        let Countries={
            Country:e.Country
        }
       
        return Countries
     }
     
    })
    console.log(filldata)
    if(filldata.length>0){
        dispatch(Filapidata(filldata))
     }
    console.log(filldata)
}
useEffect(()=>{
    dispatch(Apidata())
},[])
let {apidata,loading,error}=useSelector((store=>store.apiReducer))
//console.log(apidata,loading,error)
if(loading===false&&error===false){
    return (

        <div> 
        <div id="navmaindiv">

           <div id="filterdiv">

            <label htmlFor="country">fillter by contry</label>
            <select name="county" id="fillcountry">
                <option value="select">select</option>
                {
                    apidata.Countries.map((e)=>  <option value={e.Country}>{e.Country}</option>)
                }
            </select>
            <label htmlFor="country">fillter by  order</label>
            <select name="bysize" id="fillsize">
                <option value="select">select</option>
                
                <option value="asc">asending</option>
                <option value="dsc">desending</option>
            </select>

           </div>
           
           <div> <input type="text"  onChange={(e)=>{setIndata(e.target.value)}} />
           <button onClick={()=>{serchfun()}}>serch</button></div>
           <div></div>
           <div>
            user login
           </div>
        </div>


<div id="globel">
    
        
          <div> <h1> NewConfirmed : { apidata.Global.NewConfirmed}</h1></div> 
          <div> <h1> NewDeaths  : { apidata.Global.NewDeaths}</h1></div> 
          <div> <h1> TotalConfirmed  : { apidata.Global.TotalConfirmed}</h1></div> 
    
</div>
        </div>
    )
}
else{
    return(
        <h1>loading</h1>
    )
}
}
    