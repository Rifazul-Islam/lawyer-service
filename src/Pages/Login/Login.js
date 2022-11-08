import React, { useContext } from 'react';
import { ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';
import PrivateHook from '../../PrivateHook/PrivateHook';
const Login = () => {
const {UserLogin , handlarGoogle} = useContext(AuthProvider)

       PrivateHook('login')
    const handlarSummit = event =>{

        event.preventDefault( )
         
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password)

        UserLogin(email, password)
        .then((result)=>{
              const user = result.user;
              console.log(user)
              form.reset()
        })

        .catch((error)=>{
            console.error(error)
        })

     }


      const googleLogin = ()=>{

        handlarGoogle()
        .then((result)=>{
            const user = result.user
            console.log(user)
        })

        .catch((error)=>{
            console.error(error)
        })
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
  
           <ButtonGroup vertical>
                <Button onClick={googleLogin }  className='mb-2' variant="outline-success"> <FaGoogle />  Google with login </Button> 
            </ButtonGroup>
  
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