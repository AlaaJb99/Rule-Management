import { useState, useEffect } from 'react';
import Select from 'react-select';
import './Loading.css';
import { useNavigate } from 'react-router-dom';

function MultiSelect() {
  const [ruleOptions, setRuleOptions] = useState([]);
  const [documentOptions, setDocumentOptions] = useState([]);

  const [selectedRules, setSelectedRules] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useHistory to navigate to the second page
  const navigate = useNavigate();
  const [analyzation, setAnalyzation] = useState(null);

  const handleRuleSelectChange = (selectedRules) => {
    setSelectedRules(selectedRules);
  };

  const handleDocumentSelectChange = (selectedOption) => {
    setSelectedDocument(selectedOption); // Set the selected document
  };

  //useEffect to get the log files and rules from the backend
  useEffect(() => async function () {
    //GET http request to get all the avaiable rules and files
    await fetch('http://localhost:8080/rule')
      .then(response => response.json())
      .then(data => {
        setRuleOptions(data.map(rule => ({ value: rule.rule_name, label: rule.rule_name })));
      });

    await fetch('http://localhost:8080/log')
      .then(response => response.json())
      .then(data => setDocumentOptions(data.map(file => ({ value: file, label: file }))));
  }, []);

  const handleSubmit = () => {
    if (selectedRules.length === 0) {
      alert('You should choose at least one rule');
      return;
    }

    if (!selectedDocument) {
      alert('Please choose a document');
      return;
    }

    setIsLoading(true);

    const dataToSend = {
      selectedRules: selectedRules.map((option) => option.value),
      selectedDocument: selectedDocument.value, // Use the selected document value
    };
    console.log(dataToSend);


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend)
    };

    if (dataToSend) {
      fetch('http://localhost:8080/analyze', requestOptions)
        .then(response => response.json())
        .then(data => {
          setAnalyzation(data);
          setTimeout(() => {
            console.log('Data to send to the backend:', dataToSend);
            setIsLoading(false);
            navigate('/analyze', { state: { data } });
          }, 2000);
        });
    }
  };

  const handleCancel = () => {
    setSelectedRules([]);
    setSelectedDocument(null); // Reset selected document
  };

  return (
    <div>
      <h1>Select Rules and Document</h1>
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
        <label>Document:</label>
        <Select
          options={documentOptions}
          value={selectedDocument}
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