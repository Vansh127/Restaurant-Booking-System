import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      alert(res.data.message || "Thank you for contacting us!");
      setFormData({ name: "", email: "", remarks: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="contactus-container">
      <h1>📞 Contact Us</h1>
      <p className="contactus-intro">
        Have a question, suggestion, or just want to say hello? We’d love to hear from you!
      </p>

      <form className="contactus-form" onSubmit={handleSubmit}>
        <label>
          Name<span>*</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email<span>*</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Remarks
          <textarea
            name="remarks"
            rows="4"
            placeholder="Type your message here..."
            value={formData.remarks}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
