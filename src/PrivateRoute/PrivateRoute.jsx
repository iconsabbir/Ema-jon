import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';
import Loding from '../Loding/Loding';


const PrivateRoute = ({children}) => {


    const {user,loding} = useContext(AuthContext)
    
    if(loding){
     return <Loding></Loding>
    }
  if(user){

    
    return children

  }
  return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;