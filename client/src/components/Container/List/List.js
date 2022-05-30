import React from 'react'
import { useDispatch } from 'react-redux';
import { actionDeleteLists } from '../../../Redux/Actions/ListsActions';

import Card from '../Card/Card'

const List = ({ ...list }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(actionDeleteLists(list.id));
    }

    return (
        <div className="col s6 grey lighten-2 list-section">
            <div className="card #bcaaa4 brown lighten-3">
                <div className="btn-list right">
                    <button className="btn-floating btn-tiny waves-effect waves-light red" ><i className="material-icons">add</i></button>
                    <button className="btn-flat waves-effect waves-light" onClick={handleClick}><i className="material-icons">clear</i></button>
                </div>
                <div className="card-content black-text list-content center">
                    <span className="card-title center">{list.name}</span>
                </div>
                <div className="col s12">
                    {list.cardsList.map(card => (
                        <Card
                            key={card.id}
                            {...card}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default List