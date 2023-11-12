import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Houses from './Houses';

function CreateHouse({url}) {

    const [createMode, setCreateMode] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        let prop = e.target.name;
        let value = e.target.value;
        setFormData(prev => ({...prev, [prop]: value}))
    }

    const showFormData = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post(url, formData)
        setCreateMode(false);
        <Houses />
    }

  return (
    <div>
        
        {createMode ? 
            <form>
                <input className="form-control" onChange={handleChange} type='text' placeholder='Name of new house' name='name'/>
                <button className='btn btn-primary createButton' onClick={showFormData}>Create</button>
            </form> : <button className='btn btn-primary createButton' onClick={() => setCreateMode(true)}>Create House</button>}
        

    </div>
  )
}

export default CreateHouse