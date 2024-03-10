import React from 'react'
import loading from './loading.gif'
const Spinner=()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" height={40} width={40}/>
      </div>
    )
  } 
export default Spinner
