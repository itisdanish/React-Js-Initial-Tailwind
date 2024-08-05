import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CDN_URL2 } from '../utils/constants';

const RestaurantItemCard = ({ resMenu }) => {
  const { name, price, defaultPrice, ratings, description, imageId } =
    resMenu.card.info;
  // console.log(resMenu.card.info.rating)

  const finalPrice = price / 100 || defaultPrice / 100;
  const rating = ratings?.aggregatedRating?.rating;
  const ratingCount = ratings?.aggregatedRating?.ratingCountV2;
  const ratingClass = rating > 3 ? 'text-green-600' : 'text-orange-600';
  // console.log(resMenu);
  return (
    <div className='border-b w-[65%] m-auto'>
      <div className='menu-card flex mx-2 my-4 rounded-lg2'>
        <div className='menu-card-details m-2 flex-1'>
          <h3 className='font-bold'>{name}</h3>
          <p className='price font-semibold'>₹ {finalPrice}</p>
          {rating !== null && rating !== undefined && (
            <div className='my-1'>
              <p className={`font-semibold text-sm inline ${ratingClass}`}>
                <FontAwesomeIcon icon={faStar} /> {rating}
              </p>
              <span className='text-gray-600'> ({ratingCount})</span>
            </div>
          )}
          <p className='font-medium text-gray-500'>{description}</p>
        </div>
        <div className='menu-card-image p-2'>
          <img
            className='rounded-xl w-60 h-40 object-cover'
            src={`${CDN_URL2}${imageId}`}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantItemCard;
