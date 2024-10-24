import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Products from './Components/Products/Products'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status:'cart'
  })
  const handleHideClick = (status) => {
    if (status == 'cart') {
      setIsActive({
        cart: true,
        status: 'cart',
      })
    }
    else {
      setIsActive({
        cart: false,
        status:'about'
      })
    }
  }
  const [carts, setCarts] = useState([])
  const handleAddToCart = (product) => {
    const isArray = carts.find(p => p.recipe_id === product.recipe_id);
    if (isArray) {
      alert('alerting')
    }
    else {
    const newCartArray = [...carts, product];
    setCarts(newCartArray)
    }
  }
  const handleRemoveToCart = (id) => {
    const newArray = carts.filter(p => p.recipe_id !== id)
    setCarts(newArray)
  }
  // console.log(carts);
  return (
    <>
      <div className='w-11/12 mx-auto'>
      <div className='flex md:flex-row justify-between items-center my-7'>
        <div>
          <h1 className='text-2xl font-bold'>Sjm Restuarent</h1>
        </div>
        <div className='nav-container'>
          <ul className=''>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>location</li>
        </ul>
        </div>
        <div>
          <h1 className='text-2xl font-semibold'>contact</h1>
        </div>
      </div>
      <div className='flex  lg:flex-row justify-between flex-col'>
          <Products handleAddToCart={handleAddToCart}></Products>
          <Carts  carts={carts}
            handleHideClick={handleHideClick}
            handleRemoveToCart={handleRemoveToCart}
            // deletecart={deletecart}
            isActive={isActive}>
            </Carts>
      </div>
     </div>
    
    </>
  )
}

export default App
