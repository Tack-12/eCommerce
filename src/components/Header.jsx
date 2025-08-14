import React, { useEffect, useState } from 'react'
import { login_data } from './login_data';
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Details from '../pages/Details'

// import logo from '../assets/logo.png'

function Header() {
  let [catData, setCatData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories').then(a => a.json()).then(b => setCatData(b))
}, [])

  return (
    <>
      <section className='bg-black '>
        <div className="container mx-auto ">
          <ul className=' text-white flex gap-3 justify-end'>
            {login_data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className='bg-white'>
        <div className="container mx-auto ">
          <div className='flex py-2 gap-4 justify-around'>
            <img className='w-[150px]' src="https://www.pngkey.com/png/full/251-2510316_seamless-ecommerce-middle-east-e-commerce-logo-png.png" alt="" />

            <form action="/search" method="GET">
              <input className="border-black outline-solid outline-1 rounded-2xl m-3 p-3 w-2xl" type="text" id="search-query" name="q" placeholder="Search" />
              <button className='bg-[#0DB0C1] rounded-2xl text-white m-2 p-3' type="submit"><i className="bi bi-search"></i></button>
            </form>

            <div className='flex gap-2 m-2'>
              <p><i className="bi bi-cart text-4xl text-center"></i></p>
              <p><i className="bi bi-list text-4xl text-center"></i></p>
            </div>

          </div>


        </div>
      </section>

      <section className='bg-gray-200'>
        <nav className='container mx-auto py-3'>
          <ul className='flex justify-around'>
            <li> <Link to={`/`} >HOME </Link></li>
            {catData.map(a => (
              
              <li key={a}> <Link to={`/category/${a}`}> {a.toUpperCase()} </Link> </li>
            ))}
          </ul>
        </nav>
      </section>


   <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/Category/:cid/' element={<Category/>}/>
    <Route path= '/Detail' element={<Details/>}/>
    </Routes>
   
    </>
  );

}

export default Header