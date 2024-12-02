import React, { useRef } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  let email=useRef()
  let password=useRef()
  let navigate=useNavigate()
  const loin= ()=>{
    if(email.current.value==0||password.current.value==0){
      console.log("error")
    }else{
      axios.post("http://localhost:8888/ig/auth/login",{
        'email':email.current.value,
        'password':password.current.value
      })
      
      console.log(user)
      navigate('/')
    }
    }
  
  return (
    <div>
      <div className="log-box">
        <div className="log-img">
        </div>
        <div className="log-chil">
            <div className="chil-1">
             <h1>instagram</h1>
             <input type="Mail" placeholder="Mail or Nume" ref={email}/>
             <input type="password" placeholder="Passwod" ref={password}/>
             <button onClick={loin}>log-in</button>

             <h2 className="or">or</h2>
             <h2><img src="https://www.meilleure-innovation.com/wp-content/uploads/2021/05/logo-facebook-png-transparent.jpg" alt=""></img><br />
             <a href="./sin-up.html">forgot passwod?</a></h2>
            </div>
            <div className="chil-2">
                <h2>dont have a account? sin up</h2>
            </div>
            <div className="chil-3">
                <h3>Get app</h3>
                <div className="chil-3-img">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt=""></img>
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt=""></img>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
