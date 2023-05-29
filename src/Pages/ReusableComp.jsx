import React from 'react'
import './Reusable.css'
import { Link } from 'react-router-dom'

const ReusableComp = (props) => {
  // console.log(props);
  return (
    <>
    <div className='parent'>
    <Link to="/spatile" state={props}>
            <img src={props.img} alt="error"/>
            <p className='article' style={{textDecoration:"none"}}>{props.article}</p>
            <p className='title'>{props.title}</p><br/>
            <p className='date'>{props.date}</p>
    </Link>       
    </div> 
    </>
  )
}

export default ReusableComp