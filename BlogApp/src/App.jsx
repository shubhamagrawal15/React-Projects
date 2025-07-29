
import { useState,useEffect } from 'react'
import{useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
import { Header,Footer } from './Components';
import {Outlet} from 'react-router-dom'

function App() {

  const [loading,setLoading]=useState(true);

  const dispatch = useDispatch()



  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])


  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap  content-between bg-gray-400'>
      <div className='w-full block'>
        <Header></Header>
        <main>
          TODO: <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </div>
  ):<div className="h-screen flex items-center justify-center text-xl font-semibold">
      Loading...
    </div>
  
}

export default App
