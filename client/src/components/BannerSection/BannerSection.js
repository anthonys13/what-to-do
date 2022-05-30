import React from 'react'

const BannerSection = () => {
    return (
        <>
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">Where do we start ?</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">Build your schedule in a reactive way!</h5>
                    </div>
                    <div className="row center">
                        <button data-target="modal1" id="download-button" className="btn-large waves-effect waves-light orange modal-trigger">Create List</button>
                    </div>
                </div>
            </div>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>CREATE LIST</h4>
                </div>
                <div className="modal-footer">
                    <button className="modal-close waves-effect waves-green btn-flat">Agree</button>
                </div>
            </div>
        </>
    )
}

export default BannerSection