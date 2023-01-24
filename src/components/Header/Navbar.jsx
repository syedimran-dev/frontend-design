import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-nav">
            <div className="container">
                <a className="navbar-brand text-light" href="#">A-Games</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-md-5 search-bar align-items-center">
                        <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                        <input className='mb-1' placeholder="Type Something"  />
                    </form>
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-light active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light">Link</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light">Disabled</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar