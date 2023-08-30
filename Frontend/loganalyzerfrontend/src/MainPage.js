import React, { useState } from 'react';
import Select from 'react-select';
import './Loading.css';

function MultiSelect() {
  const ruleOptions = [
    { value: 'Error Detection', label: 'Error Detection' },
    { value: 'Warning Identification', label: 'Warning Identification' },
    { value: 'Authentication Issue', label: 'Authentication Issue' },
    { value: 'Network Anomalies', label: 'Network Anomalies' },
    { value: 'Performance Bottlenecks', label: 'Performance Bottlenecks' },
    { value: 'Security Breach Attempt', label: 'Security Breach Attempt' },
    { value: 'Resource Monitoring', label: 'Resource Monitoring' },
    { value: 'Successful Transactions', label: 'Successful Transactions' },
    { value: 'Application Events', label: 'Application Events' },
    { value: 'Informational Logs', label: 'Informational Logs' },
    { value: 'Unauthorized Access', label: 'Unauthorized Access' },
    { value: 'Anomaly Detection', label: 'Anomaly Detection' },
    { value: 'Malicious Activity', label: 'Malicious Activity' },
    { value: 'Resource Exceedance', label: 'Resource Exceedance' },
    { value: 'Latency Threshold', label: 'Latency Threshold' },
    { value: 'Outages and Downtime', label: 'Outages and Downtime' },
    { value: 'Critical Errors', label: 'Critical Errors' },
    { value: 'Successful Transactions', label: 'Successful Transactions' },
    { value: 'Regulatory Compliance', label: 'Regulatory Compliance' },
    { value: 'Data Privacy', label: 'Data Privacy' },
    { value: 'Network Connectivity', label: 'Network Connectivity' },
    { value: 'Hardware Failure', label: 'Hardware Failure' },
  ];
  const documentOptions = [
    { value: 'a', label: 'Document A' },
    { value: 'b', label: 'Document B' },
    { value: 'c', label: 'Document C' },
    // Add more document options as needed
  ];

  const [selectedRules, setSelectedRules] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRuleSelectChange = (selectedRules) => {
    setSelectedRules(selectedRules);
  };

  const handleDocumentSelectChange = (selectedDocuments) => {
    setSelectedDocuments(selectedDocuments);
  };

  const handleSubmit = () => {
    if (selectedRules.length === 0) {
      alert('You should choose at least one rule');
      return;
    }

    if (selectedDocuments.length === 0) {
      alert('You should choose at least one document');
      return;
    }

    setIsLoading(true);

    const dataToSend = {
      selectedRules: selectedRules.map((option) => option.value),
      selectedDocuments: selectedDocuments.map((option) => option.value),
    };

    setTimeout(() => {
      console.log('Data to send to the backend:', dataToSend);
      setIsLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setSelectedRules([]);
    setSelectedDocuments([]);
  };

  return (
    <div>
      <h1>Select Rules and Documents</h1>
      <div>
        <label>Rules:</label>
        <Select
          isMulti
          options={ruleOptions}
          value={selectedRules}
          onChange={handleRuleSelectChange}
        />
      </div>
      <div>
        <label>Documents:</label>
        <Select
          isMulti
          options={documentOptions}
          value={selectedDocuments}
          onChange={handleDocumentSelectChange}
        />
      </div>
      <br />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? (
          <div className="loading-overlay">
            <div className="loading-bars">
              <div className="loading-bar">L</div>
              <div className="loading-bar">o</div>
              <div className="loading-bar">a</div>
              <div className="loading-bar">d</div>
              <div className="loading-bar">i</div>
              <div className="loading-bar">n</div>
              <div className="loading-bar">g</div>
            </div>
          </div>
        ) : (
          'Submit'
        )}
      </button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default MultiSelect;
