import React from 'react';
import reactLogo from "../assets/imgs/reactLogo.png";
const Logo = () => {
    return (
        <div className='container-logo'>
           <div className="logo">
                <img src={reactLogo} alt="" />
                 <h2>React World </h2>
           </div>
        </div>
    );
};

export default Logo;