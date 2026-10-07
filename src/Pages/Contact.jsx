import React from "react";
import { useState } from "react";
function Contact(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const API_URL = import.meta.env.VITE_API_URL;
console.log("Name:", name);
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
async function sendMessage() {

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill all the fields");
    return;
  }

  if (validateEmail(email) === false) {
    alert("Please enter a valid email address");
    return;
  }

  try {

    const response = await fetch(`${API_URL}/api/contacts`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
      })
    });

    const data = await response.json();

    if (response.ok) {

      alert("Message sent successfully");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

    } else {
      alert("Error sending message");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Error sending message");
  }
}
return(<>
   <section id="contact">
    <div class="contactHeading">
        <p>
            GET IN TOUCH
            </p>
    <h2>Contact Me
</h2>
    </div>
    <div class="Contactdiv">

        <div class="contact-form">
<input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} id="name"/><br/>
<input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email"/><br/>
<input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} id="subject"/><br/>
<textarea rows="5" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} id="message"/>
<br/>
<button onClick={sendMessage}>Send Message</button>
</div>
<div class="contactInfo">
    <div class="contactEmail">
    <h3>Email</h3>
    <p>dshivam504@gmail.com</p>
    </div>
    <div class="contactNo">
 <h3>Phone</h3>
    <p>+91-9876543210</p>
    </div>
   <div class="contactLocation">
  <h3>Location</h3>
    <p>Narsinghpur,M.P., India</p>
   </div>
   <div class="contactLinks">
    <h3>Follow Me</h3>
    <div>
        <a href="https://www.linkedin.com/in/shivamdixit" target="_blank">LinkedIn</a>
        <a href="https://github.com/shivamdixit" target="_blank">Github</a>
        <a href="https://www.instagram.com/shivamdixit" target="_blank">Instagram</a>
    </div>
   </div>
</div>
    </div>

   </section>
</>);
}

export default Contact;