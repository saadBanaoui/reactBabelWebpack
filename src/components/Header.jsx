import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navabr-default">
                <ul className="nav navbar-nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                </nav>
            </header>
        )
    }
}

export default Header