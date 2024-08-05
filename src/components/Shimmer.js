import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Shimmer = () => {
  return (
    <>
      <h1 className='loading-text'>
        Looking for Great Food Near You {''}
        <FontAwesomeIcon icon={faUtensils} />
      </h1>
      <div className='container'>
        <div className='m-2 p-2 w-72 h-68 rounded-xl bg-green-600'>
        </div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
        <div className='shimer-card'></div>
      </div>
    </>
  );
};

export default Shimmer;
