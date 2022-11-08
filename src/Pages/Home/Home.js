import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import PrivateHook from '../../PrivateHook/PrivateHook';
import Cart from '../Cart/Cart';
import Carusol from '../Carusol/Carusol';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';



const Home = () => {
  
   const services = useLoaderData()
   console.log(services)

    PrivateHook('home')

    return (
             
        <Container>
            <Row>
                <Col>
                
                <div>

<Carusol></Carusol>


  <div style={{ display :"grid",
       gridTemplateColumns : 'auto auto auto ',  }}>
     
      {
         services.map(service => <Cart
         
             key={service._id}

             service={service}
         > </Cart>)
      }
      
     </div>
    <Section1></Section1>

     <Section2></Section2>
</div>
                
                </Col>
            </Row>
        </Container>
    );
};

export default Home;