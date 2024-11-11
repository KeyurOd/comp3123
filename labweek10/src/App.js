import React, { useState } from 'react';
import DataEntryForm from './DataEntryForm';
import './App.css';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData); 
  };

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <DataEntryForm onSubmit={handleFormSubmit} />

      
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information:</h2>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>Address2: {submittedData.address2}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
