import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="container-fluid">
            <nav>
                <ul>
                    <li>
                        <NavLink id='link' to={"/"}>ALL</NavLink>
                    </li>
                    <li>
                        <NavLink id='link' to={"/fullstack"}>FULL STACK DEVELOPMENT</NavLink>
                    </li>
                    <li>
                        <NavLink id='link' to={"/datascience"}>DATA SCIENCE</NavLink>
                    </li>
                    <li>
                        <NavLink id='link' to={"/cybersecurity"}>CYBER SECURITY</NavLink>
                    </li>
                    <li>
                        <NavLink id='link' to={"/career"}>CAREER</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar