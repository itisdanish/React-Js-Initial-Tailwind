import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CDN_URL2 } from '../utils/constants';

const ItemList = ({ items }) => {
  // console.log(items.map((test)=> {return test}))
  return (
    <div className=''>
      {/* <h1>Items</h1> */}
      <div>
        {items.map(
          (item) => (
            <div
              key={item.card.info.id}
              className='menu-card flex mx-2 my-4 rounded-lg border-b-2 p-2'
            >
              <div className='menu-card-details m-2 flex-1 text-gray-800'>
                <h3 className='font-bold'>{item?.card?.info?.name}</h3>
                <p className='price font-semibold  text-gray-800'>
                  ₹{' '}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
                {item?.card?.info?.ratings?.aggregatedRating?.rating !== null &&
                  item?.card?.info?.ratings?.aggregatedRating?.rating !==
                    undefined && (
                    <div className='my-1'>
                      <p
                        className={`font-semibold text-sm inline ${
                          item?.card?.info?.ratings?.aggregatedRating?.rating >
                          3
                            ? 'text-green-600'
                            : 'text-orange-600'
                        }`}
                      >
                        <FontAwesomeIcon icon={faStar} />{' '}
                        {item?.card?.info?.ratings?.aggregatedRating?.rating}
                      </p>
                      <span className='text-gray-600 '>
                        {' '}
                        (
                        {
                          item?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </span>
                    </div>
                  )}
                <p className='font-light text-gray-800 text-sm'>
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className='relative w-60 h-40 rounded-xl overflow-hidden'>
                <img
                  className='object-cover w-full h-full'
                  src={`${CDN_URL2}${item?.card?.info?.imageId}`}
                  alt={item?.card?.info?.name}
                />
                <button className='absolute bottom-2 left-1/2 transform  -translate-x-1/2 px-8 py-2 shadow-md rounded-md border text-lg font-bold text-green-600 bg-white'>
                  ADD
                </button>
              </div>
            </div>
          )
          // console.log(item)
        )}
      </div>
    </div>
  );
};
export default ItemList;
