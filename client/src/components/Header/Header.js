import React from 'react'
import '../App.css'

const Header = () => {
    return (
        <header className="center">
            <nav className="teal lighten-3 center" role="navigation">
                <div className="nav-wrapper container"><span id="logo-container" className="brand-logo">What to do ?</span>
                    <ul className="right hide-on-med-and-down">
                        <li>FUTUR LOG ?</li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><span >FUTUR LOG ?</span></li>
                    </ul>
                    <span data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></span>
                </div>
            </nav>
        </header>
    )
}

export default Header