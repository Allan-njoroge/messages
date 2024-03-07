const express = require('express');
const bodyParser = require('body-parser');
const sendSMS = require("./send");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Database to store phone numbers and messages
let phoneNumbers = [];
let messages = [];

    // Regular expression to match phone numbers starting with '07' or '01' and must be 10 digits long
    const phoneRegex = /^(07|01)\d{8}$/;

// Endpoint to add phone numbers
app.post('/phone-numbers', (req, res) => {
    const { phoneNumber } = req.body;
    // if (!phoneNumber) {
    //     return res.status(400).json({ error: 'Phone number is required' });
    // }

    // if (!phoneRegex.test(phoneNumber)) {
    //     return res.status(400).json({ error: 'Invalid phone number format' });
    // }

    sendSMS(phoneNumber, "hello")
    res.status(201).json({ message: 'Phone number added successfully' });
});

//Endpoint to add the predefined messages
app.post('/messages/predefined', (req, res) => {
    const predefinedMessage = "Thank you for shopping with us. To continue to the survey dial *234*234#. The survey code is 67869";

    messages.push(predefinedMessage);
    res.status(201).json({ message: 'Predefined message added successfully'});
});

// Endpoint to add messages
app.post('/messages', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    messages.push(message);
    res.status(201).json({ message: 'Message added successfully' });
});

// Endpoint to get all phone numbers
app.get('/phone-numbers', (req, res) => {
    res.json({ phoneNumbers });
});

// Endpoint to get all messages
app.get('/messages', (req, res) => {
    res.json({ messages });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
