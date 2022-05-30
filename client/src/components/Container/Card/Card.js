import React from 'react'
import { useDispatch } from 'react-redux';

import { actionDeleteCards } from '../../../Redux/Actions/ListsActions';
import Tag from './Tag/Tag'

const Card = ({ ...card }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(actionDeleteCards(card.id, card.list_id));
    }

    // console.log(card);
    const { color } = card

    return (
        <div className="card">
            <div className='left'>
                <button className="btn-flat waves-effect waves-light" onClick={handleClick}><i className="material-icons">clear</i></button>
                {card.tagsList.map(tag => (
                    <Tag
                        key={tag.id}
                        {...tag}
                    />
                ))}
            </div>
            <div className="card-content black-text card-padding" style={{ background: `${color}` }}>
                <p className='card-p'>{card.description}</p>
            </div>
        </div>
    )
}

export default Card