import React, { useState, useEffect} from 'react'
import './App.css'
import { ReactComponent as Logo } from './media/ShieldPass.svg'
import axios from "axios";


function LogIn(){
   const [data, setData] = useState([{}])
   const [username, setUsername] = useState([{}])
   const [password, setPassword] = useState([{}])
   


   useEffect(()=>{
         fetch("/homepage").then(
            res => res.json()
         ).then(
               data => {
                  setData(data)
                  console.log(data)
               }
         )
      }, [])
      
      function handleSubmit(e) {
         e.preventDefault();
         axios.post("http://localhost:3000/homepage", {user:username, pass:password}).then((res) => {
           console.log("Success!");
         });
       }

      const handleChangeUsername = (e) => {
         setUsername(document.getElementById('userVar').value);
      }

      const handleChangePassword = (e) => {
         setPassword(document.getElementById('passVar').value);
         
      }

    return (
    <div>
         <Logo style={{ height: 100, width: 95, display: 'block' ,margin: 'auto' }}  id = "myLogo" />
         <br></br>
         <br></br>
         
         <div style={{ float: 'left', width: "60%", justifyContent: 'center' }}>
            
            <h2 style={{ fontSize: 40 , textAlign: 'center' }}> Guard your digital keys with the most trusted password manager on the market</h2>
            {(typeof data.title ==='undefined') ? (
                  <h1>Undefined</h1>
               ):(
                     data.title.map((title,i) => (
                        
                        <h1 style={{ fontSize: 70 , textAlign: 'center'}} key ={0}>{title}</h1>
                        ))
            )}
            
         </div>
         <div style={{ float: 'left', width: "37.33%", textAlign:"center" }} className="loginWidget">
            <h1 style={{ top: "50%", fontSize: 40 , textAlign: 'center' }}> Log In to ShieldPass</h1>
            <div> 
               <label style = {{display: 'block' , marginLeft: '-42%'}}>Username</label>
               <label>
                  <input placeholder = 'Username' name = 'user' id = 'userVar' onChange = {handleChangeUsername} style={{alignItems: "center", width: "300px", height: "35px", fontSize: 16, borderWidth: 1, borderRadius: 12, paddingHorizontal: 15, display: 'block' ,margin: 'auto'}} />
               </label>
               <br></br><br></br>
               <label style = {{display: 'block' , marginLeft: '-42%'}}>Password</label>
               <label >
                  <input type = "password" placeholder = 'Password' name = 'pass' id = 'passVar' onChange = {handleChangePassword} style={{ width: "300px", height: "35px", fontSize: 16, borderWidth: 1, borderRadius: 12, paddingHorizontal: 15, display: 'block' ,margin: 'auto'}} />
               </label>
               <br></br>
               <button className='buttonTemplate' style ={{width: "200px"}} type = "submit" onClick={handleSubmit}>Log In</button>
               <br></br>
                  <p style = {{display: 'block' , margin: 'auto'}}>OR</p>
               <button className='buttonTemplate' style ={{width: "200px"}} id='signUp'>Sign Up</button>
            </div>
         </div>
    </div>

    
  )
}

export default LogIn