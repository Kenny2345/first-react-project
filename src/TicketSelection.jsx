import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './App.css';

function TicketSelection() {
  const navigate = useNavigate();

  // Get values from localStorage or set defaults
  const [selectedTicket, setSelectedTicket] = useState(localStorage.getItem("selectedTicket") || "Free");
  const [quantity, setQuantity] = useState(Number(localStorage.getItem("quantity")) || 1);

  const tickets = [
    { type: "Free", price: "Free", access: "REGULAR ACCESS", available: "20/52" },
    { type: "VIP", price: "$150", access: "VIP ACCESS", available: "20/52" },
    { type: "VVIP", price: "$150", access: "VVIP ACCESS", available: "20/52" },
  ];

  // Store data in localStorage when values change
  useEffect(() => {
    localStorage.setItem("selectedTicket", selectedTicket);
    localStorage.setItem("quantity", quantity);
  }, [selectedTicket, quantity]);

  return (
    <>
      <nav>
        <header>
          <div className="title">ticz</div>
          <ul>
            <li className='active'>Events</li>
            <li>My Tickets</li>
            <li>About Project</li>
          </ul>
          <button className="btn">MY TICKETS <ArrowRight /></button>
        </header>
      </nav>

      <section className="container">
        <div className="top">
          <p className='topconheader'>Ticket Selection</p>
          <p className='ratio-bar'>Step 1/3</p>
        </div>

        <div className="underline"></div>

        <div className="inner-container">
          <div className="details">
            <div className="event-card">
              <h2 className="event-name">TechEmber Fest '25</h2>
              <p className="event-description">
                Join us for an unforgettable experience at TechEmber Fest! Secure your spot now.
              </p>
              <p className="event-details">📍 Lagos, Nigeria || March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          <div className="ticket-section">
            <p className="ticket-label">Select Ticket Type:</p>
            <div className="ticket-options">
              {tickets.map((ticket) => (
                <button
                  key={ticket.type}
                  className={`ticket-button ${selectedTicket === ticket.type ? "selected" : ""}`}
                  onClick={() => setSelectedTicket(ticket.type)}
                >
                  <p className="ticket-price">{ticket.price}</p>
                  <p className="ticket-access">{ticket.access}</p>
                  <p className="ticket-available">{ticket.available}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-section">
            <p className="ticket-label">Number of Tickets</p>
            <select
              className="quantity-select"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="button-group">
            <button className="cancel-button">Cancel</button>
            <button className="next-button" onClick={() => navigate('/attendee-details')}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TicketSelection;
