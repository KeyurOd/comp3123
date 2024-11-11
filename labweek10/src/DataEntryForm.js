import React, { useState } from 'react';

const DataEntryForm = ({ onSubmit }) => {
  
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2:'',
    city: '',
    province: '',
    postalCode: '',
    checkbox:''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <p>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>
      </p>
      <p>
      <label>
        Address2:
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          
        />
      </label>
      </p>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Province:
        <select type="text" name="province" value={formData.province} onChange={handleChange} required>
        <option value="Select">Select Province</option>
        <option value="AB">Alberta</option>
        <option value="BC">British Columbia</option>
        <option value="MB">Manitoba</option>
        <option value="NB">New Brunswick</option>
        <option value="NL">Newfoundland and Labrador</option>
        <option value="NT">Northwest Territories</option>
        <option value="NS">Nova Scotia</option>
        <option value="NU">Nunavut</option>
        <option value="ON">Ontario</option>
        <option value="PE">Prince Edward Island</option>
        <option value="QC">Quebec</option>
        <option value="SK">Saskatchewan</option>
        <option value="YT">Yukon</option>
        </select>
      </label>
      <label>
        Postal Code:
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
      </label>
      <p>
        <input type='checkbox' id="terms" name="checkbox" required/>
        <label for="terms"> Agree Terms & Conditions? </label>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataEntryForm;
