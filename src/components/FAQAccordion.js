// src/components/FAQAccordion.jsx
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

const FAQAccordion = () => {
  const [faqData, setFaqData] = useState([]);

  const fetchFaqData = async () => {
    try {
      const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
      setFaqData(response.data);
    } catch (error) {
      console.error('Error fetching FAQ data:', error);
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  return (
    <div>
      <h2>FAQ Accordion</h2>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQAccordion;
