import React from 'react'

const Tag = ({ ...tag }) => {
    // console.log(tag)
    const { color } = tag

    return (
        <span style={{ color: `${color}` }}>{tag.name}</span>
    )
}

export default Tag