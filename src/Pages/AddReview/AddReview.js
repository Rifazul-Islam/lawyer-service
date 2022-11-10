import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';
import ReviewTable from '../ReviewTable/ReviewTable';

const AddReview = () => {
    const {user} = useContext(AuthProvider)
    const [reviews, setReviews] = useState([])
    // console.log(reviews)
    useEffect( ()=>{
       
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)

          .then(res => res.json())
          .then(data => setReviews(data))
   },[user?.email])


   const deletedReview = id =>{

    const sure = window.confirm('Are you sure delete sercies')
      
           
     if(sure){

           fetch(`http://localhost:5000/reviews/${id}`, {

            method:'DELETE',
            
           })

           .then(res => res.json())
           .then(data => {
             console.log(data)

              if(data.deletedCount > 0){

                 
                   toast.success('delete Successfully')

                  const remaing = reviews.filter(rev => rev._id !== id)

                  setReviews(remaing)
              }
           })
     }
      
 }
    
      return (
          <Container>
            <Row>
                <Col className='mt-5'>
                
                <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Service img</th>
            <th>Service Name</th>
            <th>Review </th>
            <th>Email Name</th>
          </tr>
        </thead>
        <tbody>
          
                   {
                          reviews.map(review => <ReviewTable
                                 
                              key={review._id}

                              review = {review}

                              deletedReview ={deletedReview }
                              
                          > </ReviewTable> )
                   }
        </tbody>
      </Table>
                </Col>
            </Row>
          </Container>
    );
};

export default AddReview;