import React from 'react';
import Card from './Card';

const ListCountries = ({countries,rangeValue, setNameContinent,nameContinent}) => {
    // console.log(countries)
    return (
        <ul
        className='container-list-countries'>
            {
            countries
            .filter((country)=>country.continents[0].includes(nameContinent))
             .slice(0,rangeValue)
            .map((country,index)=>(
                 <Card country={country} key={index} />
            ))}
            
        </ul>
        
    );
};

export default ListCountries;