import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="card bg-light m-1 pb-2" style={{width: '14rem'}}>
        <div><img className='card-img-top' src={props.img} alt='card image cap'></img></div>
        <div className='card-body' ><h1 className='card-title'>{props.title}</h1>
        <p className='card-text'>{props.text}</p>
        <p className='card-text'>{props.rate}</p></div>
        <Link to={`/view/${props.id}`}
         className="btn btn-outline-Light btn-sm"
         state={{product: props}}>View</Link>
    </div>
  )
}

export default Card