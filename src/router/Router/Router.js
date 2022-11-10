import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import DetailService from "../../Pages/DetailService/DetailService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";


export const router = createBrowserRouter([
  
 
 { path:'/', element: <Main> </Main>, children:[
   
    { path:'/',  element:<Home></Home>,
         loader:()=>fetch('http://localhost:5000/service')
      },
      

    { path:'/login', element: <Login></Login>  },

    { path:'/signup', element: <Signup></Signup> },
    { path:'/blog', element: <Blog></Blog> },
    { path:'/services', element: <Services></Services> },
    { path: '/addreview', element: <AddReview></AddReview>, },
  
 
   
  { path: '/detailService/:id', element: <DetailService></DetailService> ,
  loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
},
    
{path:'/addservice', element: <AddService></AddService>} 

 ]}
    

])