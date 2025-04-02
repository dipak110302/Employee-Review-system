
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';




const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [reviews, setReviews] = useState([]);
  const [empId, setempId] = useState(0);
  const [empName, setempName] = useState("");
  const [rating, setRating] = useState("");
  const [newReview, setNewReview] = useState("");

  const [NewempId, setNewempId] = useState(0);
  const [NewempName, setNewempName] = useState("");
  const [Newrating, setNewRating] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      setLoggedIn(true);
    }
  };

  const handleReviewSubmit = () => {
    if (newReview.trim() && empId && empName && rating) {
      setReviews([
        ...reviews,
        {
          user: username,
          review: newReview,
          id: empId,
          Name: empName,
          Rating: rating
        }
      ]);
      setNewReview("");
      setempId("");
      setempName("");
      setRating("");
    }
  };


  return (
    <div className="login-card">
      {!loggedIn ? (

        <div id="flex">
          <h3>Employee Login</h3>
          <div className="mb-3">
            <label for="empname" className="form-label">Employee Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}

            />
          </div>
          <div className="mb-3">
            <label for="empid" className="form-label">Employee ID</label>
            <input type="text" className="form-control" id="empid" placeholder="Enter your ID" required />
          </div>
          <button onClick={handleLogin} className="btn btn-primary w-100">Log In</button>
        </div>

      ) : (
        <div id='main'>
          <div id="form">
            <h2 className="text-xl font-bold text-center mb-4">Welcome, {username}!</h2>

            <label for="name">Employee ID</label>
            <input type="number" value={empId} onChange={(e) => setempId(e.target.value)} id="name" placeholder="Enter employee's ID" required />


            <label for="name">Employee Name</label>
            <input type="text" value={empName} onChange={(e) => setempName(e.target.value)} id="name" placeholder="Enter employee's name" required />

            <label for="rating">Rating</label>
            <select onChange={(e) => setRating(e.target.value)} value={rating} id="rating" required>
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>

            <label for="review">Review</label>
            <textarea id="review" value={newReview}
              onChange={(e) => setNewReview(e.target.value)} rows="2" placeholder="Write your review here..." required></textarea>

            <button onClick={handleReviewSubmit} className="w-full bg-green-500 text-white rounded-lg p-2 mt-2">Submit Review</button>

          </div>
         <div id="rendring">
         <h3 className="text-lg font-semibold text-light">Reviews</h3>
         <div className="mt-4">
          
            {reviews.map((r, index) => (
              <motion.div
                key={index}
                className="p-3 border rounded shadow-sm bg-light mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div >
                <strong>{r.user}:</strong> {r.review} <br />
                <span><strong>Employee ID:</strong> {r.id}</span><br />
                <span><strong>Employee Name:</strong> {r.Name}</span><br />
                <span><strong>Rating:</strong> {r.Rating} ⭐</span>
                </div>
              </motion.div>
            ))}
          </div>
         </div>
        </div>
      )}
    </div>
  );
};

export default App;


