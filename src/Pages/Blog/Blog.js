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
      <Card.Title> 2. What is JWT, and how does it work? ...?</Card.Title>
      <Card.Text>
      Likewise, we frequently see JWTs conflated with the pattern of JWT-based 
      authentication. JWT on its own is nothing but an open standard (RFC 7519) for transmitting messages via HTTP. JWT as a standard can be used for any message at all. It has one characteristic in particular that makes it a good tool for sending a user’s identity to a backend service. We can trust the integrity of a JWT
       because JWTs are signed, making them tamper-proof.
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