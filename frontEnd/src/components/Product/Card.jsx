import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="card m-2 shadow-sm" style={{ maxWidth: '18rem', borderRadius: '10px' }}>
      <img 
        src={props.img} 
        className="card-img-top" 
        alt={props.title} 
        style={{ height: '180px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate" title={props.title} style={{ fontWeight: '600' }}>
          {props.title}
        </h5>
        <p className="card-text text-muted" style={{ flexGrow: 1, fontSize: '0.9rem' }}>
          {props.text.length > 80 ? props.text.slice(0, 80) + '...' : props.text}
        </p>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-success px-2 py-1" style={{ fontSize: '0.9rem' }}>
            ⭐ {props.rate}
          </span>
        </div>
        <Link 
          to={`/view/${props.id}`} 
          state={{ product: props }}
          className="btn btn-outline-primary btn-sm mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
