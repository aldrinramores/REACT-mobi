import React, { useState } from 'react'
import { RiSearch2Line, RiUser4Line,RiMenu5Line,RiHomeLine, RiTvLine, RiBookmarkLine, RiUserLine } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase';
const Navbar = () => {
 



  // CHECK USER AUTH
  const [user,login] = useAuthState(auth)
  console.log(user)
  const [showNav, setShowNav] = useState(false)
  
  // SET PARAM ID
  const [query, setQuery] = useState("")

  // REDIRECT FUNCTION
  const navigate = useNavigate();
  
  // MENU SHOW
  const showMenu = () => {
    setShowNav(true)
  }
  const hideNav = () => {
    setShowNav(false)
  }
  const goSignInPage = () => {
    navigate(`/sign-in`);  
  }

  // GO TO SPECIFIC ID
  const submitQuery = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`);  
    console.log(query)
  }

  return (
  <>
    <div className='max-w-7xl mx-auto py-10 '>
      {/* LOGO */}
      <div className='flex justify-between items-center px-5 gap-3 md:gap-5'>
        <div className="flex items-baseline gap-4">
        <button onClick={showMenu} className='text-white text-3xl'><RiMenu5Line /></button>
        <Link to={"/"}><h1 className='hidden md:block logo_title text-4xl md:text-6xl text-gray-100 cursor-pointer '>mobi</h1></Link>
        </div>
          {/* SEARCH  */}
          <div className="searchBox text-white questrial_fnt w-[100%] md:w-[50%] ">
            <form onSubmit={submitQuery} className='flex items-center gap-2'>
                <input onChange={(e) => setQuery(e.target.value)} type="text" className='bg-transparent rounded-2xl border-2 focus:outline-none p-2 w-[100%]' placeholder='Enter a keyword...'  required/>
                <button className='text-2xl '><RiSearch2Line/></button>
            </form>
          </div>
            {/* SIGN IN */}
            <div className=' flex justify-between items-center gap-2  text-white cursor-pointer  transition-all questrial_fnt text-xs font-bold hover:scale-110'>
              <span className='hidden md:block md:text-2xl'><RiUser4Line/></span> 
            {user ? (<button onClick={() => auth.signOut()}>Logout</button>) : (<button onClick={goSignInPage}>Login</button>)}  
            </div>
       </div>
    </div>
    
    <div onClick={hideNav} className={`close_menu fixed top-0 bg-black/70 z-40 h-[100vh] w-[100vw] transition-all ease-in-out delay-150 ${showNav ? "block opacity-90 " : "hidden opacity-0"} `}></div>

    <div className={`menu fixed top-0 z-40 bg-[#09203F] h-[100vh] text-white font-mono text-md  md:text-2xl ${showNav ? "showNav" : "hideNav"} `}>
      <ul className='mt-10'>
        <h1 className='block md:hidden text-center logo_title text-6xl'>mobi</h1>
        <Link to={"/"}>
          <li className="flex items-center gap-2 py-5 my-2 md:my-10 px-10  hover:bg-slate-700">
              <RiHomeLine/>
              <p>Home</p>
          </li>
        </Link>

        <Link to={"/tv-shows"}>
          <li className="flex items-center gap-2 py-5 my-2 md:my-10 px-10 hover:bg-slate-700">
              <RiTvLine/>
              <p>Tv Shows</p>
          </li>
        </Link>
   
        <Link to={"/bookmarks"}>
          <li className="flex items-center gap-2 py-5 my-2 md:my-10 px-10 hover:bg-slate-700">
              <RiBookmarkLine/>
              <p>Bookmarks</p>
          </li>
        </Link>
      

        <li className="flex items-center gap-2 py-5 my-2 md:my-10 px-10 hover:bg-slate-700">
        {user ? (<RiUserLine/>) : (<RiUserLine/>) }
        <p>{user ? `${user.displayName}` : (<button onClick={goSignInPage}> Account</ button>)}</p>
           
         
        </li>
      </ul>
    </div>

 

   
  </>
  )
}

export default Navbar