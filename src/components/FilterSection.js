// src/components/FilterSection.jsx
import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import axios from 'axios';

const FilterSection = () => {
  const [value, setValue] = useState(0);
  const [tabData, setTabData] = useState([]);

  const fetchTabData = async () => {
    try {
      const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
      setTabData(response.data);
    } catch (error) {
      console.error('Error fetching tab data:', error);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Your logic to handle tab change
  };

  useEffect(() => {
    fetchTabData();
  }, []);

  return (
    <div>
      <h2>Filter Section</h2>
      <Tabs value={value} onChange={handleChange} centered>
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.name} />
        ))}
      </Tabs>
      {/* Render content based on the selected tab */}
    </div>
  );
};

export default FilterSection;
