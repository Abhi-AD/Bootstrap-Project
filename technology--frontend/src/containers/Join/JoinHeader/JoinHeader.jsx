import './JoinHeader.css'
import joinheader from '../../../assests/img/joinheader.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
const JoinHeader = () => {
  return (
    <div className='join-header'>
      <div className="join-header-title">
        <h1 className='join-header-title-header'>careers</h1>
        <p className='join-header-title-title'>Seeking those with a pogressive attitude,curiosity and innovation....<br /><span>Interested?</span></p>
      </div>
      <div className="join-header-body">
        <div className="join-header-body-col">
          <p className="join-header-body-col-title1">We are open to those with boundless eagerness,an adaptable perspective and a dedication to swift learning.</p>
          <p className="join-header-body-col-title2">
            Join us on a transformative journey that extends beyond mere employment. At Leapfrog, you&apos;ll discover an atmosphere that nurtures development, education, and teamwork. It&apos;s a space that embraces varied viewpoints, encourages responsible autonomy, motivates you to strive for excellence, and acknowledges achievements of all sizes.





          </p>
          <div className='case-card-button'>
            <span className='request'>👋 We&apos;re hiring!</span>
            <Link className='case-card-box' to={`/case-study-details`}>
              <div className="icon-text-container">
                <span>get in touch</span>
                <FaArrowRight className='' />
              </div>
            </Link>
          </div>
        </div>
        <div className="join-header-body-col">
          <img src={joinheader} alt="" className='serviceheader' />
        </div>
      </div>
    </div>
  )
}

export default JoinHeader
