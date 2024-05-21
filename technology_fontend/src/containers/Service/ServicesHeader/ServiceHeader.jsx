import React from 'react'
import './ServiceHeader.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import serviceheader from '../../../assests/img/Service/serviceheader.png'
const ServiceHeader = ({ post }) => {
     return (
          <div className='services-header'>
               <div className="services-header-col">
                    <h1 className="services-header-col-title">{post?.title ?? "N/A"}</h1>
                    <p className="services-header-col-header">
                         <span>{post?.header ?? "N/A"}</span>
                    </p>
                    <p className="services-header-col-des1">{post?.description ?? "N/A"}</p>
                    <p className="services-header-col-des2">{post?.description1 ?? "N/A"}</p>

                    <div className='case-card-button'>
                         <Link className='case-card-box' to={`/service/${post?.id ?? "N/A"}`}>
                              <div class="icon-text-container">
                                   <span>get in touch</span>
                                   <FaArrowRight className='' />
                              </div>
                         </Link>
                    </div>
               </div>
               <div className="services-header-col">
                    {post ? (
                         <div className="qr-code">
                              <img src={post.image} alt={post.title} className='serviceheader' />
                         </div>
                    ) : (
                         <img src={serviceheader} alt="title" className='serviceheader' />
                    )}
               </div>
          </div>
     )
}

export default ServiceHeader
