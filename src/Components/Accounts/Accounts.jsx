import React from 'react';
import Instructor from '../Instructor/Instructor';
import Student from '../Student/Student';
import { Outlet } from 'react-router-dom';
function Accounts() {
  return <>
  <Instructor />
  <Outlet />
  <Student />

  </>
   
}

export default Accounts