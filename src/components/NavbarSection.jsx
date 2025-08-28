import React from 'react'

const NavbarSection = () => {
  return (
    <section className='topbar'>
        <div className="nav title">
            <h1>Flipkart</h1>
        </div>
        <div className="nav search">
            <input type="text" placeholder='search'/>
        </div>
        <div className="nav login">
            <h3>login</h3>
        </div>
        <div className="nav cart">
            <h3>Cart</h3>
        </div>
        <div className="nav seller">
            <h3>become a seller</h3>
        </div>
        
      
    </section>
  )
}

export default NavbarSection
