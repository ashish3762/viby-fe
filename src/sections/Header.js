import React from 'react'
import logo from "../assets/viby.png";

export default function Header() {
  return (
    <div className='w-full'>
       <div className="flex justify-center">
        <img src={logo} alt="logo" style={{height: '80px'}} />
      </div>
      <div>
        <nav className="navigation flex justify-center p-2">
          <ul className="flex space-x-10">
            <li className="px-10">
              <a href="/coffee">COFFEE</a>
            </li>
            <li className="px-10">
              <a href="/subscription">SUBSCRIPTIONS</a>
            </li>
            <li className="px-10">
              <a href="/goods">GOODS</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
