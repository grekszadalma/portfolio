import { useState } from "react";
import emailjs from '@emailjs/browser';
import "../css/mail.css";

export default function MailPage({onCloseMail}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [position, setPosition] = useState({x: 80, y: 40});
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({x: 0, y: 0});

    const onClose = () => {
        onCloseMail();
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleMouseDown = (e) => {
        if (e.target.closest(".mail-header")) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    }

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const response = await fetch('https://formspree.io/f/xpqjwjwp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setStatus('error');
        }
    };


    return(
        <div className="mail-window" 
        style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
        >
            <div className="mail-header" style={{cursor: 'grab'}}>
                <div className="traffic-lights">
                    <span className="light red" style={{cursor: 'default'}} onClick={onClose}></span>
                    <span className="light yellow"></span>
                    <span className="light green"></span>
                </div>
                <div className="mail-title">Contact me</div>
            </div>
            
            <div className="mail-body">
                <form onSubmit={handleSubmit} className="mail-form">
                    <div className="form-row">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    
                    <div className="form-row">
                        <label>From:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <label>To:</label>
                        <input
                            type="email"
                            name="email"
                            value="dalma.greksza@gmail.com"
                            onChange={handleChange}
                            
                        />
                    </div>
                    
                    <div className="form-row">
                        <label>Subject:</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                        />
                    </div>
                    
                    <div className="form-row message-row">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message..."
                            rows="10"
                            required
                        />
                    </div>
                    
                    <button type="submit" className="send-button" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send'}
                    </button>
                    
                    {status === 'success' && <p className="success-message">Message sent! ✓</p>}
                    {status === 'error' && <p className="error-message">Failed to send. Try again.</p>}
                </form>
            </div>
        </div>
    );
}