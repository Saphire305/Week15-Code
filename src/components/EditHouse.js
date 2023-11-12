import axios from 'axios';
import React, { useEffect, useState } from 'react'

function EditHouse({ house, url}) {

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
      let prop = e.target.name;
      let value = e.target.value;
      setFormData(prev => ({...prev, [prop]: value}))
  }

  const showFormData = (e) => {
      e.preventDefault();
      house.rooms.push(formData);
      axios.put(`${url}/${house._id}`, house)
      setEditMode(false);
      
      // setHouses(prev => [...prev, house])
  }

return (
  <div className='btnDiv'>
      
      {editMode ? 
          <form>
              <input className="form-control" onChange={handleChange} type='text' placeholder='Name of new room' name='name'/>
              <input className="form-control" onChange={handleChange} type='text' placeholder='Area' name='area'/>
              <button className='btn btn-primary' onClick={showFormData}>Create</button>
          </form> : <button className='btn btn-primary' onClick={() => setEditMode(true)}>Edit</button>}
      

  </div>
)
}

export default EditHouse