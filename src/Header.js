import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1640526657~hmac=6cd60e1c25dcc4aa58193d9ed7e4738e'
          alt=''
        />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'></div>
    </div>
  );
}

export default Header;
