import React from 'react';
import './Porfolio_Style.css';
// import './Portfolio_vendor.css';
import img from '../../assests/Porfolio/intro-bg.jpg'
import line from '../../assests/Porfolio/horizontal-line.png'
import aboutimg from '../../assests/Porfolio/about.png'

const Portfolio = () => {
  return (
    <div id="intro" className="porfolio">
      <div className="porfolio_row">

        <div className="porfolio_header">
          <div className="porfolio_header-text">
            <div className="porfolio_header-text_name">
              <img src={line} className='porfolio_header_line' alt="" /> Hello, I'm Monica</div>
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

        <section id="about" className="">
          <div className="">
            <div className="">
              <img src={aboutimg} alt="" className="porfolio_header_about" />

              <div className="porfolio_header-text_name">
                <div className="">About</div>
                <h2 className="text-display-title">
                  An inspiring headline about yourself.
                </h2>
              </div> {/* end section-header */}

              <div className="">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                  ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                  fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                  iure, eos consequatur est deleniti cum id aliquid neque.
                </p>

                <p className="">
                  Autem tenetur commodi maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Est eligendi fugit, facilis velit reiciendis iure laudantium. Praesentium repellat
                  corrupti dolor sit sint obcaecati. Modi aut quo molestiae a explicabo maiores necessitatibus
                  nemo repellendus architecto? Corrupti numquam ullam nostrum, eveniet at doloribus blanditiis
                  aliquid a est porro aspernatur pariatur culpa soluta nesciunt odio quasi maxime debitis illum.
                </p>

                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus iste ipsam quod repellat. Hic tempora ullam aperiam
                  ipsum optio magni vel inventore voluptatibus nisi maiores laboriosam
                  fuga iure, velit eligendi ab vero minima? Quae ducimus ab dignissimos
                  iure, eos consequatur est deleniti cum id aliquid neque.
                </p>
              </div> {/* end s-about__content-main */}

              <div className="">
                <a href="about.html" className="btn btn--stroke u-fullwidth">More About Me</a>

                <ul className="">
                  <li>
                    <a href="#0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "" }}><path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path></svg>
                      <span className="u-screen-reader-text">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "" }}><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path></svg>
                      <span className="u-screen-reader-text">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "" }}><path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.487,0.419,2.186c0.469,1.209,1.424,2.165,2.633,2.632c0.699,0.263,1.438,0.404,2.186,0.419 c0.963,0.042,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056c0.748-0.015,1.487-0.156,2.186-0.419c1.209-0.469,2.165-1.424,2.633-2.632 c0.263-0.7,0.404-1.438,0.419-2.186c0.042-0.962,0.056-1.268,0.056-3.71s0-2.753-0.056-3.71C20.937,7.548,20.796,6.809,20.533,6.111 L20.533,6.111z M18.822,15.498c-0.127,0.349-0.373,0.595-0.721,0.721c-0.499,0.198-1.68,0.152-2.233,0.176 c-0.973,0.044-1.26,0.056-3.67,0.056s-2.698,0-3.67-0.056c-0.553-0.024-1.735,0.021-2.233-0.176 c-0.349-0.127-0.595-0.373-0.721-0.721c-0.198-0.499-0.152-1.68-0.176-2.233c-0.043-0.973-0.056-1.26-0.056-3.67 s0.013-2.698,0.056-3.67c0.024-0.553-0.021-1.735,0.176-2.233c0.127-0.349,0.373-0.595,0.721-0.721 c0.499-0.198,1.68-0.152,2.233-0.176c0.973-0.043,1.26-0.056,3.67-0.056s2.698,0.013,3.67,0.056c0.553,0.024,1.735-0.021,2.233,0.176 c0.349,0.127,0.595,0.373,0.721,0.721c0.198,0.499,0.152,1.68,0.176,2.233c0.043,0.973,0.056,1.26,0.056,3.67 S18.865,14.525,18.822,15.498z"></path></svg>
                      <span className="u-screen-reader-text">Instagram</span>
                    </a>
                  </li>
                </ul> {/* end s-about__social */}
              </div> {/* end s-about__content-btn */}
            </div> {/* end column */}
          </div> {/* end s-about__content */}
        </section>

      </div>
    </div>
  );
};

export default Portfolio;
