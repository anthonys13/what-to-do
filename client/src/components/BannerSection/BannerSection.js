import React from 'react'

const BannerSection = () => {
    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className="header center orange-text">Where do we start ?</h1>
                <div className="row center">
                    <h5 className="header col s12 light">Build your schedule in a reactive way!</h5>
                </div>
                <div className="row center">
                    <button id="download-button" className="btn-large waves-effect waves-light orange">Create List</button>
                </div>
            </div>
        </div>
    )
}

export default BannerSection