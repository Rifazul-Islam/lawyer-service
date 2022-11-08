import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";


export const router = createBrowserRouter([
  
 
 { path:'/', element: <Main> </Main>, children:[
   
    { path:'/',  element:<Home></Home>,
         loader:()=>fetch('http://localhost:5000/service')
      },
      

    { path:'/login', element: <Login></Login>
       
   },
    { path:'/signup', element: <Signup></Signup> },
    { path:'/blog', element: <Blog></Blog> },
   
    
 ]}
    

])