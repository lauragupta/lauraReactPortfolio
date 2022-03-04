
import React, { useState } from 'react';
import NavTabs from './NavTabs';
// import AboutMe from './pages/AboutMe';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState("");

  // const renderPage = () => {
  //   if (currentPage === 'About Me') {
  //     return <AboutMe />;
  //   }
  //   if (currentPage === 'Portfolio') {
  //     return <Portfolio />;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   return <Resume />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* {renderPage()} */}
    </div>
  );
}

export default App;