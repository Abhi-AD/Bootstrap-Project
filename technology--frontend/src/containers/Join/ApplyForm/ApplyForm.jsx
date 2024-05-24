import{ useEffect, useState } from 'react'
import './ApplyForm.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { dateFormate } from '../../../utils/dateFormate';
import { FaRegCalendar, FaRupeeSign } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import { JobApplicationSchema } from '../../../schema/requirement';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
const ApplyForm = () => {
     const [activeTab, setActiveTab] = useState('Job');

     const openItem = (itemname) => {
          setActiveTab(itemname);
     };
     const { id } = useParams();
     const [post, setPost] = useState(null);
     const [setSelectedCountry] = useState();

     const defaultValue = {
          full_name: '',
          email: '',
          country: 'nepal',
          phone_number: '',
          cv_or_resume: '',
          photo: '',
          cover_letter: '',
          relocate_to_pune: '',
          additional_question: '',
     }


     const handleCountryChange = (event) => {
          setSelectedCountry(event.target.value);
     };
     const { register, handleSubmit, formState: { errors }, setValue } = useForm({
          defaultValues: defaultValue,
          resolver: yupResolver(JobApplicationSchema)
     })



     useEffect(() => {
          axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/jobvacancy/${id}/`)
               .then(response => {
                    setPost(response.data);
               })
               .catch(error => {
                    console.error('Error fetching data: ', error);
               });
     }, [id]);

     const JobApplication = async (value) => {
          try {
               const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/visit/jobapplicationform1/`, value)
               console.log(response, "response")
               if (response.status === 201) {
                    alert('JobApplication submitted successfully!');
               }
          } catch (error) {
               alert("JobApplication submitted Error!")
               console.error('Error fetching blogs:', error);
          }
     }
     useMutation({ mutationFn: JobApplication })

     const onSubmit = async (data) => {
          console.log(data, "data")
          const formData = {
               job: id,
               full_name: data?.full_name,
               email: data?.email,
               country: data?.country,
               phone_number: data?.phone_number,
               cv_or_resume: data?.cv_or_resume,
               photo: data?.photo,
               cover_letter: data?.cover_letter,
               relocate_to_pune: data?.relocate_to_pune,
               additional_question: data?.additional_question,
          }
          JobApplication(formData)
     }



     return (
          <div>
               {post && (
                    <div className="apply-form-title">
                         <h1 className='job_title'>{post.vacancy_title}</h1>
                         <p className='job_location'><FaLocationDot size={20} />{post.location}</p>
                         <div className="job_footer">
                              <p className='job_salary'><FaRupeeSign size={20} />{post.vacancy_salary}</p>
                              <p className='job_date'><FaRegCalendar size={20} />{dateFormate(post.post_date)}</p>
                         </div>
                    </div>
               )}
               <div className='apply-form'>
                    <div className="apply-form-header">
                         <div className="apply-form-link">
                              <Link className={activeTab === 'Job' ? 'switch-button active' : "switch-button"} onClick={() => {
                                   openItem('Job');
                              }}>Job details</Link>
                              <Link className={activeTab === 'JobForm' ? 'switch-button active' : "switch-button"} onClick={() => {
                                   openItem('JobForm');
                              }}>Apply</Link>
                         </div>
                    </div>



                    <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' id="JobForm" className="apply-form-data" style={{ display: activeTab === 'JobForm' ? 'block' : 'none' }}>
                         <div className='apply-form-data-field'>
                              <span>CV or resume</span>
                              <p>Upload your CV or resume file</p>
                              <div className="filed-input">
                                   <input
                                        type="file"
                                        onChange={(e) => {
                                             setValue("cv_or_resume", e.target.files[0])
                                        }}
                                   />

                                   <p><span style={{ color: 'var(--main-color)' }}>Upload file</span> or drag and drop here</p>
                                   <p>Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.</p>
                              </div>
                         </div>
                         {errors.cv_or_resume && <p className='error-message'>{errors.cv_or_resume.message}</p>}
                         <div className='apply-form-data-field'>
                              <span>My information</span>
                              <p>Fill out the information below.</p>

                              <div className="inputdata">
                                   <span>Full name</span>
                                   <input type="text" {...register('full_name')} placeholder='Full name' />
                              </div>
                              {errors.full_name && <p className='error-message'>{errors.full_name.message}</p>}
                              <div className="inputdata">
                                   <span>Email address</span>
                                   <input type="email" {...register('email')} placeholder='Your email address' />
                              </div>
                              {errors.email && <p className='error-message'>{errors.email.message}</p>}
                              <div className="inputdata">
                                   <span>JobApplication</span>
                                   <div className="inputdata-input">
                                        <select className="country" onChange={handleCountryChange} {...register('country')}>
                                             <option value="nepal">Nepal</option>
                                             <option value="india">India</option>
                                             <option value="usa">USA</option>
                                        </select>
                                        <input type="tel" placeholder='+977 ' {...register('phone_number')} />
                                   </div>
                                   {errors.phone_number && <p className='error-message'>{errors.phone_number.message}</p>}
                              </div>

                              <p>Photo</p>
                              <div className="filed-input">
                                   <input
                                        type="file"
                                        onChange={(e) => {
                                             setValue("photo", e.target.files[0])
                                        }}
                                   />
                                   <p><span style={{ color: 'var(--main-color)' }}>Upload file</span> or drag and drop here</p>
                                   <p>Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.</p>
                              </div>
                         </div>
                         {errors.photo && <p className='error-message'>{errors.photo.message}</p>}
                         <div className='apply-form-data-field'>
                              <span>Cover Letter</span>
                              <p>Upload your Cover letter</p>
                              <p className='question-title'>Photo</p>
                              <div className="filed-input">
                                   <input type="file"
                                        onChange={(e) => {
                                             setValue("cover_letter", e.target.files[0])
                                        }}
                                   />
                                   <p><span style={{ color: 'var(--main-color)' }}>Upload file</span> or drag and drop here</p>
                                   <p>Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.</p>
                              </div>
                         </div>
                         {errors.cover_letter && <p className='error-message'>{errors.cover_letter.message}</p>}
                         <div className='apply-form-data-field'>
                              <span>Questions</span>
                              <p>Please fill in additional questions</p>

                              <div className="question">
                                   <p className='question-title'>Are you fine relocating to Pune?</p>
                                   <div className="answeropetion">
                                        <label className='text'>
                                             <input type="radio" name="relocate" {...register("relocate_to_pune")} value="true" className="radio" />
                                             Yes
                                        </label>
                                        <label className='text'>
                                             <input type="radio" name="relocate" {...register("relocate_to_pune")} value="false" className="radio" />
                                             No
                                        </label>
                                   </div>
                              </div>

                              <div className="question">
                                   <p className='question-title'>Are you fine relocating to Pune ?</p>
                                   <textarea  {...register('additional_question')} placeholder='eg. I am looking to develop this incredible app that...' cols="5" rows="5"></textarea>
                              </div>
                         </div>
                         <div className="submit-button-container">
                              <button type="submit" className="submit-button">Submit</button>
                         </div>
                    </form>

                    {
                         post && (
                              <div id='Job' className="apply-form-data" style={{ display: activeTab === 'Job' ? 'block' : 'none' }}>
                                   <div className='job-desc'>
                                        <h3 className='job-desc-header'>Job description</h3>
                                        <div className="job-desc-box">
                                             <strong className='job-desc-topics'>About Leapfrog</strong>
                                             <p className='job-desc-topics'>{post.vacancy_des} </p>
                                        </div>
                                        <div className="job-desc-box">
                                             <strong className='job-desc-topics'>About the role</strong>
                                             <p className='job-desc-topics'>{post.roles} </p>
                                        </div>
                                        <div className="job-desc-box">
                                             <strong className='job-desc-topics'>Job requirements</strong>
                                             <p className='job-desc-topics'>{post.vacancy_requirements} </p>
                                        </div>
                                        <div className="job-desc-box">
                                             <strong className='job-desc-topics'>Job requirements Skills:</strong>
                                             <p className='job-desc-topics'>{post.vacancy_skills} </p>
                                        </div>
                                   </div>
                              </div>
                         )
                    }

               </div >
          </div >
     )
}

export default ApplyForm
