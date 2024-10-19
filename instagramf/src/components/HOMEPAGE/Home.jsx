import React from 'react'
import './home.css'
import Sidebar from '../SIDEBAR/Sidebar'
import Post from '../POST/Post'



const Home = () => {

let postsdata=[{
  username:'virat kohli',
  dp:'https://wallpapers.com/images/hd/virat-kohli-in-sunglasses-yc8dfpcjssp3s4se.jpg',
  postimg:"https://images.assettype.com/freepressjournal/2019-08/73f24ccc-2af8-477e-885e-80c90e7b7bd0/Virat_Kohli_century.jpg?rect=0%2C0%2C3228%2C1816",
  likes:34449,
  highlates:'super',
  comments:'best player',

},
{
  username:'ms dhoni',
  dp:'https://th.bing.com/th/id/R.4284104b69ea78a9c41fe953f134ea13?rik=shQVwwLl2yU%2fmA&riu=http%3a%2f%2fwww.suntiros.com%2fwp-content%2fuploads%2f2017%2f09%2fMahendra-Singh-Dhoni-Cute-Handsame-Wallpapers.jpg&ehk=jrJplsAl1D%2bFKr5KXLEPe3q1EQDm3PKK%2fmJSTVJK5Xk%3d&risl=&pid=ImgRaw&r=0',
  postimg:'https://assets.telegraphindia.com/telegraph/367ec959-2736-4def-92e3-a68b2304a8e7.jpg',
  likes:34449,
  highlates:'super',
  comments:'best player',

},
{
  username:'NTR',
  dp:'https://wallpapercave.com/wp/wp6339822.jpg',
  postimg:"https://wallpapercave.com/wp/wp5247634.jpg",
  likes:34449,
  highlates:'NTR',
  comments:'HERO',

},
{
  username:'NTR',
  dp:'https://wallpapercave.com/wp/wp6339822.jpg',
  postimg:"https://wallpapercave.com/wp/wp5247634.jpg",
  likes:34449,
  highlates:'NTR',
  comments:'HERO',

}
]

  return (
    <div>
      <div style={{display:'flex'}}>
     <Sidebar/>
     <div className='homecontant'>
      {postsdata.map((mahi)=><Post mahi={mahi}/>)}
      </div>
     </div>
     </div>
  )
}

export default Home
