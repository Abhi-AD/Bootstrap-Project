import React, { useEffect, useState } from 'react'
import './CTA.css'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CTA = () => {
     const [books, setBooks] = useState([]);
     useEffect(() => {
          const fetchBlogs = async () => {
               try {
                    const responseAll = await axios.get('http://127.0.0.1:8000/api/visit/book/');
                    // setBooks(responseAll.data);
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
                         {books.map(books => (
                              <div className="col">
                                   <img src={books.image} alt={books.title} />
                                   <p className='desc'>{books.description.slice(0,100)}</p>
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

export default CTA
