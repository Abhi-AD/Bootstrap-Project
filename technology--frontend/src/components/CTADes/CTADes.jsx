import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaEye } from "react-icons/fa6";
import axios from 'axios';

const CTADes = () => {
    const { id } = useParams();
    const [book, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/visit/book/${id}/`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [id]);
    return (
        <div className="casestudydetails-container">
            {book && (
                <div className="casestudydetails-header">
                    <div className="casestudydetails-header-footer">
                        <div className="casestudydetails-header-footer-col">
                            <img src={book.image} alt="img" style={{ border: "10rem" }} />
                            <div className="our-impact" style={{ marginTop: "1rem", marginLeft: "-5rem" }}>
                                <p className="our-impact-count" style={{ color: "black", fontSize: "18px" }}>
                                    <FaEye size={14} />{book.views_count}</p>
                            </div>
                        </div>
                        <div className="casestudydetails-header-footer-col">
                            <h3>{book.chapter}</h3>
                            <div className="casestudydetails-header-footer-col-deliveries">
                                <span className='casestudydetails-header-footer-col-deliveries-title' style={{ fontSize: '2rem' }}>{book.title}</span>
                                <ul className='deliverables' >
                                    <li>
                                        <span style={{ textTransform: 'capitalize' }}>{book.description}</span>
                                    </li>
                                </ul>
                                <span className='our-impact-title' style={{ color: 'black', fontWeight: '10', textTransform: 'capitalize' }}>{book.description1}</span>
                                <div className="our-impact" style={{ color: 'black' }}>
                                    <p className="our-impact-count">{book?.questions}</p>
                                    <p>vaccine doses administered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CTADes;
