import React from 'react'
import './Post.css'
import { FaRegHeart,FaRegComment,FaRegBookmark } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { MdMoreHoriz } from "react-icons/md";
import Sidebar from '../SIDEBAR/Sidebar';

const Post = ({mahi}) => {
  return (
    <div>
        <div className='home-post'>
          <div className='post-dp'>
          <div style={{display:'flex',gap:'4px', alignItems:'center'}}>
            <img src={mahi.dp}  className='post-dp-img'/>
          <h3 className='post-username'> {mahi.username}</h3></div>
          <div>
               <MdMoreHoriz style={{marginRight:"20px",fontSize:"30px", fontWeight:"bold"}}/></div></div>
               <div>
          <img src={mahi.postimg}  className='post-img'/></div>
          <div className='post-contant'>
          <FaRegHeart  style={{fontSize:"30px", fontWeight:"bold"}}/>
          <RiMessengerLine style={{fontSize:"30px", fontWeight:"bold"}}/>
          <FaRegComment style={{fontSize:"30px", fontWeight:"bold"}}/>
          <FaRegBookmark className='savebutton'/>
          <div className={mahi.likes}style={{marginTop:"10px"}}>2344 likes</div>
          <div className='highlates'>{mahi.highlates}</div>
          <div className='comment'> {mahi.comments}</div>
          </div>
        </div>
      </div>
    
  )
}

export default Post
