import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Updated import for v6
import Navbar from './Navbar'; 
import InfiniteScrollComponent from './InfiniteScrollComponent';
import SignupForm from './SignupForm'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignupForm />} /> {/* Using 'element' instead of 'component' */}
          <Route path="/" element={<InfiniteScrollComponent />} /> {/* Same here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
