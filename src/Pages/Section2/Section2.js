import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Section2 = () => {
    return (
        
        <Container>
            <Row className='mt-5 pb-5 '  style={{backgroundColor:'lightGreen'}} >
                    <h3 className="text-center mb-2  w-50 mx-auto pb-3 "> How do you  Lawyers ... </h3>
                <Col lg="8" sm="12 ">
        
                 <img style={{height:'300px'}}  className='w-100'  src='https://uslawyers.online/wp-content/uploads/2022/10/How-do-Lawyers-Decide-to-Take-a-Case-cover-image-1024x576.webp ' alt='' />

                </Col>

                <Col>
                     <h3>   Deside to take a case </h3>
              <p className='fs-5  '> When you find yourself faced with a legal issue, the steps you take next can literally impact the rest of your life. Hiring a legal professional  and doing it the right way  is one of the most important decisions you  make.
                  Not sure how to hire an attorney for your case? </p>
                 </Col>
            </Row>
        </Container>
    );
};

export default Section2;