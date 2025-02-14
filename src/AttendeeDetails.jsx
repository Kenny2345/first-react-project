import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function AttendeeDetails() {
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [specialRequest, setSpecialRequest] = useState(localStorage.getItem("specialRequest") || "");
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);

  
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("specialRequest", specialRequest);
    if (profileImage) {
      localStorage.setItem("profileImage", profileImage);
    }
  }, [name, email, specialRequest, profileImage]);

  // I implemented this to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      
      <section className="container">
        <div className="top">
          <p className='topconheader'>Attendee Details</p>
          <p className='ratio-bar'>Step 2/3</p>
        </div>

        <div className="underline"></div>

        <div className="inner-container">
          <p className="ticket-label">Upload Profile Photo</p>
          <div className="upload-box">
            {profileImage ? <img src={profileImage} alt="Profile" className="profile-preview" /> :
              <label className="upload-label">
                Drag & drop or click to upload
                <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
              </label>
            }
          </div>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />

          <textarea
            placeholder="Special request?"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className="textarea-field"
          ></textarea>

          <div className="button-group">
            <button className="back-button" onClick={() => navigate('/')}>Back</button>
            <button className="next-button"
              onClick={() => navigate('/ticket')}> Get My Free Ticket </button>

          </div>
        </div>
      </section>
    </>
  );
}

export default AttendeeDetails;
