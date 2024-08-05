import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla: { slaString },
  } = resData.info;
  // console.log(resData);
  return (
    <div className='m-2 p-2 w-72 h-68 rounded-xl bg-green-0 hover:bg-green-100'>
      <img
        className='res-logo rounded-xl h-40 w-72 object-cover shadow-sm'
        src={CDN_URL + cloudinaryImageId}
        alt='food'
      />
      <div className='mx-1'>
        <h3 className='font-bold mt-2 whitespace-nowrap overflow-hidden text-ellipsis'>
          {name}
        </h3>
        <h6 className='text-sm font-bold mb-2'>
          {' '}
          <FontAwesomeIcon
            className=' res-icon text-green-600'
            icon={faStar}
          />{' '}
          {avgRatingString} Stars - {slaString}
        </h6>
        {/* <h5 className='text-sm font-semibold text-gray-600'>
          {cuisines.join(', ')}
        </h5> */}
        <h5 className='text-sm font-semibold text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis'>
          {cuisines.join(', ')}
        </h5>

        <h5 className='mt-2 text-sm font-semibold text-gray-800'>
          {costForTwo}
        </h5>
      </div>
    </div>
  );
};

// Higher Order Function
// Input - RestaurantCard ==>> Restaurant card open
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='relative'>
        <label className='absolute top-0 left-2 bg-yellow-300 px-2 py-1 rounded-xl'>
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export const withCloseLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='relative'>
        <label className='absolute top-0 left-2 bg-gray-300 px-2 py-1 rounded-xl'>
          Closed
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
