import { useState } from 'react';
import ItemList from './ItemList';
import RestaurantItemCard from './RestaurantItemCard';

const RestMenuItems = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  const handleClick = () => {
    setShowIndex();
    // console.log('first');
    // setShowItems(true);
    // if (showItems === false) {
    //   setShowItems(true);
    // } else setShowItems(false);
    // setShowItems(!showItems);
  };
  return (
    <div>
      <div className='w-8/12 mx-auto my-4  shadow-sm'>
        <div
          className='flex justify-between cursor-pointer bg-gray-50 px-4 py-3 rounded-lg'
          onClick={handleClick}
        >
          <span className='font-bold text-lg'>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        <div className='border-b w-auto m-auto '>
          {showItems && <ItemList items={data?.itemCards} />}
        </div>
        {/* <RestaurantItemCard resMenu={data?.itemCards} /> */}
      </div>
    </div>
  );
};

export default RestMenuItems;
