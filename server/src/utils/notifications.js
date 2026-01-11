const nodemailer = require('nodemailer');

// Email Transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Send Email Notification
const sendEmailNotification = (to, subject, text) => {
    const mailOptions = {
        from: `"Room Management System" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('❌ Email failed:', error);
        } else {
            console.log('✅ Email sent:', info.response);
        }
    });
};

// Create Notification Object
const createNotification = (userId, message) => {
    return {
        userId,
        message,
        timestamp: new Date(),
        status: 'unread',
    };
};

// Send Push Notification (placeholder)
const sendPushNotification = (userId, message) => {
    console.log(`🔔 Push notification sent to ${userId}: ${message}`);
};

module.exports = {
    sendEmailNotification,
    createNotification,
    sendPushNotification,
};
