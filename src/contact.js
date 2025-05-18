import React, { useState } from 'react';
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { db } from "./firebase_config";
import { collection, addDoc } from "firebase/firestore";
import "./contact.css";

const Contact = ({ authState }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    // creating database reference
    const dbref = collection(db, 'Message');

    // sending message to firebase
    const sendMessage = async () => {
        if (!authState.isAuthenticated) {
            alert("Please login to send a message");
            return;
        }

        if (!name || !email || !subject || !message) {
            alert("Please fill all fields");
            return;
        }

        try {
            await addDoc(dbref, {
                Name: name,
                Email: email,
                Subject: subject,
                Message: message,
                createdAt: new Date()
            });
            alert("Message sent successfully!");
            // Clear form
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <div className='contact'>
            <div className='container'>
                <div className='address'>
                    <div className='address_container'>
                        <h3>Contact Us</h3>
                        <div className='box'>
                            <div className='title'>
                                <div className='icon'>
                                    <FaHome />
                                </div>
                                <h4>Address</h4>
                            </div>
                            <div className='detail'>
                                <p>123 main street, malviya nagar, jaipur</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='title'>
                                <div className='icon'>
                                    <FaPhoneAlt />
                                </div>
                                <h4>Phone</h4>
                            </div>
                            <div className='detail'>
                                <p>mobile: (08) 345 667 892</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='title'>
                                <div className='icon'>
                                    <MdOutlineEmail />
                                </div>
                                <h4>E-mail</h4>
                            </div>
                            <div className='detail'>
                                <p>contact@domain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='message'>
                    <div className='message_container'>
                        <h3>Get In Touch With Us</h3>
                        <div className='input_box'>
                            <input 
                                type='text' 
                                placeholder='Name' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className='input_box'>
                            <input 
                                type='email' 
                                placeholder='E-mail' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className='input_box'>
                            <input 
                                type='text' 
                                placeholder='Contact No.' 
                                value={subject} 
                                onChange={(e) => setSubject(e.target.value)} 
                            />
                        </div>
                        <div className='input_box'>
                            <textarea 
                                placeholder='Message!' 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                            />
                        </div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;