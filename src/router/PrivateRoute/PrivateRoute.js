import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation;

    if( loading){

         return <div> <h2 className='text-3xl'>Loandin... </h2></div>
    }

 if(user?.email){

    return children;
 }
    
 return <Navigate to='/login' state={{ from : location }} replace />

 
};

export default PrivateRoute;