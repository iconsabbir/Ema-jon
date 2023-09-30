import React, { useState } from 'react';

const Loding = () => {
    const loding = useState
    return (
        <div className='p-20 flex align-center justify-center'>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    ); 
};

export default Loding;