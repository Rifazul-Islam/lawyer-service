import React, {  useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

import PrivateHook from '../../PrivateHook/PrivateHook';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {

    const [secvices, setServices] = useState([])
     
       const [loading, setLoading] = useState(true)

    // console.log(secvices)
    PrivateHook('services')
      useEffect(()=>{
        
        fetch('https://lawyer-server-site.vercel.app/services')
        .then(res => res.json())
        .then(data => {
          setServices(data)
          setLoading(false)
        })
          
      }, [])

      if(loading){

        return <div className='d-flex justify-content-center mt-5 ' > <Spinner  animation="border" variant="success" /></div>
    }

    return (
        <Container>
            <Row>
                <Col>
                
                <div style={{ display :"grid",
               gridTemplateColumns : 'auto auto auto ',  backgroundColor:'lightcyan', height:'1500px' }} >
           
           {
              secvices.map(service => <ServiceCart 
              key={service._id}
              service= {service}
                > </ServiceCart>)
           }

          
        </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;