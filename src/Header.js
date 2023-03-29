
import React from 'react'

 const Header = () => {
      return (
        <>
        <header>
            <nav style={{ background: '#333', padding: '1rem' }}>
                <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', justifyContent: 'flex-end' }}>
                    <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                    <li style={{ marginRight: '1rem' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
                    <li><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
                </ul>
            </nav>
         </header>
        </>
    )
  }

export default Header;