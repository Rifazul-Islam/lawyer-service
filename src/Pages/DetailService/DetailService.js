import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {  Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const DetailService = () => {
    const catagories = useLoaderData()
    console.log(catagories)
    const { _id, name, img, Price,discripe} =catagories
    return (
      <Container>
          <Row className='mt-5 '>
              <Col>
              
              <Card className="text-wrap  p-5">

         <Card.Text>
          
             <img  style={{height:'300px'}} className='w-100 ' src={img} alt=' ' />
        </Card.Text>
        <Card.Title className='text-center'> {name} </Card.Title>
        <Card.Text className='fs-5 text-primary'>

                 {discripe}

      </Card.Text>

           <p> 
                Price : ${Price}
           </p>
     
       </Card>

                <div className='mt-5 border border-3 h-75'>
                        <h2 className='text-center'> Add Review </h2>

                </div>

              </Col>
          </Row>
      </Container>
    );
};

export default DetailService;