import React from 'react'
import './Profile.css'
import Sidebar from '../SIDEBAR/Sidebar'
import { CiSettings } from "react-icons/ci";


const Profile = () => {
  return (
    <div className='profile-box'>
    <Sidebar/>
    <div className='profile-mainbox'>
        <div className='profile-dp'>
        <img src='https://wallpapers.com/images/hd/virat-kohli-in-sunglasses-yc8dfpcjssp3s4se.jpg' className='dp-img'/>
        <div className='dp-idname'>
          <div style={{color:"white",display:"flex", justifyContent:"space-around"}}> <h3 style={{marginTop:"10px"}}>happy79936</h3>
               <button style={{ height:"30px",borderRadius:"13px",backgroundColor:"rgb(68,63,63)", marginTop:"12px", color:"white", textAlign:"center"}}>
                Edit Profile</button>
                 <button style={{ height:"30px",borderRadius:"16px",backgroundColor:"rgb(68,63,63)", marginTop:"12px", color:"white", textAlign:"center"}}>
                  view archive</button>
                  <CiSettings style={{fontSize:"30px", fontWeight:"bold", marginTop:"12px"}}/>
                 </div>
        </div>
        </div>
        <div className='profile-post'></div>
    </div>
    </div>
  )
}

export default Profile
