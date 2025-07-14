import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [user, changeUser] = useState(
        [
            
        ]
    )

    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response)=>{
                changeUser(response.data)
            }
        ).catch()
    }



    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <h1 align="center">VIEW USER</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">NAME</th>
                                            <th scope="col">USERNAME</th>
                                            <th scope="col">EMAIL</th>
                                            <th scope="col">STREET</th>
                                            <th scope="col">SUITE</th>
                                            <th scope="col">CITY</th>
                                            <th scope="col">ZIP CODE</th>
                                            <th scope="col">LAT</th>
                                            <th scope="col">LNG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.map((value, index) => (
                                        <tr key={index}>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.name}</td>
                                            <td>{value.username}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address.street}</td>
                                            <td>{value.address.suite}</td>
                                            <td>{value.address.city}</td>
                                            <td>{value.address.zipcode}</td>
                                            <td>{value.address.geo.lat}</td>
                                            <td>{value.address.geo.lng}</td>
                                        </tr>
                                    ))}
                                                    
                                                    
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View