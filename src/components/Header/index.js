import React  from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return <div>
    <Link to='/home'>home</Link>
    &nbsp;
    <Link to='/login'>login</Link>
    <div>this is header</div>
    <br/>
  </div>
}

export default Header

