import React, { useState, useEffect } from 'react';
import './Item.css';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Item = () => {
    const [tabCards, setTabCards] = useState([]);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/visit/tabcard/')
            .then(response => response.json())
            .then(data => {
                setTabCards(data);
                if (data.length > 0) {
                    setActiveTab(data[0].title);
                }
            })
            .catch(error => console.error('Error fetching tab cards:', error));
    }, []);

    const openItem = (itemname) => {
        setActiveTab(itemname);
    };
    console.log(activeTab, "activeTab")

    return (
        <div className='service'>
            <div className="tab-header-service">
                <ul className="tab-header__list">
                    {tabCards.map(tabCard => (
                        <li key={tabCard.id} className='tab-item'>
                            <Link
                                className={
                                   `${ activeTab === tabCard.title ? 'tablinks' : 'tablinks'} ${ activeTab === tabCard.title ? 'tabactive' : 'none'}`
                                }
                                onClick={() => openItem(tabCard.title)}>
                                <span className='tab-header__item'>
                                    <span className="tab-text">{tabCard.title}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tab-content">
                {tabCards.map(tabCard => (
                    <div key={tabCard.id} id={tabCard.title} className="tab-card" style={{ display: activeTab === tabCard.title ? 'block' : 'none' }}>
                        <div className="tab-card-col-left">
                            <span className='tab-card-col-title'>{tabCard.title}</span>
                            <h2 className='tab-card-col-header'><span>{tabCard.header}</span></h2>
                            <p className='tab-card-col-des'>{tabCard.description}</p>
                            <Link className="explore_icon" to={`/service/${tabCard.id}`}>
                                <span style={{ paddingRight: '10px' }}>Explore {tabCard.title.slice(0, 10) + '....'}</span>
                                <FaArrowRight className='fa' />
                            </Link>
                        </div>
                        <div className="tab-card-col-right">
                            <img src={tabCard.image} alt="product" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Item;
