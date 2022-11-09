import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import {  Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
const DetailService = () => {
    const catagories = useLoaderData()
    // console.log(catagories)
      
      const {user} = useContext(AuthProvider)
      
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

                <div className='mt-5 mb-5 border border-3 '>
                        <h2 className='text-center'> Add Review </h2>
                       
                         <div>
                              <p className='ms-5'>
                              {
                            user?.displayName
                          }
                          <img className='roundedCircle' style={{width:'40px'}} src={user?.photoURL} alt= '' />
                              
                              </p>
                             

                                <div>
                        <span className='d-flex justify-content-between '>
                                 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                         <Form.Control type="email" name="email" placeholder="Enter email" />
                       </Form.Group>
                               
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                         <Form.Control type="email" name="email" placeholder="Enter email" />
                       </Form.Group>
                                  </span>
           
                    
                    
                                 
                               
                                        <p style={{ marginLeft:'300px', marginTop:'10px'}} >
                                        <textarea style={{width:'600px' , height:'100px' }} > 
     
                                        </textarea>
                                        </p>
                                </div>
                               
                         </div>

                </div>

              </Col>
          </Row>
      </Container>
    );
};

export default DetailService;