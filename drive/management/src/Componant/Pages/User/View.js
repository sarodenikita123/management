import React, { useEffect } from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';


function View(){
    const [user, setUser] = useState([]);

    async function fetchData(){
    const result = await axios.get('http://localhost:5000/users')
    setUser(result.data)
  }
      
  useEffect(()=>{
    fetchData();
},[])
  
    
  return (
    
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
            {
                    user.map((obj)=>{
                        return(
                            <tr>
                                
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.adress}</td>
                                <td>{obj.contact}</td>
                                <td>{obj.city}</td>

                                 <td>
                                    <NavLink to={`/update/${obj.id}`}><button className="btn btn-outline-warning btn-sm me-3">UPDATE</button></NavLink>
                                    <NavLink to={`/delete/${obj.id}`}><button className="btn btn-outline-danger btn-sm" >DELETE</button></NavLink>
                                </td>
                            </tr>
                    )
                    })
                }
            </tbody>
        </table>
  )

}
export default View