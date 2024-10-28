import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Entrepreneurs from './components/Entrepreneurs';
import Goals from './components/Goals';
import KeyInnovations from './components/KeyInnovations';
import Timeline from './components/Timeline';
import KeyComponents from './components/KeyComponents';
import RiskManagement from './components/RiskManagement';
import ExpectedOutcomes from './components/ExpectedOutcomes';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Entrepreneurs />
      <Goals />
      <KeyInnovations />
      <Timeline />
      <KeyComponents />
      <RiskManagement />
      <ExpectedOutcomes />
    </div>
  );
}

export default App;
