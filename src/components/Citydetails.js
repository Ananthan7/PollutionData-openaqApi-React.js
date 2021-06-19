import { Bar } from 'react-chartjs-2';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Citydetails({ match }) {
    const [item, setItem] = useState([]);
    const [values, setValues] = useState([]);
    const [chartData, setChartData] = useState([]);

    const fetchItems = async() => {
        const url = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v1/latest?city=${match.params.city}`
        const result= await axios.get(url)
        setItem(result.data.results);
        
    }
    
    const openData = () => {
        item.forEach((obj)=>{
           setValues(obj.measurements);
        })
    }
    const chart = () => {
        let parameterUsed = [];
        let valueUsed = [];
        for (const dataObj of values) {
            parameterUsed.push(dataObj.parameter);
            valueUsed.push(dataObj.value);
          }
          setChartData({
            labels: parameterUsed,
            datasets: [
              {
                label: "particles",
                data: valueUsed,
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4
              }
            ]
          });
    }
    useEffect(()=>{
        fetchItems()
        openData()
    },[openData])

    return (
        <div className="city-details">
            <h1>{match.params.city}</h1>
            <div>{values.map((obj, id)=>{
                return<div>
                    <h2>Particle</h2>
                    <h3 key={id}>{obj.parameter}: {obj.value} {obj.unit}</h3>
                </div>          
            })}</div>
            <div>
            <select className="form-select w-50 m-5" >
              <option select="true" >Select a Date</option>
              {values.map((obj, index)=> {
                return <option key={index} value={obj.lastUpdated}>{obj.lastUpdated}</option>
              }
              )}
            </select>
            <button className="btn btn-success m-4" onClick={chart}>Graphical data</button>  
            <div className="graph">
                <Bar data={chartData}/>
            </div>
            </div>
        </div>
    )
}

export default Citydetails
