import React from 'react';
import { FaMattressPillow } from 'react-icons/fa6';
import { MdOutlineCelebration, MdLockOpen, MdEmojiEmotions, MdCrueltyFree } from 'react-icons/md';

const JoinService = () => {
    const values = [
        {
            icon: <MdEmojiEmotions fontSize={30} />,
            title: 'Customer Focuslearning',
            description: 'Go the extra mile to make our customers smile'
        },
        {
            icon: <MdCrueltyFree fontSize={30} />,
            title: 'Accountable Freedom',
            description: 'Keep integrity at heart'
        },
        {
            icon: <FaMattressPillow fontSize={30} />,
            title: 'Be Remarkable',
            description: 'Shape a better tomorrow as learn-it-alls'
        },
        {
            icon: <MdOutlineCelebration fontSize={30} />,
            title: 'Celebrate Efforts',
            description: 'Value and celebrate small and big wins together'
        },
        {
            icon: <MdLockOpen fontSize={30} />,
            title: 'Embrace Openness',
            description: 'Foster a culture of facing problems head-on'
        }
    ];

    return (
        <div className='service-innovation'>
            <div className="service-innovation-title">
                <h2 className='service-innovation-title-header'>Enhancing your <span> life's palette</span></h2>
                <p className='service-innovation-title-desc'>Navigate the digital landscapes with our expert guidance.</p>
            </div>
            <div className="service-innovation-row js-scroll fade-in fade-in-bottom">
                {values.map((value, index) => (
                    <div key={index} className="service-innovation-col">
                        <span className='service-innovation-icon'>{value.icon}</span>
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JoinService;
