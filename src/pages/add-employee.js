// pages/add-employee.js
import React from 'react';
import AddEmployeeForm from '../components/AddEmployeeForm';

const AddEmployeePage = () => {
  const headingStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  return (
    <div>
      <h2 style={headingStyle}>Adding Employee to the Database</h2>
      <AddEmployeeForm />
    </div>
  );
}

export default AddEmployeePage;
