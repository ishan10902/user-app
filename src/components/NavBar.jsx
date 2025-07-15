import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#003366' }}>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>Add User</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/search" style={{ color: 'white' }}>Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/delete" style={{ color: 'white' }}>Delete</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/view" style={{ color: 'white' }}>View All</Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar