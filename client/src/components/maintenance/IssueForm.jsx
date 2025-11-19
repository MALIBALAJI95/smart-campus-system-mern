import React, { useState } from 'react';

const IssueForm = () => {
    const [issueDetails, setIssueDetails] = useState({
        description: '',
        category: '',
        priority: 'low',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIssueDetails({
            ...issueDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the issue details to the backend
        console.log('Issue submitted:', issueDetails);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="description">Issue Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={issueDetails.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={issueDetails.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="WiFi">WiFi</option>
                    <option value="Equipment">Equipment</option>
                    <option value="Room">Room</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="priority">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={issueDetails.priority}
                    onChange={handleChange}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button type="submit">Submit Issue</button>
        </form>
    );
};

export default IssueForm;