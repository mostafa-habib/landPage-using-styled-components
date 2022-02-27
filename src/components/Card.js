import React from 'react'
import { CardStlyed } from './style/Card.styled'

function Card({item: {id,title,body,image}}) {
  return (
    <CardStlyed layout={id % 2 ===0 && 'row-reverse'}>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src={`./images/${image}`} alt='' />
        </div>
    </CardStlyed>
  )
}

export default Card