import React, { useEffect, useState } from 'react';

const ReviewTable = ({review, deletedReview }) => {
 
        const {_id,email,message,service }  = review;

            const [serviche, setServiche] = useState({})
            console.log(serviche)

            useEffect( ()=>{
            
                 fetch(`http://localhost:5000/services/${service}`)
                  .then(res => res.json())
                  .then(data => setServiche(data))

            },[service])
          

    return (
    
            <tr> 
            <td>

            <button onClick={()=>deletedReview(_id)} >X</button>
            </td>
            <td colSpan={0}> {
                
            serviche?.img && 
            <img className='rounded Circle' style={{whidth:'60px',  height:'50px'}}  src={serviche.img} alt="Avatar Tailwind CSS Component" />
            
            } </td>
            <td colSpan={0}>{serviche.name}  </td>
            <td colSpan={1} >{message}</td>
            <td colSpan={2} >{email}</td>
          </tr>
       
    );
};

export default ReviewTable;