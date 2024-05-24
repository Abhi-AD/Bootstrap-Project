import { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogDetails.css';
import './AnimateOnScroll.css';
import { FaCalendar, FaEye, FaTags } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { Category } from '../../components/index';
import { Link, useParams } from 'react-router-dom';
import { dateFormate } from '../../utils/dateFormate';

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/blog/${id}/`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post data: ', error);
      }
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const responseAll = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/category/`);
        setCategory(responseAll.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const matchedCategory = category.find(cat => cat.id === post?.category);

  return (
    <div className='blog'>
      <Category />
      {post && (
        <div className="blog_detail">
          <ul className='blog_detail_header'>
            <li><Link style={{ color: 'var(--main-color)' }} to={`/blog`}>Blog</Link></li>
            <li>{matchedCategory?.name}</li>
          </ul>
          <div className="blog_detail_title">
            <h1 className='blog_detail_title_top'>{post.title}</h1>
            <p className='blog_detail_title_bio'>{post.bio}</p>
            <p className='blog_detail_title_date'><FaCalendar />{dateFormate(post.post_date)}</p>
          </div>
          <img src={post.image} alt={post.title} className='blog_detail_image' />
          <p className='blog_detail_desc'>{post.description}</p>
          <div className="blog_detail_footer">
            <p className='blog_detail_footer_content'><FaEye />{post.views_count}</p>
            <p className='blog_detail_footer_content'><TbCategoryPlus />{matchedCategory?.name}</p>
            <p className='blog_detail_footer_content'><FaTags />{post.tags}</p>
          </div>
        </div>
      )}
      {/* <Pagination /> */}
    </div>
  );
};

export default BlogDetails;
