import React from 'react';
import PrivateHook from '../../PrivateHook/PrivateHook';

import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
  
     PrivateHook('blog')

    return (
        
           <Container>
               <Row> 
                <Col>
                
                <Card className='mt-5'>
       
           <Card.Body>
          <Card.Title> 1. Difference between SQL and NoSQL ...?</Card.Title>
          <Card.Text>
              SQL programming can be effectively used to insert, search, update, delete database records.
               That doesnt mean SQL cannot do things beyond that. It can do a lot of things including, but not limited.
              NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with
              humongous data storage needs. NoSQL is used for Big data and real-time web apps
          </Card.Text>
         
        </Card.Body>
      </Card>


      <Card className='mt-5'>
       
       <Card.Body>
      <Card.Title> 1. Difference between SQL and NoSQL ...?</Card.Title>
      <Card.Text>
          SQL programming can be effectively used to insert, search, update, delete database records.
           That doesnt mean SQL cannot do things beyond that. It can do a lot of things including, but not limited.
          NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with
          humongous data storage needs. NoSQL is used for Big data and real-time web apps
      </Card.Text>
     
    </Card.Body>
  </Card>



  <Card className='mt-5'>
       
       <Card.Body>
      <Card.Title> 1. Difference between SQL and NoSQL ...?</Card.Title>
      <Card.Text>
          SQL programming can be effectively used to insert, search, update, delete database records.
           That doesnt mean SQL cannot do things beyond that. It can do a lot of things including, but not limited.
          NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with
          humongous data storage needs. NoSQL is used for Big data and real-time web apps
      </Card.Text>
     
    </Card.Body>
  </Card>



  <Card className='mt-5'>
       
       <Card.Body>
      <Card.Title> 1. Difference between SQL and NoSQL ...?</Card.Title>
      <Card.Text>
          SQL programming can be effectively used to insert, search, update, delete database records.
           That doesnt mean SQL cannot do things beyond that. It can do a lot of things including, but not limited.
          NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with
          humongous data storage needs. NoSQL is used for Big data and real-time web apps
      </Card.Text>
     
    </Card.Body>
  </Card>
                </Col>
               </Row>
           </Container>
    );
};

export default Blog;