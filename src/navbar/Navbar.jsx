import React from 'react';
import Leftnav from "./Leftnav";
import SearchBar from './SearchBar';
import './Navbar.css'

function Navbar() {
  let styles = {
    display: 'flex'    
  }
  return (
    <div style={styles}>
      <Leftnav/>
      <SearchBar/>
      {/* <hr/> */}
    </div>
  );
}


export default Navbar;