import {React, useState} from 'react';

const NavTri = ({triContinent, setTriContinent,handleRangeValue,rangeValue,handleContinent,handleAnnulerTriContinent,nameContinent}) => {
     console.log(nameContinent);
    // const [nameContinent, setNameContinent]=useState("")
     
    return (
        <div className='container-nav-tri'>
              <div className="left">
               <input
                onChange={handleRangeValue}
                defaultValue={rangeValue} 
                type="range" min={1} max={250}/>
                <div className="rangeLength">{rangeValue}</div>
             </div>
             <ul className="right">
                <br />

          
               {
                 triContinent.map((continent,index)=>(
                   <li key={index}>
                        <input
                          checked={continent===nameContinent}
                           onChange={handleContinent}
                        type="radio" id={continent} name='triContinent' />
                         <label htmlFor={continent}>{continent}</label>
                     </li>
                 ))
                }
                <button
                  onClick={handleAnnulerTriContinent}
                 className="btn">Annuler la cherche </button>
             </ul>
        </div>
    );
};

export default NavTri;