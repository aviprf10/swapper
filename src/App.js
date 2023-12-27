// src/App.js
import React from 'react';
import TopAlbumsCarousel from './components/TopAlbumsCarousel';
import NewAlbumsCarousel from './components/NewAlbumsCarousel';
//import FilterSection from './components/FilterSection';
//import FAQAccordion from './components/FAQAccordion';

function App() {
  return (
    <div>
      <h1>Qtify App</h1>
      <TopAlbumsCarousel />
      <NewAlbumsCarousel />
       {/* <FilterSection /> */}
      {/* <FAQAccordion />  */}
    </div>
  );
}

export default App;
