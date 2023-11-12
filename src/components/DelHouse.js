import axios from 'axios'
import React from 'react'

function DelHouse({ house, url}) {

  

  return (
    <div className='btnDiv'>
        <button onClick={() => {
          axios.delete(`${url}/${house._id}`)
        }} className='btn btn-danger'>Delete</button>
    </div>
  )
}

export default DelHouse