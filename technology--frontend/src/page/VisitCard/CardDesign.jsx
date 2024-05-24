import { useRef } from 'react';
import PropTypes from 'prop-types';
import './CardDesign.css';
import { FaDownload } from 'react-icons/fa';
import QR from '../../assests/img/QR.png';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import QRCode from 'qrcode.react';

const CardDesign = (props) => {
  const { formData } = props;
  const { name, post, email, phone, website, address_line_1, address_line_2, qrData } = formData ?? {};
  const cardRef = useRef(null);

  const handleDownload = () => {
    html2canvas(cardRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, 'card_design.png');
      });
    });
  };

  return (
    <div>
      <div className="card" ref={cardRef}>
        <div className="front-side">
          <div className="info-grid">
            <div className="name">
              <h2>{name?.slice(0, 15)}</h2>
              <h5>{post}</h5>
            </div>
            <div className="addr">
              <p>
                {address_line_1}
                {address_line_2}
              </p>
            </div>
            <div className="phoneNo">
              <p>+977 {phone}</p>
            </div>
            <div className="emailId">
              <p className="web">{website?.slice(0, 25)}</p>
              <p className="email">{email}</p>
            </div>
          </div>
        </div>
        <div className="back-side">
          <div className="name-tag">
            {qrData ? (
              <div className="qr-code">
                <QRCode value={qrData} />
              </div>
            ) : (
              <img src={QR} alt="QR Code" className="qrcode" />
            )}
          </div>
        </div>
      </div>
      <button className="download" onClick={handleDownload}>
        <FaDownload />
        Download
      </button>
    </div>
  );
};

CardDesign.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    post: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    address_line_1: PropTypes.string,
    address_line_2: PropTypes.string,
    qrData: PropTypes.string,
  }),
};

export default CardDesign;
