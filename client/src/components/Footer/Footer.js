import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer teal lighten-2 center">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h5 className="white-text">About the project</h5>
                        <p className="grey-text text-lighten-4">The What to do project is based on a school exercise done in Vanilla JavaScript. It has been completely redesigned with ReactJS and NodeJS</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Made by <a className="orange-text text-lighten-3" href="https://salleanthony.fr/" target="_blank" rel="noreferrer">Salle Anthony</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer