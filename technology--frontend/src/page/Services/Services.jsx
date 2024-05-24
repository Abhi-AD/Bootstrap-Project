import { useEffect, useState } from 'react'
import { ServiceAbout, ServiceFooter, ServiceHeader, ServiceInnovation, ServiceWork } from '../../containers/index'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Termional } from '../../components';

const Services = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/visit/tabcard/${id}/`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);
  return (
    <div>
      <ServiceHeader post={post}/>
      <Termional />
      <ServiceInnovation />
      <ServiceWork />
      <ServiceAbout />
      <ServiceFooter />
    </div>
  )
}

export default Services
