import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import PrivateHook from '../../PrivateHook/PrivateHook';
const Login = () => {

       PrivateHook('login')
    const handlarSummit = event =>{

        event.preventDefault( )
         
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password)

}
    return (
        <Container>
                 
        <Row className='mt-5 '>
            <Col lg="8" sm="12 " className=' ms-5 w-50 border border-4  bg-white ' style={{height:'350px'}} >
            <Form  onSubmit={handlarSummit} >

          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                 <Form.Control type="email" name="email" placeholder="Enter email" />
           </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
     
     </Form.Group>
   <Button variant="primary" type="submit">
     Submit
</Button>

   <Link className='mt-2 text-decoration-none' to='/signup' > <p > Create New Accout</p></Link>
  </Form>
             
            </Col>

          <Col >
          <img className='ms-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNXfJg15YqUbIUNXplMck1lMbyG-Znsghow&usqp=CAU' alt=''/>
          </Col>
        </Row> 
                
</Container>
    );
};

export default Login;