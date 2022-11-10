import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const Carusol = () => {
    return (
        <Container>
        <Row>
          <Col>
          <Carousel className='mt-5' >
      <Carousel.Item>
        <img
         style={{maxHeight:'300px'}}
          className="d-block  w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo14NOp4xRTVNZSWgFoCBf0JVosREOVkDDQ&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The Definition of Esquire</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{maxHeight:'300px'}}
          className="d-block   w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4ybIrdVVcf-mGrfaK0A2t3m2N_c3uLPxSA&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Criminal Lawyer Job</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{maxHeight:'300px'}}
          className="d-block w-100"
          src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9vtRNXFHot1e7R5hHWAeqjYTpT77OwQbSA&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Business Lawyer Job Description</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

          </Col>
         
        </Row>
      </Container>
    );
};

export default Carusol;