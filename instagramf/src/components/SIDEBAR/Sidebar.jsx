import React from 'react'
import { IoHomeOutline,IoMenuOutline } from "react-icons/io5";
import { FaSearch,FaRegCompass,FaRegHeart  } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { LuPlusSquare } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div>
      <div class="d-flex flex-column" style={{width:"20vw", height:"100vh",backgroundColor:"black"}}>
    <a href="/" class="d-flex align-items-center" style={{height:"7%", width:"70%"}}>
      <svg class="bi pe-none me-2" width="40" height="25"><use xlink:href="#bootstrap"></use></svg>
     <img src='https://www.logolynx.com/images/logolynx/82/82abee4b6db4025c07209adec0d62acd.png' style={{height:"90%",width:"90%", marginRight:"20px", marginTop:"20px"}}/>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column " >
      <li class="nav-item" >
        <a href="/" class="nav-link " aria-current="page"style={{color:"white"}}>
          <IoHomeOutline style={{marginLeft:"20px", marginRight:"20px",fontSize:"20px", fontWeight:"bold"}}/>
          Home
        </a>
      </li>
      <li class="nav-item" style={{marginTop:"15px"}}>
        <a href="#" class="nav-link " aria-current="page" style={{color:"white"}}>
          <FaSearch style={{marginLeft:"20px", marginRight:"20px",fontSize:"20px", fontWeight:"bold"}}/>
          Search
        </a>
      </li>
      <li class="nav-item" style={{marginTop:"15px"}}>
        <a href="#" class="nav-link " aria-current="page" style={{color:"white"}}>
          <FaRegCompass  style={{marginLeft:"20px", marginRight:"20px",fontSize:"20px", fontWeight:"bold"}}/>
          Ecplor
        </a>
      </li>
      <li class="nav-item" style={{marginTop:"15px"}}>
        <a href="#" class="nav-link " aria-current="page" style={{color:"white"}}>
          <BiMoviePlay  style={{marginLeft:"20px", marginRight:"20px",fontSize:"20px", fontWeight:"bold"}}/>
          Reels
        </a>
      </li>
      <li class="nav-item" style={{marginTop:"15px"}}>
        <a href="#" class="nav-link " aria-current="page" style={{color:"white"}}>
          <RiMessengerLine style={{marginLeft:"20px", marginRight:"20px",fontSize:"20px", fontWeight:"bold"}}/>
          Messages
        </a>
      </li>
      <li class="nav-item" style={{marginTop:"15px"}}>
        <a href="#" class="nav-link " aria-current="page" style={{color:"white"}}>
          <FaRegHeart  style={{marginLeft:"20px", marginRight:"20px",fontSize:"20px", fontWeight:"bold"}}/>
          Notifications
        </a>
      </li>
      <li class="nav-item" style={{marginTop:"15px"}}>
        <a href="#" class="nav-link " aria-current="page" style={{color:"white"}}>
          < LuPlusSquare   style={{marginLeft:"20px", marginRight:"20px",fontSize:"20px", fontWeight:"bold"}}/>
          Creat 
        </a>
      </li>
      <li class="nav-item" style={{marginTop:"15px"}}>
        <a href="/Profile" class="nav-link " aria-current="page" style={{color:"white"}}>
          <img src='https://wallpapers.com/images/hd/virat-kohli-in-sunglasses-yc8dfpcjssp3s4se.jpg' style={{marginLeft:"20px", marginRight:"20px",height:"25px",width:"25px", borderRadius:"30px"}}/>
          Profil
        </a>
      </li>
      <li class="nav-item" style={{marginTop:"20px"}}>
        <a href="#" class="nav-link " aria-current="page" style={{color:"white"}}>
          < IoMenuOutline  style={{marginLeft:"20px", marginRight:"20px",fontSize:"20px", fontWeight:"bold"}}/>
          More
        </a>
      </li>
    </ul>
    {/* <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div> */}
  </div>
    </div>
  )
}

export default Sidebar
