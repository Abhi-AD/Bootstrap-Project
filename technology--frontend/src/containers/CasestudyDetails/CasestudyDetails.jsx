import './CasestudyDetails.css';
import CaseStudyHeader from './CaseStudyHeader/CaseStudyHeader'
import CaseStudyDes from './CaseStudyDes/CaseStudyDes';
import { Gallery } from '../../components/index'


const CasestudyDetails = () => {
    return (
        <div>
            <CaseStudyHeader />
            <Gallery />
            <CaseStudyDes />
        </div>
    );
}

export default CasestudyDetails;
