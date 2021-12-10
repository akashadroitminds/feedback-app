import React from 'react';

import Header from './components/Header';

import FeedbackList from './components/FeedbackList';
import Feedbackstats from './components/Feedbackstats';
import Feedbackform from './components/Feedbackform';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header name='Feedback UI' />

        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={[<Feedbackform />, <Feedbackstats />, <FeedbackList />]}
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
