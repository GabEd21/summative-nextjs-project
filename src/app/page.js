// pages/index.js
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: '200px',
    padding: '20px',
  };

  const sectionStyle = {
    width: '45%',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 18px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Employee Tracker</h2>
        <p>Track and manage your expenses easily.</p>
        <Link href="/add-employee">
          <div>
            <button
              style={{ ...buttonStyle, ...buttonHoverStyle }}
            >
              Add Employee
            </button>
          </div>
        </Link>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>Employee History</h2>
        <p>View and analyze your expense history.</p>
        <Link href="/view-employees">
          <div>
            <button
              style={{ ...buttonStyle, ...buttonHoverStyle }}
            >
              View Employee List
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
