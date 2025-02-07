import React, { useState } from 'react';
import { Box, Heading, Text, Input, Textarea, Button } from '@primer/react';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            setError('All fields are required!');
            return;
        }
        if (!email.includes('@')) {
            setError('Please enter a valid email.');
            return;
        }
        alert('Message Sent Successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setError('');
    };

    return (
        <Box sx={{ maxWidth: '400px', margin: '50px auto', padding: '20px', backgroundColor: 'white', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <Heading as="h2">Contact Us</Heading>
            <form onSubmit={handleSubmit}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" sx={{ width: '100%', marginBottom: '10px' }} required />
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" sx={{ width: '100%', marginBottom: '10px' }} required />
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" rows={4} sx={{ width: '100%', marginBottom: '10px' }} required />
                <Button type="submit" sx={{ backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>Send Message</Button>
                {error && <Text as="p" sx={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>{error}</Text>}
            </form>
        </Box>
    );
};

export default ContactPage;
