import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

function ViewProduct() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-danger" role="alert">
          🔍 Product not found. Please go back.
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm">
        <img 
          src={product.img} 
          className="card-img-top" 
          alt={product.title} 
          style={{ objectFit: 'cover', maxHeight: '300px' }} 
        />
        <div className="card-body">
          <h3 className="card-title mb-3">{product.title}</h3>
          <p className="card-text mb-4" style={{ whiteSpace: 'pre-wrap' }}>
            {product.description || product.text}
          </p>
          <div className="d-flex justify-content-between flex-column align-items-center mb-3">
            <span className="badge bg-success px-3 py-2" style={{ fontSize: '1.1rem' }}>
              ⭐ {product.rate}
            </span>
            {/* to be deleted and replaced in dashboard page */}

            <button 
              className="btn btn-outline-secondary btn-sm mt-3"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
