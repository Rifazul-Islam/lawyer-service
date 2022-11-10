import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGoogle, FaTwitter, FaYoutube,  } from 'react-icons/fa';
import PrivateHook from '../../PrivateHook/PrivateHook';
const Footer = () => {
    PrivateHook('footer')
    return (
        <Container>
        <Row>
         <Col className='mt-5'>
                <div style={{height:'200px'}}   className='bg-black ' >
                 
                 <h4 className='text-center pt-5'> © Copyright in services all lawyer 2020 & 2022 </h4>
                

                 <div className='text-center my-3 d-flex justify-content-center align-items-center'>
                   <span > 
                    
                   <FaGoogle className='me-2 fs-3 text'  />
                    <FaYoutube className='me-2 fs-3 text'/>
                    <FaTwitter className=' fs-3 text' />
                   </span>

                   <span className='ms-5 '> 
                   INFORMATION
                   <br/>
                       Pricing
                       <br/>
                   About us
                   <br/>
                   Jobs
                 
                   </span>

                   <span className='ms-5'> 
                   LEGAL
                   <br/>
               Terms and conditions
               <br/>
               License agreement
               <br/>
              Privacy policy
          
                   </span>
              </div>



              </div>

              
         
         </Col>
        </Row>
 </Container>
    );
};

export default Footer;