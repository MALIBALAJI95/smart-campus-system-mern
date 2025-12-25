// ReportGenerator.jsx

import React, { useState, useCallback } from 'react';
import { saveAs } from 'file-saver';

const ReportGenerator = () => {
    const [reportType, setReportType] = useState('pdf');

    const handleReportTypeChange = useCallback((e) => {
        setReportType(e.target.value);
    }, []);

    const generateReport = useCallback(() => {
        // Logic to generate report based on reportType
        const reportData = `Report Type: ${reportType}`;
        const blob = new Blob([reportData], {
            type: 'text/plain;charset=utf-8',
        });
        saveAs(blob, `report.${reportType}`);
    }, [reportType]);

    return (
        <div>
            <h2>Report Generator</h2>

            <label>
                Select Report Type:{' '}
                <select value={reportType} onChange={handleReportTypeChange}>
                    <option value="pdf">PDF</option>
                    <option value="excel">Excel</option>
                </select>
            </label>

            <br />
            <br />

            <button onClick={generateReport}>
                Generate Report
            </button>
        </div>
    );
};

export default ReportGenerator;
