import React from 'react'

const Image = (imageval) => {
    
  return (
    <div className=''>
        <img src={imageval.imagedata.url} alt={imageval.public_id}  className='w-48 h-56 object-cover border-black'/>
    </div>
  )
}

export default Image