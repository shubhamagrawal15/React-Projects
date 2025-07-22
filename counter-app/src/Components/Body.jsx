import React, { useState } from 'react'

function Body() {

  const[value,setValue]=useState(13);

  function handleAddBtn(){
    setValue((prev)=>{
      if(prev<20){
        return prev+1;
      }
      else
        return prev;
      })
  }
   function handleRemoveBtn(){
    setValue((prev)=>{
      if(prev>0){
         return prev-1;
      }else{
        return prev;
      }
    })
   }
  function oddEven(){
  return (value%2==0) ?"even" : "odd" 
  }

  return (
    <div  className='p-4 m-4 bg-pink-100' >
    <div className="w-full bg-fuchsia-200 p-2">
      Counter:{value}
    </div>
    <div>Even or Odd :{oddEven()}</div>

    <button onClick={handleAddBtn} className='p-4 rounded-2xl m-4 bg-emerald-500'>Add</button>
  
    <button onClick={handleRemoveBtn} className='rounded-2xl bg-red-400 p-4'>Remove</button>

    </div>
  )
}

export default Body