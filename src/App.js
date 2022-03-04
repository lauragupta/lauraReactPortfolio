
import React, { useState } from 'react';
import NavTabs from './Components/NavTabs';
import AboutMe from './Components/Pages/AboutMe';
// import Portfolio from './Components/Pages/Portfolio';
// import Contact from './Components/Pages/Contact';
// import Resume from './Components/Pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};

export default App;