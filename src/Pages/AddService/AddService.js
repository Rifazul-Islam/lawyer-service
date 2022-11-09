import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';



const AddService = () => {

    const [service, setService] = useState({})

    const handlarSummit = event =>{

          event.preventDefault();

          console.log(service)
          event.target.reset()

          fetch('http://localhost:5000/services',{
           
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body : JSON.stringify(service)

          })

          .then(res => res.json())
          .then(data => {

            

              if(data.acknowledged){

                   alert('your comipled send data')
              }
          })

    }

      const handlarBlur = event=>{

          const field = event.target.name;
          const value = event.target.value;
        //   console.log(field,value)
        
           const newService = {...service}

           newService[field] = value;

             setService(newService)

            event.target.reset(newService)

      }
    return (
       
            
        <Container>
            <Row>

                <Col>
                   
                <div className=' mt-5 ms-5 w-50 border border-4  bg-white ' style={{height:'400px'}} >

                                                 <h5 className='text-center'> Add Service ...</h5>
           <form  onSubmit={handlarSummit}>
           
            <input className='w-75 ms-4 mt-3 py-2 mb-2 ps-2' onBlur={handlarBlur} type ="text" name='name' placeholder='Service name'/>
           
            <input className='w-75 ms-4 mt-3 py-2 mb-2 ps-2' onBlur={handlarBlur}  type ="text" name='img' placeholder='Service photo url'/>
            
            <input className='w-75 ms-4 mt-3 py-2 mb-2 ps-2' onBlur={handlarBlur}  type ="text" name='discripe' placeholder='Service discripetion'/>
            
            <input className='w-75 ms-4 mt-3 py-2 mb-2 ps-2' onBlur={handlarBlur}  type ="text" name='Price' placeholder='Service price'/>
    
            <Button className='w-75 ms-4 mt-3 py-2 mb-2 ps-2' variant="outline-primary"  type='submit'> Submit</Button>
     
           
     </form>
      </div>
                    
                </Col>
            </Row>
        </Container>

           
          
    );
};

export default AddService;