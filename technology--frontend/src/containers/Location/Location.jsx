import { useEffect, useState } from 'react';
import './Location.css';
import axios from 'axios';

const Location = () => {
     const [locations, setLocations] = useState([]);
     useEffect(() => {
          const fetchBlogs = async () => {
               try {
                    const responseAll = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/location/`);
                    const filterData = responseAll.data.slice(0, 3);
                    setLocations(filterData);
               } catch (error) {
                    console.error('Error fetching blogs:', error);
               }
          };

          fetchBlogs();
     }, []);
     return (
          <div className='location'>
               <h2 className='location_title'>We&apos;re happy to <span>chat in person</span> if you&apos;re close to one of our <span>office locations.</span></h2>
               <div className="location_grid">
                    {locations.map((location, index) => (
                         <div className="col_location" key={index}>
                              <img src={location.image} alt={location.name} className='js-scroll fade-in fade-in-bottom' />
                              <div className="post-card_location">
                                   <h3>{location.name}</h3>
                                   <p>{location.address} {location.city}, {location.country}</p>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default Location;
