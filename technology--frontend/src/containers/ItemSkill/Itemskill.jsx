import { useState } from 'react';
import './Itemskill.css';
import { FaMattressPillow } from 'react-icons/fa6';
import { MdOutlineCelebration, MdLockOpen, MdEmojiEmotions, MdCrueltyFree } from "react-icons/md";

const tabs = [
  { name: 'What we build', content: 
    <div className="service-innovation-row-skill1">
      {[
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'Software Development', desc: 'Crafting tailored software solutions aligned with your vision, driving efficiency and innovation through precise coding.' },
        { icon: <MdCrueltyFree fontSize={30} />, title: 'Software Testing & QA', desc: 'Ensuring impeccable software quality through rigorous testing, assuring reliability and user satisfaction with every release.' },
        { icon: <FaMattressPillow fontSize={30} />, title: 'Infrastructure & DevOps', desc: 'Building robust foundations and agile workflows for scalability and security while embracing continuous development methodologies.' },
        { icon: <MdOutlineCelebration fontSize={30} />, title: 'Mobile and Web Development', desc: 'Data Science and Machine Learning' },
      ].map((item, index) => (
        <div className="service-innovation-col-skill1" key={index}>
          <span className='service-innovation-icon-skill'>{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div> 
  },
  { name: 'Technologies', content: 
    <div className="service-innovation-row-skill2">
      {[
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'Discovery & Design', skills: [
          { sub: 'Discover', details: 'JIRA, Confluence, Google Suite' },
          { sub: 'Design', details: 'Figma, Adobe Suite, Sketch' },
          { sub: 'Product Analysis', details: 'Mixpanel, Google Analytics, FullStory' },
        ]},
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'App Dev', skills: [
          { sub: 'Mobile Apps', details: 'React Native, Flutter, Swift, Java' },
          { sub: 'Web Clients', details: 'React, ES5 and ES6, Sketch' },
          { sub: 'Product Analysis', details: 'Mixpanel, Google Analytics, Angular, Polymer' },
          { sub: 'Backend & API\'s', details: 'Golang, Typescript, Express, Python, Java EE, Node JS' },
        ]},
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'Data & Cloud', skills: [
          { sub: 'Database', details: 'PostgresSQL, Oracle, Microsoft SQL Server, Amazon RedS' },
          { sub: 'ETL & Pipelines', details: 'Airflow, Microsoft SQL Server SSIS, SSRS, SSAS, Python' },
          { sub: 'Cloud & Integration', details: 'AWS, Azure, Google Cloud' },
        ]},
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'Data Sciences', skills: [
          { sub: 'InterOps', details: 'HL7 V2, HL7 FHIR' },
          { sub: 'Machine Learning & Data Sciences', details: 'Hadoop, Jupyter, TensorFlow, Google Cloud AutoML' },
        ]}
      ].map((item, index) => (
        <div className="service-innovation-col-skill2" key={index}>
          <span className='service-innovation-icon-skill'>{item.icon}</span>
          <h2>{item.title}</h2>
          {item.skills.map((skill, skillIndex) => (
            <div className='skill_sub' key={skillIndex}>
              <h3>{skill.sub}</h3>
              <p>{skill.details}</p>
            </div>
          ))}
        </div>
      ))}
    </div> 
  },
  { name: 'Practices', content: 
    <div className="service-innovation-row-skill2">
      {[
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'Validated Designs', skills: [
          { sub: 'Discover', details: 'We believe every innovation begins by understanding your business, its goals, and your users problems.' },
          { sub: 'Design Sprint', details: 'Sketching and wireframing key workflows, often multiple variations, until we have some that feel right.' },
          { sub: 'Prototype & Validate', details: 'We deliver interactive, clickable screens of how final application would look and validate them with stakeholders and users.' },
        ]},
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'Rock-Solid Code', skills: [
          { sub: 'Security', details: 'We take security and compliance seriously, and we prepare our people for it. From SOC2 to HIPAA to PCI, your team is ready keep your company and users safe.' },
          { sub: 'Mandatory code review', details: 'All work goes through a mandatory code review for best practices.' },
          { sub: 'Idiomatic code', details: 'We adopt standards or code idioms depending on the language or framework.' },
          { sub: 'Rigorous QA', details: 'Your code is tested by both QA and automated scripts before your users ever see it.' },
        ]},
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'Build & Deploy', skills: [
          { sub: 'Good Documentation', details: 'We follow good documentation practices for better collaboration in commit, code and pull requests.' },
          { sub: 'Continuous Integration', details: 'Continuous integration is tied into rejections of merges and warning messages that are broadcast on Slack.' },
          { sub: 'Source Control', details: 'Source control practices include code, good documentation, and infrastructure as code too.' },
          { sub: 'Deployment and Monitoring', details: 'We monitor apps and services to detect issues and scale when needed.' },
        ]}
      ].map((item, index) => (
        <div className="service-innovation-col-skill2" key={index}>
          <span className='service-innovation-icon-skill'>{item.icon}</span>
          <h2>{item.title}</h2>
          {item.skills.map((skill, skillIndex) => (
            <div className='skill_sub' key={skillIndex}>
              <h3>{skill.sub}</h3>
              <p>{skill.details}</p>
            </div>
          ))}
        </div>
      ))}
    </div> 
  },
  { name: 'Industries', content: 
    <div className="service-innovation-row-skill1">
      {[
        { icon: <MdEmojiEmotions fontSize={30} />, title: 'Healthcare', desc: 'Advancing patient care through innovative tech solutions, enhancing medical processes, patient engagement, and data-driven insights for optimal health outcomes.' },
        { icon: <MdCrueltyFree fontSize={30} />, title: 'Technology', desc: 'Pioneering the digital frontier with cutting-edge solutions, transforming businesses, and shaping industries through seamless integration of technology into operations.' },
        { icon: <FaMattressPillow fontSize={30} />, title: 'Ed-Tech', desc: 'Revolutionizing education with immersive learning tools, connecting educators and learners, and fostering personalized growth for a globally accessible knowledge landscape.' },
        { icon: <MdOutlineCelebration fontSize={30} />, title: 'Fintech', desc: 'Redefining financial services through technology, offering secure, efficient, and inclusive solutions that empower businesses and individuals in an ever-evolving economic landscape.' },
        { icon: <MdLockOpen fontSize={30} />, title: 'Consumer & Retail', desc: 'Enhancing online experiences, empowering businesses with data-driven insights, and shaping the future of e-commerce through innovative digital strategies.' },
      ].map((item, index) => (
        <div className="service-innovation-col-skill1" key={index}>
          <span className='service-innovation-icon-skill'>{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div> 
  },
];

const Itemskill = () => {
  const [activeTab, setActiveTab] = useState('What we build');
  const openCity = (cityName) => setActiveTab(cityName);

  return (
    <div className='tab-skill'>
      <div className="service-innovation-title">
        <h2 className='service-innovation-title-header'><span>Skills  </span>at a glance</h2>
        <p className='service-innovation-title-desc'>We support a breadth of technologies, best practices, use cases, and industries. Here are some of them.</p>
      </div>

      <div className="tab-top">
        {tabs.map(tab => (
          <button
            key={tab.name}
            className={activeTab === tab.name ? 'tablinks active' : 'tablinks'}
            onClick={() => openCity(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {tabs.map(tab => (
        <div key={tab.name} id={tab.name} className={activeTab === tab.name ? 'tabcontent' : 'tabcontent hidden'}>
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default Itemskill;
