import React, { useEffect } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile } from 'firebase/auth';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const SignIn = () => {
  // CHECK USER AUTH
  const [user,login] = useAuthState(auth)
 // REDIRECT FUNCTION
 const navigate = useNavigate();

// GOOGLE  AUTH
  const googleProvider = new GoogleAuthProvider()

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth,googleProvider)
        

      if(user){
        navigate(`/`);  
      }

      console.log(result.user)
    } catch (error) {
      
    }
  }

//   FACEBOOK
  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credential = await FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
    
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    if(user){
        navigate(`/`);  
      }
  })

  return (
    <>
 


<div className="flex h-screen">
        <div className="m-auto">
            <div className="card bg-white p-4 rounded-lg">
                 <p className='text-gray-700 font-medium text-start py-2 pb-5'>Login via socials</p>
                    <div className="flex flex-col  gap-3">
                    
                            <button onClick={GoogleLogin} className='bg-gray-800 px-5  flex items-center gap-2 rounded-md'>
                                <div className='text-xl'><FcGoogle/></div>
                                <p className='text-white p-2 font-medium'>Sign in with Google</p>
                            </button>
                            <button  onClick={FacebookLogin} className='bg-gray-800 px-5  flex items-center gap-2 rounded-md'>
                                <div className='text-xl text-sky-700'><FaFacebook/></div>
                                <p className='text-white p-2 font-medium'>Sign in with Facebook</p>
                            </button>
                     
                    </div>
            </div>
        </div>
    </div>
    </>
   
  )
}

export default SignIn