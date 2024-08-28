import { LOGO_URL } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';
import UseTest from '../utils/UseTest';

const Header = () => {
  const [btnNameReact, setBtn] = useState('Log In');
  const onlineStatus = useOnlineStatus();
  // console.log("header")

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  const { name } = useContext(UseTest);


  //
  useEffect(() => {
    // console.log("useEffect called")
  }, [btnNameReact]);

  return (
    <nav className='flex justify-between shadow-md mb-2 bg-amber-400'>
      <div className='logo-container mx-4'>
        <img className='w-32 m-auto' src={LOGO_URL} alt='test' />
      </div>

      <div className='flex items-center'>
        <ul className='flex p-2 m-4'>
          {' '}
          <li className='px-2'>
            {' '}
            <Link to='/'>{name}: {onlineStatus ? '👽' : '🚨'}</Link>
          </li>
          <li className='px-2 hover:text-orange-500'>
            {' '}
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            {' '}
            <Link to='/grocery'>Grocery</Link>
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
              <FontAwesomeIcon icon={faShoppingCart} />5
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
          <button className='px-2 font-bold'>{loggedInUser}</button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
