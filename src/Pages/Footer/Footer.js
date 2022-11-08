import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <Container>
        <Row>
         <Col className='mt-5'>
         <div style={{height:'200px'}}   className='bg-black ' >
                 
                 <h4 className='text-center pt-5'> Copyright in services all lawyer 2020 & 2022 </h4>
                
              </div>
         
         </Col>
        </Row>
 </Container>
    );
};

export default Footer;