import {useDispatch,useSelector} from "react-redux"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  

export const Grafical=()=>{
    let {apidata,loading,error}=useSelector((store=>store.apiReducer))
    console.log(apidata,loading,error)
    const data = [
    
    
    ];
    if(loading===false&&error===false){
        apidata.Countries.map((e)=>data.push({
            name:e.Country,
            NewConfirmed:e.NewConfirmed,
            TotalConfirmed:e.TotalConfirmed,
            TotalDeaths:e.TotalDeaths

        }))
    }

    return(


    
        <BarChart
        width={1300}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="NewConfirmed" stackId="a" fill="#8884d8" />
        <Bar dataKey="TotalConfirmed" stackId="a" fill="#82ca9d" />
        <Bar dataKey="TotalDeaths" stackId="a" fill="#FF0000" />
      </BarChart>
        
    )
}