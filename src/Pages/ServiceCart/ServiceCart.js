import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
const ServiceCart = ({service}) => {

    const {name, img, Price,discripe} = service
    return (
        <Container>
        <Row>
          <Col className='mt-3 '>
          <Card style={{ width: '18rem',height:'450px' }}>
       <Card.Img variant="top" src={img} style={{height:'200px'}} />
      <Card.Body>
       <Card.Title> {name} </Card.Title>
        <Card.Text >
    
        {discripe?.length >100? discripe.slice(0,100) + '...'

     : discripe }

   </Card.Text>
    <p> Price : ${Price} </p>
 
</Card.Body>
 </Card>
          </Col>
        </Row>
    </Container>
    );
};

export default ServiceCart;