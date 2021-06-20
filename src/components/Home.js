import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
      useEffect(()=>{
        fetchItems()
      },[])
      const [state, setstate] = useState([]);
      // const [paramValue, setParamValue] = useState([]); 
      

      const fetchItems = async() =>{
        const url = `https://docs.openaq.org/v1/latest`
        const result= await axios.get(url)
        setstate(result.data.results);
        
      }

    return (
        <div className="home-container">
          <h2>List of Cities</h2>
          <p className="text-muted">hint: refresh to view next data</p>

          <div className="datas">
            {state.map((obj,index)=>{
              return <h3 key={index}> <Link to={`/citydetail/${obj.city}`}>{obj.city}</Link></h3>
            })}
          </div>
        </div>
    )
}

export default Home
