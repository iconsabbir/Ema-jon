import React from 'react';
import './Home.css';
import  man from '../../assets/Man.png'

const Home = () => {
    return (
        <div>
            <div className='home-iteam'>
                <div className='container'>
                    <div className='home-section'>
                        <div className='home-title'>
                            <h6>Sale up to 70% off</h6>
                            <h1>New Collection For Fall</h1>
                            <p>Discover all the new arrivals of ready-to-wear collection.</p>
                            <div>
                                <button className="btn btn-accent">Accent</button>
                            </div>

                        </div>
                        <div className='home-model'>
                            <img src={man} alt="" />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;