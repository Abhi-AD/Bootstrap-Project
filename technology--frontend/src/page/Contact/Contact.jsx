import { useEffect, useState } from 'react'
import './Contact.css'
import Location from '../../containers/Location/Location'
import contact from '../../assests/img/contact.png'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { ContactSchema } from '../../schema/requirement';
import { yupResolver } from '@hookform/resolvers/yup'

const Contact = () => {
  const [setSelectedCountry] = useState();
  const baseUrl = import.meta.env.VITE_REACT_APP_API
  const defaultValue = {
    name: '',
    email: '',
    phone: '',
    message: '',
    workRadio: '',
    service: [],
    country: "nepal"
  }
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(ContactSchema)
  })

  const [services, setServices] = useState([]);
  const [engagementchoices, setEngagementChoices] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const serviceAll = await axios.get(`${baseUrl}/api/visit/service/`);
        const engagementchoicesAll = await axios.get(`${baseUrl}/api/visit/engagementchoice/`);
        const serviceData = serviceAll.data.slice(0,10);
        const engagementchoicesData = engagementchoicesAll.data.slice(0, 4);
        setServices(serviceData)
        setEngagementChoices(engagementchoicesData)
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [baseUrl]);


  const createContact = async (value) => {
    try {
      const response = await axios.post(`${baseUrl}/api/visit/contact/`, value)
      if (response.status === 201) {
        alert('Contact submitted successfully!');
      }
    } catch (error) {
      alert("Contact submitted Error!")
      console.error('Error fetching blogs:', error);
    }
  }
  useMutation({ mutationFn: createContact })

  const onSubmit = async (data) => {
    const formData = {
      full_name: data?.name,
      email: data?.email,
      country: data?.country,
      phone_number: data?.phone,
      project_description: data?.message,
      engagement_type: data?.workRadio,
      services_needed: data?.service,
    }
    createContact(formData)
  }

  return (
    <div>
      <div className="contact">
        <div className="contact_header">
          <h1 className="contact_title">contact us</h1>
          <p className="contact_des">Join us in  <span>Shaping</span></p>
          <p className="desc_contact">Whether you&apos;re a new business aiming to kickstart operations or a large corporation seeking expansion, we have solutions tailored to meet your needs.</p>
        </div>


        <div className="contact_form">
          <div className="contact_form-left">
            <img src={contact} alt="contact" className='js-scroll fade-in fade-in-bottom' />
            <div className="vacancy">
              <h2 className='vacancy_title'>Searching for employment?</h2>
              <p className="vacancy_desc">Exciting roles are continuously emerging, ready for you to seize immediately. If you don&apos;t spot the ideal match right now, don&apos;t fret – we&apos;ll be sure to notify you as soon as new opportunities arise!</p>
              <Link className="apply_now" to={'/job'}>
                <span style={{ paddingRight: '10px' }}>apply now</span>
                <FaArrowRight className='fa' />
              </Link>
            </div>
            <div className="vacancy">
              <h2 className='vacancy_title'>Secure an internship opportunity.</h2>
              <p className="vacancy_desc">Explore our internship opportunities and find out how to reach out if you&apos;re interested in securing an internship position</p>
              <Link className="apply_now" to={'/job'}>
                <span style={{ paddingRight: '10px' }}>become an intern</span>
                <FaArrowRight className='fa' />
              </Link>
            </div>
          </div>
          <div className="contact_form-right">
            <div className="contact_form-right-header">
              <h2 className='contact_form-right-title'>Kindly complete <span>the form </span></h2>
              <p>We&apos;ll swiftly get in touch to explore potential collaboration opportunities. Expect to hear from us within two business days.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form__group">
                <label>Your full name</label>
                <input type="text" {...register('name')} placeholder='eg. John Doe' />
                {errors.name && <p className='error-message'>{errors.name.message}</p>}
                <hr />
                <p></p>
              </div>
              <div className="form__group">
                <label>Your email address</label>
                <input type='text' {...register('email')} placeholder='eg.you@example.con' />
                {errors.email && <p className='error-message'>{errors.email.message}</p>}
                <hr />
                <p>We won&apos;t send you spam.</p>
              </div>
              <div className="form__group">
                <label>How would you like to collaborate with us? </label>
                <p>We offer various options for engagement.</p>
                {engagementchoices.map((engagementchoice, index) => (
                  <button className="button__radio" type="button" key={index}>
                    <input
                      type="radio"
                      name="relocate"
                      value={engagementchoice.id}
                      className="contact_radio"
                      {...register('workRadio')}
                      id={engagementchoice.id}
                    />
                    <label htmlFor={engagementchoice.id}>
                      <img src={engagementchoice.image} alt={engagementchoice.name} className="button__icon" />
                      <div className="button__radio-content">
                        <span>{engagementchoice.name}</span>
                        <p>{engagementchoice.description}</p>
                      </div>
                    </label>
                  </button>
                ))}

                {errors.service && <p className='error-message'>{errors.service.message}</p>}
              </div>
              <div className="form__group">
                <label>What service do you require?</label>
                <p>Select all services you may need.</p>
                <div className="multiSelectorCheckbox">
                  {services.map((service, index) => (
                    <label className="multiSelectCheckbox__label" key={index}>
                      <input type='checkbox' value={service.id}  {...register('service')} />
                      <p className='checkbox'>{service.name}</p>
                    </label>
                  ))}
                  {errors.workRadio && <p className='error-message'>{errors.workRadio.message}</p>}
                </div>

              </div>
              <div className="form__group">
                <label>What is your phone number?</label>
                <div className="number">
                  <select className="country" onChange={handleCountryChange} {...register("country")}>
                    <option value="nepal">Nepal</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                  </select>
                  <input type="text" {...register("phone")} placeholder='Enter Your number' />
                </div>
                {errors.phone && <p className='error-message'>{errors.phone.message}</p>}
              </div>
              <div className="form__group">
                <label>Tell us something about your project</label>
                <div className="textarea">
                  <textarea {...register("message")} placeholder='eg. I am looking to develop this incredible app that...' cols="5" rows="5"></textarea></div>
                {errors.message && <p className='error-message'>{errors.message.message}</p>}
              </div>
              <button className='contact_button'>send a message</button>
            </form>
          </div>
        </div>
      </div>
      <Location />
    </div>
  )
}

export default Contact