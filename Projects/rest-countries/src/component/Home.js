import React from 'react';
import world from './resource/world.jpg'
import './style.css';

const Home = () => {
    return (
        <div>
            <h3 className="text-center my-3 text-success">Welcome to Rest Countries</h3>
             <img className="home-bg" src={world} />
        </div>
    );
};

export default Home;