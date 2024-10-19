import React, { useRef } from 'react'
import './Sinup.css'
import { useNavigate } from 'react-router-dom'
import Login from '../LOGIN/Login'

const Sin = () => {
  let mail=useRef()
  let fname=useRef()
  let uname=useRef()
  let password=useRef()
  let navigate=useNavigate()
  
  const sinup = ()=>{
   if(mail.current.value ==0||fname.current.value ==0||uname.current.value==0||password.current.value==0){
    console.log("fill all the boxes")
   }else{
    const userid={
      'mail':mail.current.value,
      'fullname':fname.current.value,
      'username':uname.current.value,
      'password':password.current.value,
    }
    console.log(userid)
    navigate('/Login')
   }
    
  }
 
  return (
    <div>
        <div className="log-box">
      <div className="log-chil">
            <div className="chil-1">
             <h1>instagram</h1>
             
             <button> <a href='/Login'>log-in</a></button>

             <h2 className="or">or</h2>
             <input type="Mail" placeholder="Mail or Nume" ref={mail} />
             <input type="text" placeholder=" full name" ref={fname} />
             <input type="text" placeholder="username" ref={uname}/>
             <input type="password" placeholder="Passwod" ref={password} />
          
            </div>
            <div className="chil-2">
                <button onClick={sinup} >Sin-up</button>
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

export default Sin
