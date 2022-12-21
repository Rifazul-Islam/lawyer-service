import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PrivateHook from '../../PrivateHook/PrivateHook';
const ServiceCart = ({service}) => {

    const { _id, name, img, Price,discripe} = service

    PrivateHook('serviceCart')
    return (
        <Container>
        <Row>
          <Col className='mt-3 '>
        <Card  style={{ width:'18rem', height:'450px' }}>
        <PhotoProvider>
        <PhotoView  src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
      
      <Card.Body>
       <Card.Title> {name} </Card.Title>
        <Card.Text  style={{textAlign:'justify'}} >
    
        {discripe?.length >100? discripe.slice(0,100) + '...'

     : discripe }

   </Card.Text>
    <p> Price : ${Price} </p>
       <Link  to={`/detailService/${_id}`}>  <Button variant="primary" className= 'mb-0' >detailes</Button></Link>
</Card.Body>
 </Card>
          </Col>
        </Row>
    </Container>
    );
};

export default ServiceCart;