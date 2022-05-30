import React from 'react'
import Tag from './Tag/Tag'

const Card = ({ ...card }) => {
    // console.log(card);
    const { color } = card

    return (
        <div className="card">
            <div className='left'>
                <button className="btn-flat waves-effect waves-light"><i className="material-icons">clear</i></button>
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