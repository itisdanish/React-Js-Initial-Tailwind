import Shimmer from './Shimmer';
import { useState } from 'react';
import RestaurantItemCard from './RestaurantItemCard';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faMapMarkerAlt,
  faClock,
  faBicycle,
} from '@fortawesome/free-solid-svg-icons';
import RestMenuItems from './RestMenuItems';

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(1);
  const { resId } = useParams();
  // console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
    areaName,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo);

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' &&
        'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
    );
  //  c.card?.card?.['@type'] ===
  //       'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' ||
  //     'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
  // console.log(category);

  return (
    <div className='container md:mx-auto'>
      {/* Restaurant Head */}
      <div className='bg-white rounded-xl shadow-md p-6 w-[65%] m-auto'>
        <h2 className='text-2xl font-bold mb-2'>{name}</h2>
        <div className='flex justify-between items-center mb-2'>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faStar} className='text-green-600 mr-1' />
            <span className='font-bold'>{avgRatingString}</span>
            <span className='text-gray-600 ml-1 font-semibold'>
              ({totalRatingsString})
            </span>
          </div>
          <div className='font-bold'>{costForTwoMessage}</div>
        </div>
        <div className='text-red-600 hover:underline my-2'>
          {cuisines.join(', ')}
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className='mr-1 text-red-600'
          />
          <span className='font-bold mr-1'>Outlet</span>
          <span className='text-gray-600'>{areaName}</span>
        </div>
        <div className='flex items-center mb-2'>
          <FontAwesomeIcon icon={faClock} className='mr-1 text-blue-600' />
          <span className='lowercase font-semibold'>{sla.slaString}</span>
        </div>
        <div className='flex items-center text-gray-600'>
          <FontAwesomeIcon icon={faBicycle} className='mr-1 text-purple-700' />
          <span>Order above 149 for discounted delivery fee</span>
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='text-center font-bold text-2xl'>
          {' '}
          -------- MENU --------
        </h1>
        <div className=''>
          {/* {itemCards.map((menuItems) =>
            // console.log(menuItems.card.info.id)
            <RestaurantItemCard
              key={menuItems.card.info.id}
              resMenu={menuItems}
            />
          )} */}
          {categories.map((menuList, index) => (
            <RestMenuItems
              key={menuList?.card?.card?.title}
              data={menuList?.card?.card}
              showItems={index === showIndex && true}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
