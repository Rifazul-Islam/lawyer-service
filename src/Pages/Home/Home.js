import React from 'react';
import PrivateHook from '../../PrivateHook/PrivateHook';
import Carusol from '../Carusol/Carusol';
import Section1 from '../Section1/Section1';



const Home = () => {
 
    PrivateHook('home')

    return (
        <div>
            <Carusol></Carusol>

            <Section1></Section1>
        </div>
    );
};

export default Home;