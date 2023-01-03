import { NavLink } from 'react-router-dom';
import './css/navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink to='/random-browser'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/random-browser/docs'>Documentation</NavLink>
                </li>
                <li>
                    <NavLink to='/random-browser/downloads'>Downloads</NavLink>
                </li>
            </ul>
        </nav>
    );
}