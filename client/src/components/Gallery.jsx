import React, { useEffect, useState } from 'react'
import Image from './Image'

const Gallery = () => {

    const [imageCol,setimageCol] = useState()
    
    const getdata = async () => {
        try {

            const res = await fetch(`https://arcane-ravine-76025.herokuapp.com/api/gallery`);
            const data = await res.json()
            setimageCol(data.imgdata)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        getdata()
    },[])
    
  return (
    <>
    <div className='flex justify-center items-center w-full p-8 h-max border-black gap-4 flex-wrap'>
        {imageCol && imageCol.map((img,index) => (
            <Image imagedata = {img}/>
        ))
        }
    </div>
    </>
  )
}

export default Gallery