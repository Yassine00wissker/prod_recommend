import React, { useEffect, useState } from 'react'
import Card from './Card'
function ProductList() {
  const [products, setProducts] = useState([])
  useEffect(() => {//fetch data
    setProducts([{
      id:1,
      title: "sqd",
      rate: "4.5",
      text: "dsgfdsgf"
    },
    {
      id:2,
      title: "sqd",
      rate: "3.5",
      text: "dsgfdsgf"
    }])
  }, [])
  return (
    <>
      <h1 className='text-center mb-5 '>Product Liste</h1>
      <div className='d-flex'>
        {products.map((product, i) => (
          <Card key={i} img={product.img} title={product.title} rate={product.rate} text={product.text} id={product.id} ></Card>

        ))}
      </div>
    </>
  )
}

export default ProductList