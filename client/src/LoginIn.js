import React, { useState, useEffect} from 'react'
import { redirect, useNavigate } from 'react-router-dom';
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
         axios.post("http://localhost:3000/homepage", {
            user:username, pass:password
         })
         .then((res) => {
            if(res.data === "True"){
               useNavigate(`/passwords/${username}`)
            }
            else{
               console.log(":(((")
            }
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
         <div>
            <div style={{ float: 'center', width: "37.33%", textAlign:"center" }} className="loginWidget">
               <h1 style={{ top: "50%", fontSize: 40 , textAlign: 'center' }}> Log In to ShieldPass</h1>
               <div> 
                  <label style = {{display: 'block' , marginLeft: '-42%'}}>Username</label>
                  <label>
                     <input placeholder = 'Username' name = 'user' id = 'userVar' onChange = {handleChangeUsername} style={{alignItems: "center", width: "300px", height: "35px", fontSize: 16, borderWidth: 1, borderRadius: 12, paddingHorizontal: 15, display: 'block' ,margin: 'auto'}} />
                  </label>
                  <label style = {{display: 'block' , marginLeft: '-42%'}}>Password</label>
                  <label >
                     <input type = "password" placeholder = 'Password' name = 'pass' id = 'passVar' onChange = {handleChangePassword} style={{ width: "300px", height: "35px", fontSize: 16, borderWidth: 1, borderRadius: 12, paddingHorizontal: 15, display: 'block' ,margin: 'auto'}} />
                  </label>
                  <button className='buttonTemplate' style ={{width: "200px"}} type = "submit" onClick={handleSubmit}>Log In</button>
                  <p style = {{display: 'block' , margin: 'auto'}}>OR</p>
                  <button className='buttonTemplate' style ={{width: "200px"}} id='signUp'>Sign Up</button>
               </div>
            </div>
         </div>
    </div>

    
  )
}

export default LogIn