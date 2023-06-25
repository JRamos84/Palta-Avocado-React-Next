import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window.fetch('/api/avo')
    .then(response => response.json())
    .then(({data,length})=>{
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Paltas!</div>
      {productList.map(product=>(
        <Link href={`product/${product.id}`}>{product.name}</Link>
      ))}
    </div>
  )
}

export default HomePage
