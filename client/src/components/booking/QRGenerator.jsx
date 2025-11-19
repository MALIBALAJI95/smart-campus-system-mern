import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRGenerator = ({ bookingDetails }) => {
    const [qrValue, setQrValue] = useState('');

    const generateQRCode = () => {
        const { roomId, bookingId } = bookingDetails;
        const value = `Room ID: ${roomId}, Booking ID: ${bookingId}`;
        setQrValue(value);
    };

    return (
        <div>
            <h2>QR Code Generator</h2>
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qrValue && (
                <div>
                    <QRCode value={qrValue} />
                    <p>Scan this QR code for room access.</p>
                </div>
            )}
        </div>
    );
};

export default QRGenerator;