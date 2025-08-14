import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Category() {

  let { cid } = useParams()
  let [catpost, setCatpost] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${cid}`).then(a => a.json()).then(b=>setCatpost(b))
  }, [cid])

  return (
    <div className='container mx-auto'>

      <div className='grid grid-cols-4 gap-4'>

        {catpost.map((a) => (

          <div key={a.id} className="m-3  bg-gray-100 shadow-black shadow-lg p-3 rounded  flex flex-col items-center">
            <img className="w-full h-[200px] object-fill rounded" src={a.image} alt="" />
            <h3 className="mt-4 text-center text-lg font-bold">{a.title}</h3>
            <p className='text-sm text-black '> <strong> Description: </strong> {a.description}</p>
          </div>
          ))}
      </div>
    </div>
      )
}

      export default Category