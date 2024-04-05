import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './LoginIn';
import viewPasswords from './viewPasswords';




function App() {
 return(
   <div className='App'>
      <BrowserRouter>
         <Routes>
            <Route path = "/" element = {<LogIn />} />
            <Route path = "/passwords" element = {<viewPasswords />} />
         </Routes>
      </BrowserRouter>
   </div>
 )    
  
}

export default App