import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaVolumeUp, FaCar, FaExclamationTriangle, FaUserSlash, FaTrash, FaHome, FaUserSecret, FaBuilding, FaFire, FaFileAlt, FaCheck, FaUpload } from 'react-icons/fa';
import toast from 'react-hot-toast';
import '../styles/ComplaintForm.css';

function ComplaintForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [evidenceDescription, setEvidenceDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [email, setEmail] = useState('');
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const suggestions = [
    'No.36, south alley, chennai',
    'No.36, south alley, coimbatore'
  ];

  const emailSuggestions = [
    'sairam1203mr@gmail.com',
    'philosanjaychamberline.26c@gmail.com',
    'asd@ad.com'
  ];

  const complaintTypes = [
    { id: 'noise', icon: <FaVolumeUp />, label: 'Noise Complaint' },
    { id: 'traffic', icon: <FaCar />, label: 'Traffic Violation' },
    { id: 'suspicious', icon: <FaExclamationTriangle />, label: 'Suspicious Activity' },
    { id: 'harassment', icon: <FaUserSlash />, label: 'Harassment' },
    { id: 'vandalism', icon: <FaTrash />, label: 'Vandalism' },
    { id: 'domestic', icon: <FaHome />, label: 'Domestic Dispute' },
    { id: 'theft', icon: <FaUserSecret />, label: 'Theft' },
    { id: 'fraud', icon: <FaBuilding />, label: 'Fraud' },
    { id: 'fire', icon: <FaFire />, label: 'Fire Emergency' },
    { id: 'other', icon: <FaFileAlt />, label: 'Other' },
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleLocationSelect = (suggestion) => {
    setLocation(suggestion);
    setShowSuggestions(false);
  };

  const handleEmailSelect = (suggestion) => {
    setEmail(suggestion);
    setShowEmailSuggestions(false);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Complaint submitted successfully!', {
      duration: 4000,
      style: {
        background: '#CBFF96',
        color: '#1A1A1A',
      },
    });
    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const getSelectedComplaintType = () => {
    const selected = complaintTypes.find(type => type.id === selectedType);
    return selected ? selected.label : '';
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-section">
            <h2>Step 1: Complaint Type</h2>
            <p>Select the type of complaint you want to register</p>

            <div className="complaint-types-grid">
              {complaintTypes.map((type) => (
                <div
                  key={type.id}
                  className={`complaint-type-card ${selectedType === type.id ? 'selected' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="complaint-type-icon">{type.icon}</div>
                  <div className="complaint-type-label">{type.label}</div>
                </div>
              ))}
            </div>

            <div className="description-section">
              <h3>Brief Description</h3>
              <textarea
                placeholder="Please describe the issue in detail"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-buttons">
              <button className="cancel-button" onClick={() => navigate('/')}>
                Cancel
              </button>
              <button 
                className="next-button"
                disabled={!selectedType || !description.trim()}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-section">
            <h2>Step 2: Location Details</h2>
            <p>Provide the location where the incident occurred</p>

            <div className="location-section">
              <h3>Address</h3>
              <div className="location-input-container">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Enter the location"
                  className="location-input"
                />
                {showSuggestions && location && (
                  <div className="location-suggestions">
                    {suggestions
                      .filter(suggestion => 
                        suggestion.toLowerCase().includes(location.toLowerCase())
                      )
                      .map((suggestion, index) => (
                        <div
                          key={index}
                          className="suggestion-item"
                          onClick={() => handleLocationSelect(suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-buttons">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
              <button 
                className="next-button"
                disabled={!location.trim()}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-section">
            <h2>Step 3: Evidence Submission</h2>
            <p>Upload photos, videos, or audio recordings related to your complaint</p>

            <div className="evidence-section">
              <div 
                className="upload-area"
                onClick={() => fileInputRef.current?.click()}
              >
                <FaUpload className="upload-icon" />
                <p>Click to upload files</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  multiple
                  style={{ display: 'none' }}
                />
              </div>

              {selectedFiles.length > 0 && (
                <div className="selected-files">
                  <h4>Selected Files:</h4>
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="evidence-description">
                <h3>Evidence Description</h3>
                <textarea
                  placeholder="Add any additional information about the evidence..."
                  value={evidenceDescription}
                  onChange={(e) => setEvidenceDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="form-buttons">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
              <button 
                className="next-button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-section">
            <h2>Step 4: Contact Information</h2>
            <p>Provide your contact details so we can update you on your complaint</p>

            <div className="contact-section">
              <h3>Email Address</h3>
              <div className="email-input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setShowEmailSuggestions(true);
                  }}
                  onFocus={() => setShowEmailSuggestions(true)}
                  placeholder="Enter your email address"
                  className="email-input"
                />
                {showEmailSuggestions && email && (
                  <div className="email-suggestions">
                    {emailSuggestions
                      .filter(suggestion => 
                        suggestion.toLowerCase().includes(email.toLowerCase())
                      )
                      .map((suggestion, index) => (
                        <div
                          key={index}
                          className="suggestion-item"
                          onClick={() => handleEmailSelect(suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-buttons">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
              <button 
                className="next-button"
                disabled={!email.trim()}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-section">
            <h2>Step 5: Review & Submit</h2>
            <p>Please review your complaint details before submitting</p>

            <div className="review-section">
              <div className="review-item">
                <h3>Complaint Type</h3>
                <p className="review-value">{getSelectedComplaintType()}</p>
                <p className="review-description">{description}</p>
              </div>

              <div className="review-item">
                <h3>Location</h3>
                <p className="review-value">{location}</p>
              </div>

              <div className="review-item">
                <h3>Evidence</h3>
                <p className="review-value">
                  {selectedFiles.length > 0 
                    ? `${selectedFiles.length} file(s) uploaded` 
                    : 'No files uploaded'}
                </p>
                <p className="review-description">
                  {evidenceDescription || 'No additional description provided'}
                </p>
              </div>

              <div className="review-item">
                <h3>Contact Information</h3>
                <p className="review-value">{email}</p>
              </div>
            </div>

            <div className="form-buttons">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
              <button 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="complaint-form-container">
      <h1>Register New Complaint</h1>
      <p className="subtitle">Please provide the details of your complaint. All information will be kept confidential.</p>

      <div className="progress-steps">
        <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
          <div className="step-number">
            {currentStep > 1 ? <FaCheck className="check-icon" /> : '1'}
          </div>
          <div className="step-label">Type</div>
        </div>
        <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
          <div className="step-number">
            {currentStep > 2 ? <FaCheck className="check-icon" /> : '2'}
          </div>
          <div className="step-label">Location</div>
        </div>
        <div className={`step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
          <div className="step-number">
            {currentStep > 3 ? <FaCheck className="check-icon" /> : '3'}
          </div>
          <div className="step-label">Evidence</div>
        </div>
        <div className={`step ${currentStep >= 4 ? 'active' : ''} ${currentStep > 4 ? 'completed' : ''}`}>
          <div className="step-number">
            {currentStep > 4 ? <FaCheck className="check-icon" /> : '4'}
          </div>
          <div className="step-label">Contact</div>
        </div>
        <div className={`step ${currentStep >= 5 ? 'active' : ''}`}>
          <div className="step-number">5</div>
          <div className="step-label">Review</div>
        </div>
      </div>

      {renderStep()}
    </div>
  );
}

export default ComplaintForm;