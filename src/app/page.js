import React from 'react';
import AddEmployeeForm from '../components/AddEmployeeForm';
import ViewEmployees from '../components/ViewEmployees';

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
        <button>Add Employee</button>
      </div>

      <div style={sectionStyle}>
        <h2>View Employees</h2>
        <button>View</button>
      </div>
    </div>
  );
}
