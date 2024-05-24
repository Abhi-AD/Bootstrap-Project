import { useEffect, useState } from 'react';
import './Porfolio_Style.css';
// import './Portfolio_vendor.css';
import img from '../../assests/Porfolio/intro-bg.jpg'
import line from '../../assests/Porfolio/horizontal-line.png'
import aboutimg from '../../assests/Porfolio/about.png'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Portfolio = () => {
  const { id } = useParams();
  const [porfolio, setPorfolio] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/visit/${id}/`);
        setPorfolio(response.data);
      } catch (error) {
        console.error('Error fetching post data: ', error);
      }
    };
    fetchPost();
  }, [id]);
  return (
    <div id="intro" className="porfolio">
      {porfolio && (

        <div className="porfolio_row">

          <div className="porfolio_header">
            <div className="porfolio_header-text">
              <div className="porfolio_header-text_name">
                <img src={line} className='porfolio_header_line' alt="" /> Hello, I&apos;m <p> {porfolio?.name}</p></div>
              <h1 className="porfolio_header-text_des">
                I create marketing <br />
                strategies for your <br />
                business that get <br />
                results.
              </h1>
            </div>
            <div className="s-intro__content-media">
              <div className="s-intro__content-media-inner">
                <img
                  src={img}
                  alt=""
                  className='porfolio_header_img'
                />
              </div>
              <div className='porfolio_footer_img'>
                <img src={line} className='porfolio_header_line' alt="" />
                <img src={line} className='porfolio_header_line' alt="" />
                <img src={line} className='porfolio_header_line' alt="" />
                <img src={line} className='porfolio_header_line' alt="" />
              </div>
            </div>
          </div>

          <section id="about">
            <div>
              <img src={aboutimg} alt="" className="porfolio_header_about" />
              <div className="about_row">

                <div className="porfolio_about-text_name">
                  <div className="porfolio_about-text_name_title">About</div>
                  <h2 className="text-display-title">
                    An inspiring headline about yourself.
                  </h2>
                  <div className='porfolio_about-footer'>
                    <Link to={`#dfjnf`} className="porfolio_about-about_button">More About Me</Link>

                    <ul className='porfolio_about-footer-social'>
                      <li>
                        <Link to={`#0"`}>
                          <FaFacebookSquare />
                        </Link>
                      </li>
                      <li>
                        <Link to={`#0"`}>
                          <FaTwitterSquare />
                        </Link>
                      </li>
                      <li>
                        <Link to={`#0"`}>
                          <FaInstagram />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="porfolio_about-about">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                    ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                    fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                    iure, eos consequatur est deleniti cum id aliquid neque.
                  </p>

                  <p>
                    Autem tenetur commodi maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Est eligendi fugit, facilis velit reiciendis iure laudantium. Praesentium repellat
                    corrupti dolor sit sint obcaecati. Modi aut quo molestiae a explicabo maiores necessitatibus
                    nemo repellendus architecto? Corrupti numquam ullam nostrum, eveniet at doloribus blanditiis
                    aliquid a est porro aspernatur pariatur culpa soluta nesciunt odio quasi maxime debitis illum.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                    ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                    fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                    iure, eos consequatur est deleniti cum id aliquid neque.
                  </p>
                </div>
              </div>


            </div>
          </section>

        </div>
      )}
    </div>
  );
};

export default Portfolio;
