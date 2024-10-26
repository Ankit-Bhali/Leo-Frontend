import React, { useState } from 'react';
import axios from 'axios';
import './Message.css'; // Ensure CSS is loaded properly

const Message = () => {
  const [message, setMessage] = useState({
    FullName: '',
    Email: '',
    Phone: '',
    Company: '',
    Service: '',
    Budget: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '', visible: false }); // Alert state

  const postUserData = (e) => {
    const { name, value } = e.target;
    if (name === 'Phone' && !/^\d*$/.test(value)) return; // Allow only numbers for phone
    if (name === 'Phone' && value.length > 10) return; // Limit to 10 digits
    setMessage({ ...message, [name]: value });
  };

  const validateFields = () => {
    const newErrors = {};
    Object.entries(message).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = 'Please fill this field';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    setLoading(true);

    const { FullName, Email, Phone, Company, Budget, Service } = message;

    try {
      await axios.post('http://localhost:5000/send-email', {
        to: Email,
        User: FullName,
        PhoneNumber: Phone,
        CompanyName: Company,
        BudetAs: Budget,
        ServiceRe: Service

      });

      const res = await fetch(
        'https://leo-digitals-ee953-default-rtdb.firebaseio.com/userDataRecord.json',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ FullName, Email, Phone, Company, Budget, Service }),
        }
      );

      if (res.ok) {
        showAlert('success', 'Thanks for contacting us!');
        setMessage({ FullName: '', Email: '', Phone: '', Company: '', Service: '', Budget: '' });
      } else {
        showAlert('error', 'Submission failed, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showAlert('error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (type, message) => {
    setAlert({ type, message, visible: true });
    setTimeout(() => setAlert({ ...alert, visible: false }), 3000); // Auto-hide after 3 seconds
  };

  return (
    <section className="contact-area contact-area-v3 pt-130 pb-130">
      <div className="container-1350">
        <div className="contact-wrapper light-gray-bg pt-80 pb-80 wow fadeInUp" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center mb-55">
                  <span className="sub-title st-one">Message Us</span>
                  <h2>Get Any Consultations? Contact With Us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-form">
                  <form method="POST" onSubmit={submitData} autoComplete="off">
                    <div className="row">
                      {[
                        { name: 'FullName', type: 'text', placeholder: 'Full Name' },
                        { name: 'Email', type: 'email', placeholder: 'Email Address' },
                        { name: 'Phone', type: 'tel', placeholder: 'Phone Number' },
                        { name: 'Company', type: 'text', placeholder: 'Company Name' },
                        { name: 'Service', type: 'text', placeholder: 'Services Required' },
                        { name: 'Budget', type: 'number', placeholder: 'Budget' },
                      ].map((input) => (
                        <div className="col-lg-4" key={input.name}>
                          <div className="form_group">
                            <label>
                              {input.placeholder} <span className="text-danger">*</span>
                            </label>
                            <input
                              type={input.type}
                              className="form_control"
                              name={input.name}
                              placeholder={input.placeholder}
                              value={message[input.name]}
                              onChange={postUserData}
                              required
                            />
                            {errors[input.name] && (
                              <span className="error-text text-danger">
                                {errors[input.name]}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}

                      <div className="col-lg-12">
                        <div className="form_group text-center">
                          <button className="main-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                          </button>
                        </div>
                      </div>

                      {alert.visible && (
                        <div className={`alert-box ${alert.type}`}>
                          {alert.message}
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
