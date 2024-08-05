import { LOGO_URL } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setBtn] = useState('Log In');
  const onlineStatus = useOnlineStatus();
  // console.log("header")

  //
  useEffect(() => {
    // console.log("useEffect called")
  }, [btnNameReact]);

  return (
    <nav className='flex justify-between shadow-md mb-2 bg-amber-400'>
      <div className='logo-container m-4'>
        <img className='w-12 m-auto' src='' alt='test' />
      </div>

      <div className='flex items-center'>
        <ul className='flex p-2 m-4 font-bold'>
          {' '}
          <li className='px-2'>
            {' '}
            <Link to='/'>Online : {onlineStatus ? '👽' : '🚨'}</Link>
          </li>
          <li className='px-2'>
            {' '}
            <Link to='/grocery'>Grocery : {onlineStatus ? '👽' : '🚨'}</Link>
          </li>
          <li className='px-2 hover:text-orange-500'>
            {' '}
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            {' '}
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-2'>
            {' '}
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-2'>
            <Link to='/cart'>
              Cart <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
          <button
            className='px-2'
            onClick={() => {
              btnNameReact == 'Log In' ? setBtn('Log Out') : setBtn('Log In');
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
