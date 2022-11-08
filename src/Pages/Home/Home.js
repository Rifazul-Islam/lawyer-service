import React from 'react';
import PrivateHook from '../../PrivateHook/PrivateHook';
import Carusol from '../Carusol/Carusol';



const Home = () => {
 
    PrivateHook('home')

    return (
        <div>
            <Carusol></Carusol>
        </div>
    );
};

export default Home;