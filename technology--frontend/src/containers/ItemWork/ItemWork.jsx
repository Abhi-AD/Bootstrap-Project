import { useState } from 'react';
import PropTypes from 'prop-types';
import './ItemWork.css';
import { MdCrueltyFree, MdEmojiEmotions, MdOutlineCelebration } from 'react-icons/md';
import { FaMattressPillow } from 'react-icons/fa6';
import { FaCar } from 'react-icons/fa';

function Tab({ label, isActive, onClick, icon }) {
    return (
        <button className={isActive ? 'tablinks active' : 'tablinks'} onClick={onClick}>
            {icon && <span className='tab-icon'>{icon}</span>}
            {label}
        </button>
    );
}

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.element,
};

function TabContent({ id, isActive, children }) {
    return (
        <div id={id} className={isActive ? 'tabcontent-work' : 'tabcontent-work hidden'}>
            {children}
        </div>
    );
}

TabContent.propTypes = {
    id: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

function ItemWork() {
    const [activeTab, setActiveTab] = useState('Daily work support');

    const openCity = (cityName) => {
        setActiveTab(cityName);
    };

    const tabsData = [
        { label: 'Daily work support', icon: <MdEmojiEmotions fontSize={20} /> },
        { label: 'Professional growth', icon: <MdCrueltyFree fontSize={20} /> },
        { label: 'Work-life balance', icon: <FaMattressPillow fontSize={20} /> },
        { label: 'Employee care', icon: <FaCar fontSize={20} /> },
        { label: 'Celebrate efforts', icon: <MdOutlineCelebration fontSize={20} /> }
    ];

    const tabContentsData = [
        {
            id: 'Daily work support', contents: [
                { icon: <MdEmojiEmotions fontSize={30} />, title: 'Hybrid work', desc: 'Flexibility to work from office or home.' },
                { icon: <MdCrueltyFree fontSize={30} />, title: 'Support for resources', desc: 'Get internet and laptop allowance monthly, and request resources for convenient WFH.' },
                { icon: <FaMattressPillow fontSize={30} />, title: '5-days workweek', desc: 'Take the weekend off and come back refreshed on Monday.' },
                { icon: <MdOutlineCelebration fontSize={30} />, title: 'Free food', desc: 'Value and celebrate small and big wins together' }
            ]
        },
        {
            id: 'Professional growth', contents: [
                { icon: <MdEmojiEmotions fontSize={30} />, title: "'Growth mindset' fund", desc: 'Investment in your post-grad degree, learning opportunities, and career growth.' },
                { icon: <MdCrueltyFree fontSize={30} />, title: 'Child scholarship', desc: 'Scholarships for your child in selected schools.' },
                { icon: <FaMattressPillow fontSize={30} />, title: 'Bi-annual bonus', desc: 'Get timely festival and company bonus.' },
                { icon: <MdOutlineCelebration fontSize={30} />, title: 'Advance salary', desc: 'Request salary in advance.' }
            ]
        },
        {
            id: 'Work-life balance', contents: [
                { icon: <MdEmojiEmotions fontSize={30} />, title: 'Paid time-offs', desc: 'Annual, sick, compensation, and bereavement leaves.' },
                { icon: <MdCrueltyFree fontSize={30} />, title: 'Maternity leave', desc: '3 months of paid leave, 1 month of unpaid leave, and 90 days of reduced workload.' },
                { icon: <FaMattressPillow fontSize={30} />, title: 'Paternity leave', desc: '11 days of paid paternity leave and reduced workload after.' },
                { icon: <MdOutlineCelebration fontSize={30} />, title: 'Menstruation leave', desc: '6 days of paid menstruation leave annually.' }
            ]
        },
        {
            id: 'Employee care', contents: [
                { icon: <MdEmojiEmotions fontSize={30} />, title: 'Your well-being', desc: 'Company-funded counseling services from certified therapists as well as COVID care services.' },
                { icon: <MdCrueltyFree fontSize={30} />, title: 'Retirement fund', desc: 'Social security fund with health and accidental insurance.' }
            ]
        },
        {
            id: 'Celebrate efforts', contents: [
                { icon: <MdEmojiEmotions fontSize={30} />, title: 'Engagement', desc: 'Team lunch/dinner, company outing, and festival celebrations with your favorite co-workers!' },
                { icon: <MdCrueltyFree fontSize={30} />, title: 'Exposure', desc: 'Visit and work in the States and build better client rapport.' },
                { icon: <FaMattressPillow fontSize={30} />, title: 'Recognition', desc: 'In-house awards, appreciation platforms, and 5th-anniversary gifts!' }
            ]
        }
    ];

    return (
        <div className='tab-work'>
            <div className="service-innovation-title">
                <h2 className='service-innovation-title-header'><span> Perks & benefits  </span>of working at ABC</h2>
                <p className='service-innovation-title-desc'>Beyond our commitment to learning and professional development, being part of Leapfrog brings a treasure trove of perks and benefits.</p>
            </div>
            <div className="tab-work-left ">
                {tabsData.map((tab, index) => (
                    <Tab key={index} label={tab.label} isActive={activeTab === tab.label} onClick={() => openCity(tab.label)} icon={tab.icon} />
                ))}
            </div>
            {tabContentsData.map((tabContent, index) => (
                <TabContent key={index} id={tabContent.id} isActive={activeTab === tabContent.id}>
                    <div className="service-innovation-row-tab js-scroll fade-in fade-in-bottom">
                        {tabContent.contents.map((content, i) => (
                            <div key={i} className="service-innovation-col-tab">
                                <span className='service-innovation-icon-tab'>{content.icon}</span>
                                <h3>{content.title}</h3>
                                <p>{content.desc}</p>
                            </div>
                        ))}
                    </div>
                </TabContent>
            ))}
        </div>
    );
}

export default ItemWork;
