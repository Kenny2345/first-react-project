import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import TicketSelection from './TicketSelection';
import AttendeeDetails from './AttendeeDetails';
import TicketConfirmation from './TicketConfirmation';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketSelection />} />
        <Route path="/attendee-details" element={<AttendeeDetails />} />
        <Route path="/ticket" element={<TicketConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
