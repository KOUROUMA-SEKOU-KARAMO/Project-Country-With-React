import React from 'react';

const Card = ({country}) => {
    return (
        <div className='container-card'>
            <img src={country.flags.svg} alt={country.translations.fra.common} />

            <div className="card-item"> 
               <h2>Pays : {country.translations.fra.common}</h2>
               <p >Pop : {country.population.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Card;