// pages/index.js
import React from 'react';
import Link from 'next/link';

export default function Home() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '20px',
  };

  const sectionStyle = {
    width: '45%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2>Adding Employee to the Database</h2>
        <Link href="/add-employee">
          <div>
            <button>Add Employee</button>
          </div>
        </Link>
      </div>

      <div style={sectionStyle}>
        <h2>View Employees</h2>
        <Link href="/view-employees">
          <div>
            <button>View</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
