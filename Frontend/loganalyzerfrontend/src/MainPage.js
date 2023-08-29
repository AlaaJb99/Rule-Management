import React, { useState } from 'react';
import Select from 'react-select';
import './Loading.css';

function MultiSelect() {
    const options = [
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
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const handleSelectChange = (selectedOptions) => {
  //   setSelectedOptions(selectedOptions);
    
  //   // Get an array of selected values
  // const selectedValues = selectedOptions.map((option) => option.value);
    
  //   // Call the onSelectedValues function with the selected values
  //   onSelectedValues(selectedValues);
  // };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleSubmit = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      console.log('Selected options:', selectedOptions);
      setIsLoading(false); // End loading after the operation is complete
    }, 10000);
  };

  const handleCancel = () => {
    setSelectedOptions([]); // Reset selected options
  };

  return (
    <div>
      <h1>Select Rules</h1>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleSelectChange}
      />
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
