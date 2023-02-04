import React from 'react'
import { Outlet,NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='header'>
    <h2><span>THE</span>SIREN</h2>
    </div>
    <nav>
       <div className="nav-item">
         {/* <input type="checkbox" className="toggle-menu" />
         <div className='hamburger'></div> */}
          <ul>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/bollywood'>BollyWood</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/technology'>Technology</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/hollywood'>Hollywood</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/fitness'>Fitness</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/food'>Food</NavLink></li>
            {/* <li> <i className="fa fa-bars"></i> */}
              {/* <label htmlFor="nav_check" class="hamburger">
                <div>___</div>
                <div>___</div>
                <div>___</div>
              </label> */}
            {/* </li> */}
          </ul>
       </div>
       <hr />
    </nav>
    {/* <div className="menu-icon">
      <span className="menu-icon-line"></span>
      <span className="menu-icon-line"></span>
      <span className="menu-icon-line"></span>
    </div>
    <div className="responsive-menu-bar">
      <p>
        <a className="list" href="/">Home</a>
        <p className="cancel">×</p>
        </p>
        <hr className="responsive-menu-bar-hr"/>
          <p>
            <a className="list" href="/bollywood">Bollywood</a>
          </p>
        <hr className="responsive-menu-bar-hr"/>
            <p>
              <a className="list" href="/technology">Technology</a>
            </p>
        <hr className="responsive-menu-bar-hr"/>
          <p>
            <a className="list" href="/hollywood">Hollywood</a>
          </p>
        <hr className="responsive-menu-bar-hr"/>
          <p>
            <a className="list" href="/fitness">Fitness</a>
          </p>
        <hr className="responsive-menu-bar-hr"/>
          <p>
            <a className="list" href="/food">Food</a>
          </p>
          <hr className="responsive-menu-bar-hr"/>
    </div> */}
    {/* <label htmlFor="nav_check" class="hamburger">
      <div>___</div>
      <div>___</div>
      <div>___</div>
    </label> */}
    <Outlet />
    </>
  )
}

export default Navbar