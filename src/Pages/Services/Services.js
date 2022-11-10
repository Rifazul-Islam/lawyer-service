import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {

    const [secvices, setServices] = useState([])
    // console.log(secvices)

      useEffect(()=>{
        
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
            
      }, [])

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