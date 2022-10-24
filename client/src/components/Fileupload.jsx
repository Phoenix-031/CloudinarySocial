import React, { useState } from 'react'

const Fileupload = () => {

  const [previewimg, setPreviewimg] = useState("")


  const handleUpload = (e) => {


    const file = e.target.files[0]
    previewFile(file)

  } 

  const previewFile = (file)=> {
    const render = new FileReader()
    render.readAsDataURL(file)
    render.onloadend = () => {
      setPreviewimg(render.result)
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    if(!previewimg) return;

    try {

      fetch(`https://arcane-ravine-76025.herokuapp.com/api/upload/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({image:previewimg})
      }).then((res)=>{return res.json()})
       .then((data) =>{
        console.log(data)
       })
      
    } catch (error) {
      console.error(error)
    }
  }
  
  
  return (
    <div className='mt-2 flex justify-center items-center pt-2 flex-col gap-4 font-mono font-bold text-xl'>
      <h1 className='font-mono font-bold text-xl'>Fileupload</h1>
      <form className='flex flex-col gap-4 justify-center items-center' onSubmit={handleSubmit}>
        <label htmlFor="fileupload">Choose a file</label>
        <input id="fileupload" 
                type="file" 
                name='imageupload'
                onChange={handleUpload}
               />
        <button className='bg-gray-700 rounded-lg px-4 py-2 font-semibold text-lg font-mono hover:bg-slate-400' type='submit'>
          Submit
        </button>
      </form>
      {previewimg && (
        <img src={previewimg} alt="uploaded file" className='w-80 h-80 rounded-full object-cover'/>
      )}
    </div>
  )
}

export default Fileupload