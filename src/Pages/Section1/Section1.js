import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';




import Card from 'react-bootstrap/Card';
const Section1 = () => {
    return (

       
        <Container>
            <Row className='mt-5 '>
                <Col>
                
                <Card className="text-wrap">
         
           <Card.Body>
         
           <Card.Text>
            
               <img style={{height:'200px'}} className='w-100' src='https://www.mgc.com.tr/en/wp-content/uploads/2022/06/what-is-a-lawyer-en-mgc-legal.jpg' alt=' ' />
          </Card.Text>
          <Card.Title>Divorce Lawyer</Card.Title>
          <Card.Text className='p-2 text-primary'>
          Divorce lawyers specialize in the many legal aspects that need to be addressed when terminating a marriage. Some of these details may include child custody,
           legal filings, and the division of assets and debts amongst spouses. In the case of legal separations, a divorce lawyer will grant the separation in the form of a court order a legal separation is a process by which a married couple may 
           formalize a separation while remaining legally married). When there are children involved, a divorce lawyer will help set the terms for child support and child custody...
        </Card.Text>

        <Button variant="primary">Read more ...</Button>
         </Card.Body>
        
         </Card>
                </Col>
            </Row>
        </Container>
         
            
            
    
      
  
    );
};

export default Section1;