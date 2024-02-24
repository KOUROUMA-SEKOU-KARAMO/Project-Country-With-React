import React from 'react';
import {useState,useEffect } from "react"
import ListCountries from './ListContries';
import NavTri from './NavTri';

const Contries = () => {
      const [triContinent, setTriContinent]=useState([
         "Africa","America","Europe","Asia","Oceania"
        ])
        const [alertSource, setAlertSource]=useState(false)
        const [countries, setCountries]=useState([])
        const [rangeValue, setRangeValue]=useState(36)
         const [nameContinent, setNameContinent]=useState("")
            // console.log(nameContinent)
         useEffect(()=>{
             fetch("https://restcountries.com/v3.1/all")
             .then(res=>{
                   
                   if(!res.ok){
                       setAlertSource(true)
                     throw new Error("Error Server ")

                   }

                   return res.json()
             })
             .then(data=>setCountries(data))
             .catch((e)=>{
                 console.log("Vous avez une au niveau de la source des donnees ")
                //    setAlertSource(!alertSource)
                //    window.addEventListener("load",setAlertSource(!alertSource))

           
                
             })
         },[]) 

        //  console.log(contries)
    return (
        <div className='container-countries'>
                 {alertSource?(
                     <h1>Vous avez une au niveau de la source des donnees </h1>
                 ):
                    <div className="containerCountries">
                         
                        <NavTri
                         triContinent={triContinent}
                          setTriContinent={setTriContinent}
                          rangeValue={rangeValue}
                           handleRangeValue={(e)=>setRangeValue(e.target.value)}
                           countries={countries} 
                           handleContinent={e=>setNameContinent(e.target.id)}
                           handleAnnulerTriContinent={e=>setNameContinent("")}
                           nameContinent={nameContinent}


                        //    handleContinent={(e)=>setNameContinent(e.target.id)}
                         /> 
                        <ListCountries
                            countries={countries} 
                            rangeValue={rangeValue}
                            nameContinent={nameContinent}
                             
                         />
                    </div>
                 }
        </div>
    );
};

export default Contries;