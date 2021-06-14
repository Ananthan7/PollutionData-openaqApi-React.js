import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';


function Home() {
    useEffect(() => {
        fetchItems()
      }, []);
      const [state, setstate] = useState([]);
      const [values, setValues] = useState([]);
      const [param, setParam] = useState([]);
      const [paramValue, setParamValue] = useState([]);
    
      const fetchItems = () =>{
        axios.get('https://docs.openaq.org/v1/latest')
        .then( (response) => {
          // handle success
          setstate(response.data.results);
          //console.log(response.data.results);
        })
        .catch( (error) => {
          // handle error
          alert("Invalid network Access")
          console.log(error);
        })
      }
      // button onclick
      const openData = () => {
        state.forEach((item) => {
          setValues(item.measurements)
          
        })
        values.forEach((obj,index, arr)=>{
          arr[index] = obj.parameter
          setParam(arr)
          console.log(arr);
        });
        // values.forEach((obj,index, arr)=>{
        //   arr[index] = obj.value
        //   setParamValue(arr)
        //   console.log(arr);
        // });
      }

    return (
        <div className="home-container">
          <div className="selector">
            <select className="form-select w-5" >
              <option select="true" >Select a City</option>
              {state.map((obj, index)=> {
                return <option key={index} id={obj.city} value={obj.city}>{obj.city}</option>
              }
              )}
            </select>
          </div>
          <div className="button">
          <button type="button" onClick={openData} className="btn btn-outline-success">Polluted data</button>
          <p >hint: double click button / refresh before changing city</p>
          </div>
          <div className="datas">
                <Bar 
                data={{
                  labels: param,
                  datasets: [{
                      label: '# of Votes',
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                  }]                 
                }} />
          </div>
          
        </div>
    )
}

export default Home
