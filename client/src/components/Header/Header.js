import React from 'react'
import '../App.css'

const Header = () => {
    return (
        <header className="center">
            <nav className="teal lighten-3 center" role="navigation">
                <span id="logo-container" className="brand-logo">What to do ?</span>
                {/* <div className="nav-wrapper container">
                    <ul className="right hide-on-med-and-down">
                        <li className='black-text'>FUTUR LOG ?</li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li className='black-text'><span >FUTUR LOG ?</span></li>
                    </ul>
                    <span data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></span>
                </div> */}
            </nav>
        </header>
    )
}

export default Header