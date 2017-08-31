import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar">
                    <ul className="navbar__nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header