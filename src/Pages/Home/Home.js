import React from 'react';
import PrivateHook from '../../PrivateHook/PrivateHook';
import Carusol from '../Carusol/Carusol';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';



const Home = () => {
 
    PrivateHook('home')

    return (
        <div>
            <Carusol></Carusol>

            <Section1></Section1>

            <Section2></Section2>
        </div>
    );
};

export default Home;