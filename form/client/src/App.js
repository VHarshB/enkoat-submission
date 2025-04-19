import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('form');

  const [formData, setFormData] = useState({
    contractorName: '',
    company: '',
    roofSize: '',
    roofType: '',
    projectCity: '',
    projectState: '',
    projectDate: ''
  });

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/quotes');
        setQuotes(response.data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit-quote', formData);
      alert('Quote submitted successfully!');
      setFormData({
        contractorName: '',
        company: '',
        roofSize: '',
        roofType: '',
        projectCity: '',
        projectState: '',
        projectDate: ''
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('There was an error submitting the quote.');
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
      <h2 class="brand-title">EnKoat</h2>
      <h3 class="portal-subtitle">Quote Portal</h3>

        <ul>
          <li className={selectedTab === 'form' ? 'active' : ''} onClick={() => setSelectedTab('form')}>Form</li>
          <li className={selectedTab === 'help' ? 'active' : ''} onClick={() => setSelectedTab('help')}>Help</li>
        </ul>
      </aside>

      <main className="main-content">
        {selectedTab === 'form' && (
          <>
            <h1>Contractor Quote Submission form</h1>
            <form onSubmit={handleSubmit} className="form">
              <input name="contractorName" value={formData.contractorName} onChange={handleChange} placeholder="Contractor Name" />
              <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
              <input name="roofSize" type="number" value={formData.roofSize} onChange={handleChange} placeholder="Roof Size (sq ft)" />
              <input name="roofType" value={formData.roofType} onChange={handleChange} placeholder="Roof Type" />
              <input name="projectCity" value={formData.projectCity} onChange={handleChange} placeholder="Project City" />
              <input name="projectState" value={formData.projectState} onChange={handleChange} placeholder="Project State" />
              <input name="projectDate" type="date" value={formData.projectDate} onChange={handleChange} />
              <button type="submit">Submit Quote</button>
            </form>

          </>
        )}

        {selectedTab === 'help' && (
          <div className="help-placeholder">
            <h1>Need help in filling the form?
            
            </h1>
            {/* Replace this with actual Help info */}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
