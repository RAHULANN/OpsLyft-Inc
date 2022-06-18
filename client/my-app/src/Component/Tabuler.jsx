import {useSelector} from "react-redux"
import "./table.css"
export const Tabuler=()=>{
    let {apidata,loading,error}=useSelector((store=>store.apiReducer))
    console.log(apidata,loading,error)
    if(loading===false&&error===false){

    
    return(

        <div>

            <div> <h3 id="hadingoftable" > Table of all the country</h3></div>

            <div>

                <table id="tableidmain">
                    <thead>
                        <tr>
                            <td>
                                <h1> name</h1>  
                            </td>
                            <td>
                               <h1> TotalConfirmed </h1>
                            </td>
                            <td>
                           <h1> TotalDeaths</h1>  
                            </td>
                            <td>
                               <h1>  newcase</h1> 
                            </td>
                        </tr>
                    </thead>

                    <tbody>

                        {

apidata.Countries.map((e)=><tr>
    <td>{e.Country}</td>
    <td>{e.TotalConfirmed}</td>
    <td>{e.TotalDeaths}</td>
    <td>{e.NewConfirmed}</td>
</tr>)
                        }
                    </tbody>
                </table>
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
