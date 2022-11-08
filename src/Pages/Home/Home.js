import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

import PrivateHook from '../../PrivateHook/PrivateHook';
import Cart from '../Cart/Cart';
import Carusol from '../Carusol/Carusol';
import { BiRightArrowAlt,  } from "react-icons/bi";
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
       gridTemplateColumns : 'auto auto auto ', position:'relative'  , backgroundColor:'lightcyan', height:'560px' }}>
     
      {
         services.map(service => <Cart
         
             key={service._id}

             service={service}
         > </Cart>)
      }
      
      
    
      
     </div>
  
     <Link className='d-flex justify-content-around ' to='/services'>
     <Button style={{position:'absolute', bottom:'-80%', width:'150px'  }}  variant="outline-primary">See All <BiRightArrowAlt/> </Button>
        
         </Link>
        
        



    <Section1></Section1>

     <Section2></Section2>
</div>
                
                </Col>
            </Row>
        </Container>
    );
};

export default Home;