import React, { useState, useEffect} from 'react'
import './App.css'
import { ReactComponent as Logo } from './media/ShieldPass.svg'


function viewPasswords(){
      const [data, setData] = useState([{}])
      
      useEffect(()=>{
            fetch("/passwords").then(
               res => res.json()
            ).then(
                  data => {
                     setData(data)
                     console.log(data)
                  }
            )
         }, [])
         return (
            <div>
                 <Logo style={{ height: 100, width: 95, display: 'block' ,margin: 'auto' }}  id = "myLogo" />
            </div>
         )

}

export default viewPasswords