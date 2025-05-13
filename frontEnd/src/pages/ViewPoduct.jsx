import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ViewProduct() {
  const { id } = useParams()
  const location = useLocation()
  const product = location.state?.product

  if(!product){
    return <div className='text-center mt-4 bg-danger'>🔍 Product not found. Please go back.</div>
  }
return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <img src={product.img} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>Rating:</strong> {product.rate}</p>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct
