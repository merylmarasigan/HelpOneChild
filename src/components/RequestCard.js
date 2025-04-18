// src/components/RequestCard.js
import React from 'react';
import './RequestCard.css'; // We'll create this CSS file next

const RequestCard = ({ request = {} }) => {
  const {
    timeframe = '7-10',
    type = 'Normal Request',
    title = 'Support Request',
    description = 'No description provided.',
    id = '000000',
    childrenServed = 0,
    adultsServed = 0,
    tier = 1,
    tierType = 'Physical Needs',
    agency = 'Unknown',
    location = 'Unknown',
    county = 'Unknown',
    estimatedValue = 0,
    website = 'pray.serve.give',
    needs = []
  } = request;

  return (
    <div className="request-card">
      {/* Header with urgency and request type */}
      <div className="request-header">
        <div className="urgency-indicator">
          <span className="alert-icon">⚠️</span>
          <span>Within {timeframe} days</span>
        </div>
        <div className="request-type">
          <span>{type}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="request-title">{title}</h1>
      
      {/* Orange divider */}
      <hr className="divider" />
      
      {/* Description */}
      <div className="request-description">
        <p>{description}</p>
      </div>
      
      {/* Request metadata */}
      <div className="request-meta">
        <p>
          <strong>Request:</strong> #{id} &nbsp;
          <strong>Children Served:</strong> {childrenServed} &nbsp;
          <strong>Adults Served:</strong> {adultsServed} &nbsp;
          <strong>Tier {tier}:</strong> {tierType}
        </p>
        <p>
          <strong>Agency:</strong> {agency} &nbsp;
          <strong>Location:</strong> {location} &nbsp;
          <strong>County:</strong> {county}
        </p>
      </div>
      
      {/* Orange divider */}
      <hr className="divider" />
      
      {/* Needs section */}
      <div className="needs-section">
        <div className="needs-header">
          <span className="plus-icon">➕</span>
          <h2>Needs</h2>
          <span className="estimated-value">(Estimated value: ${estimatedValue})</span>
        </div>
        
        {/* Needs list */}
        <div className="needs-list">
          {needs.length > 0 ? (
            needs.map((need, index) => (
              <div key={index} className="need-item">
                <div className="need-icon">
                  {need.icon === 'car-seat' ? '👶' : '🚗'}
                </div>
                <div className="need-details">
                  <h3>{need.name}</h3>
                  <p>{need.quantity} out of {need.total} items still needed</p>
                </div>
              </div>
            ))
          ) : (
            <p>No specific needs listed at this time.</p>
          )}
        </div>
      </div>
      
      {/* Help button */}
      <div className="help-button-container">
        <button className="help-button">YES, I CAN HELP!</button>
        <p className="website">{website}</p>
      </div>
    </div>
  );
};

export default RequestCard;