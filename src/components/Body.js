import resList from '../utils/mockData';
import RestaurantCard, {
  withCloseLabel,
  withOpenLabel,
} from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import GameBoard from './GameBoard';
import UserContext from '../utils/userContext';

const Body = () => {
  const [listOfRest, setResList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRes, setFilteredRes] = useState([]);

  const RestaurantOpen = withOpenLabel(RestaurantCard);
  const RestaurantClose = withCloseLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div>
        <h1>Enjoy 🎮 gaming until the internet returns.!🌐</h1>
        <GameBoard />
      </div>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  if (listOfRest.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='container md:mx-auto'>
      <div className='body'>
        {/* <div className='search'>Search</div> */}
        <div className='flex filter justify-center'>
          <div className='m-4 p-4'>
            <input
              type='text'
              className='border-none bg-gray-100 w-96 focus:outline-dashed py-2 px-4 rounded-md'
              placeholder='Search'
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={() => {
                const filterRes = listOfRest.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.trim().toLowerCase())
                );
                setFilteredRes(filterRes);
                // console.log(filteredRes)
              }}
            />
            <button
              className='bg-green-500 text-white font-semibold mx-2 py-2 px-6 rounded-md'
              onClick={() => {
                const filterRes = listOfRest.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.trim().toLowerCase())
                );
                setFilteredRes(filterRes);
                // console.log(filteredRes);
              }}
            >
              Search
            </button>
            <input
              className='border-green-700 border-0 bg-green-100 w-96 focus:outline-dashed py-2 px-4 rounded-md'
              placeholder='Type Here......'
              onChange={(e) => setUserName(e.target.value)}
              value={loggedInUser}
            />
          </div>
          {/* Filter BTN */}
          {/* <div className='m-4 p-4'>
            <button
              className='bg-green-500 text-white mx-2 py-2 px-6 rounded-md'
              onClick={() => {
                const filteredList = listOfRest.filter(
                  (res) => res.info.avgRating > 4.5
                );
                setResList(filteredList);
              }}
            >
              4+ Star Rated ★
            </button>
          </div> */}
        </div>
        <div className='flex justify-center'>
          <div className='res-container flex flex-wrap container justify-center'>
            {filteredRes.map(
              (resDetails) => (
                <Link
                  className='res-card'
                  to={'restaurants/' + resDetails.info.id}
                  key={resDetails.info.id}
                >
                  {resDetails.info.isOpen ? (
                    <RestaurantOpen resData={resDetails} />
                  ) : (
                    <RestaurantClose resData={resDetails} />
                  )}
                </Link>
              )
              // console.log(resDetails.info.name)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
