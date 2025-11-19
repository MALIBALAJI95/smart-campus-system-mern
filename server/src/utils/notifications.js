const nodemailer = require('nodemailer');

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
    },
});

// Function to send notifications via email
const sendEmailNotification = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

// Function to create a notification object
const createNotification = (userId, message) => {
    return {
        userId,
        message,
        timestamp: new Date(),
    };
};

// Function to send push notifications (placeholder for future implementation)
const sendPushNotification = (userId, message) => {
    // Implementation for sending push notifications goes here
    console.log(`Push notification sent to ${userId}: ${message}`);
};

module.exports = {
    sendEmailNotification,
    createNotification,
    sendPushNotification,
};