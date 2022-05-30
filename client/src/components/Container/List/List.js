import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionDeleteLists } from '../../../Redux/Actions/ListsActions'

import Card from '../Card/Card'

const List = ({ ...list }) => {
    // console.log(list);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(actionDeleteLists(list.id));
    }

    const { name, cardsList } = list
    return (
        <>
            <div className="col s6 grey lighten-2 list-section">
                <div className="card #bcaaa4 brown lighten-3">
                    <div className='flex-list'>
                        <div className="btn-list right">
                            <button data-target="modal2" className="btn-floating btn-tiny waves-effect waves-light red modal-trigger"><i className="material-icons">add</i></button>
                            <button className="btn-flat waves-effect waves-light" onClick={handleClick}><i className="material-icons">clear</i></button>
                        </div>
                        <div className="card-content black-text list-content center" >
                            <span className="card-title center" id={list.id}>{name}</span>
                        </div>
                    </div>
                    <div className="col s12">
                        {cardsList.map(card => (
                            <Card
                                key={card.id}
                                {...card}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default List