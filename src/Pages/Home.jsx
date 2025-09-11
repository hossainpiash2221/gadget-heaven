import React from 'react';
import Banner from '../Components/Banner';
import Exploregadget from '../Components/Exploregadget';
import { useLoaderData } from 'react-router-dom';
  
const Home = () => {
  
    return (
        <div>
            
            <Banner></Banner>
            <Exploregadget></Exploregadget>
        </div>
    );
};

export default Home;