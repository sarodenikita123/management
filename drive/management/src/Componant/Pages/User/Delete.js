import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Delete() {
    const [user, setUser] = useState({});
    const {userId} = useParams();
    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setUser(result.data)
    }

    function deleteUser(data){
        axios.delete(`http://localhost:5000/users/${userId}`, data)
        navi('/show')
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
        <center><h1>Delete Form:</h1>
        <div className='container'>
            <h3>Do you want delete <span style={{'color': 'red'}}>{user.name} </span>record?</h3>
        
            <button onClick={()=>deleteUser()}className='btn btn-danger'>YES</button>
            
           <NavLink to='/show'> <button className='btn btn-warning'>NO</button></NavLink>
        </div>
        </center>
    </>
  )
}


export default Delete