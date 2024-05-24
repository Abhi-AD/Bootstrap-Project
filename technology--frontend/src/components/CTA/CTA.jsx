import { useEffect, useState } from 'react'
import './CTA.css'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CTA() {
     const [books, setBooks] = useState([]);
     useEffect(() => {
          const fetchBlogs = async () => {
               try {
                    const responseAll = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/book/`);
                    const filterData = responseAll.data.slice(0, 3);
                    setBooks(filterData);
               } catch (error) {
                    console.error('Error fetching blogs:', error);
               }
          };

          fetchBlogs();
     }, []);

     return (
          <div className='section-panel cta_padding'>
               <div className="container CTA1">
                    <div className="section-title">
                         <h2>Redefining everything  <span className='section_title_base'>with technology</span></h2>
                         <p className='fs-lead'>Join us on this journey to shape the future of learning in the digital age.
                         </p>
                    </div>
                    <div className="col_blog row js-scroll fade-in fade-in-bottom">
                         {books.map((books,index) => (
                              <div className="col" key={index}>
                                   <img src={books.image} alt={books.title} />
                                   <p className='desc'>{books.description.slice(0, 100)}</p>
                                   <Link className='button' to={`/book/${books.id}`}>
                                        <FaFilePdf className='fa' /><p className='icon_text'>Get the book</p><FaArrowRight className='fa' />
                                   </Link>
                              </div>
                         ))}

                    </div>
               </div>
          </div>
     )
}
