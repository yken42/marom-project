import React from 'react'
import emojiFlags from 'emoji-flags'

export const Navbar = () => {
    console.log(emojiFlags.countryCode('IL').emoji)
  return (
    <div className='w-full bg-slate-400 flex justify-between px-12'>
        <div className='logo'>
            <h1>LOGO</h1>
        </div>
        <nav>
            <ul className='flex'>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className='languages flex text-4xl'>
            <div className='il px-2 hover:cursor-pointer'>
                {emojiFlags.countryCode('IL').emoji}
            </div>
            <div className='USA px-2 hover:cursor-pointer'>
                {emojiFlags.countryCode('US').emoji}
            </div>
        </div>
    </div>
  )
}
