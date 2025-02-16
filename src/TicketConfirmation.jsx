import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import barcodeImg from './barcode1.png'
import './App.css'

function TicketConfirmation() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [tickets, setTickets] = useState(1);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    setName(localStorage.getItem("name") || "Attendee");
    setEmail(localStorage.getItem("email") || "user@example.com");
    setSpecialRequest(localStorage.getItem("specialRequest") || "No special request");
    setTickets(localStorage.getItem("tickets") || 1);
    setProfileImage(localStorage.getItem("profileImage")); // Retrieve stored image
  }, []);

  return (
<section className="container">
  <h2>Your Ticket is Booked!</h2>
  <p>Check your email for a copy or you can <a href="#">download</a></p>

  <div className="ticket-card">  {/* Rounded border card */}
    <h3>Techember Fest '25</h3>
    <p>📍 04 Rumens road, Ikoyi, Lagos</p>
    <p>📅 March 15, 2025 | 7:00 PM</p>

    <div className="ticket-details">
      {profileImage && (
        <img src={profileImage} width={250} height={250} alt="Attendee Profile" className="profile-preview" />
      )}
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Ticket Type:</strong> VIP</p>
      <p><strong>Number of Tickets:</strong> {tickets}</p>
      <p><strong>Special Request:</strong> {specialRequest}</p>
    </div>

    <img className="barcode" src={barcodeImg} height={70} width={200} alt="" />
  </div>

  <div className="button-group">
    <button className="back-button" onClick={() => navigate("/")}>Book Another Ticket</button>
    <button className="next-button">Download Ticket</button>
  </div>
</section>
  );
}

export default TicketConfirmation;
