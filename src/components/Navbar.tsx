import { NavLink } from 'react-router-dom';
import './css/navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink to='/random-browser-page'>Main Page</NavLink>
                </li>
                <li>
                    <NavLink to='/random-browser-page/docs'>Documentation</NavLink>
                </li>
                <li>
                    <NavLink to='/random-browser-page/downloads'>Downloads</NavLink>
                </li>
            </ul>
        </nav>
    );
}