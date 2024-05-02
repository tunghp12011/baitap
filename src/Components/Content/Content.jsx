import React, { useState } from 'react'

const Content = (props) => {
    const {mau} = props
    const[ho,setHo] = useState('')
    const[ten,setTen] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log({ho : ho, ten : ten})
    }
  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">ho</label>
        <input value={ho} onChange={(e)=> setHo(e.target.value)} className='border border-[#333]' type="text" name ="" id=""placeholder='nhap ho ten'  ></input>
        <label htmlFor="">Ten</label>
        <input value={ten} onChange={(e)=> setTen(e.target.value)} className='border border-[#333]' type="text" name ="" id=""placeholder='Ten'  ></input>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Content
