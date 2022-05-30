import React from 'react'
import Tag from './Tag/Tag'

const Card = ({ ...card }) => {
    return (
        <div className="card #ffe0b2 orange lighten-4">
            <div className='left'>
                <button className="btn-flat waves-effect waves-light"><i className="material-icons">clear</i></button>
                {card.tagsList.map(tag => (
                    <Tag
                        key={tag.id}
                        {...tag}
                    />
                ))}
            </div>
            <div className="card-content black-text card-padding">
                <p className='card-p'>{card.description}</p>
            </div>
        </div>
    )
}

export default Card