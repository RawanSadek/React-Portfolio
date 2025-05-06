import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import about from '../../assets/about-BgAkqdr2.jpg';

export default function Sidebar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
                <button className="navbar-toggler mb-3 z-2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse flex-column text-uppercase" id="sidebarMenu">
                    <img src={about} alt="portfolio-img" className='portfolio-img mb-4' />

                    <h4 className='text-capitalize'>Jackson Ford</h4>
                    <p className='text-uppercase title text-secondary'><Link to="error" className='text-decoration-none active'>UI/UX/Designer</Link> in Philippines</p>

                    <ul className="nav flex-column w-100 text-center">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive || location.pathname === '/' ? "nav-link text-secondary active" : "nav-link text-secondary"} to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to="/about">about</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to="/skills">skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to="/exp">experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-secondary" to="/work">work</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
