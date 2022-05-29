import React from 'react'
import Card from '../Card/Card'

const List = () => {
    return (
        <div className="col s6 grey lighten-2 list-section">
            <div className="card #bcaaa4 brown lighten-3">
                <div className="card-content black-text list-content center">
                    <span className="card-title center">List Title</span>
                    <div className="btn-list">
                        <button className="btn-floating btn-tiny waves-effect waves-light red" ><i className="material-icons">add</i></button>
                        <button className="btn-flat waves-effect waves-light"><i className="material-icons">clear</i></button>
                    </div>
                </div>
                <div className="col s12">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default List