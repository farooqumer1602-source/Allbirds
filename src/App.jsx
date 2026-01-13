import React from 'react'
import Products from './data/Products'
const App = () => {
  return (
    <>
    {Products.map((item) =>(
        <div key={item.id}>
            <img className='w-100 ' src={item.image} alt="" />
            <p>${item.price}</p>
            <p>{item.name}</p>
            <p>{item.title}</p>
        </div>
      ))}
      </>
  )
}

export default App
