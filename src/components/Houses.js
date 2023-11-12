import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import EditHouse from './EditHouse';
import DelHouse from './DelHouse';

function Houses({url}) {

    const [houses, setHouses] = useState([]);

    useEffect(() => {

        const getHouses = async () => {
            let res = await axios.get(url);
            let houseURL = res.data

            for (let house of houseURL){
                setHouses(prev => [...prev, house]);
            }
        }

        getHouses();

    }, [])

    const removeRoom = (house, index) => {
        house.rooms.splice(index, 1);
        console.log(house.rooms)
        axios.put(`${url}/${house._id}`, house)
        setHouses(prev => [...prev, house])
    }

    const displayHouses = houses.map((house) => {
        return(
            <div className='container house my-4 py-1' key={house.id}>
                <div className='container row rounded titleDiv'>
                    <div className='col my-auto'><h2>{house.name}</h2></div>
                </div>

                {house.rooms.map((room, index) => {
                    return(
                        <div className='row my-2'>
                            <div className='col'>{room.name}</div>
                            <div className='col'>{room.area}</div>
                            <div className='col'><button onClick={() => removeRoom(house, index)} className='btn btn-danger trash'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                </svg></button></div>
                        </div>
                    )
                })}

                <div className='row my-auto'>
                    <div className='col'><EditHouse  house={house} url={url}/></div>
                    <div className='col'><DelHouse  house={house} url={url}/></div>
                </div>
                
            </div>
        )
        
    })

  return (
    <div className='container'>
        {displayHouses}
        
    </div>
  )
}

export default Houses