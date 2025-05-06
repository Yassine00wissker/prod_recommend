import React, { useEffect, useState } from 'react'
import Card from './Card'
function ProductList() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts([{
      title: "sqd",
      rate: "0.5",
      text: "dsgfdsgf"
    },
    {
      title: "sqd",
      rate: "0.5",
      text: "dsgfdsgf"
    }])
  }, [])
  return (
    <>
      <div className='d-flex'>
        {products.map((product, i) => (
          <Card key={i} title={product.title} rate={product.rate} text={product.text} ></Card>

        ))}
      </div>
    </>
  )
}

export default ProductList