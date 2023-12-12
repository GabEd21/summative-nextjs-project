// pages/employee-details/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EmployeeDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [employee, setEmployee] = useState(null);
  const [confirmationName, setConfirmationName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`/api/getEmployee/${id}`);
        if (response.ok) {
          const data = await response.json();
          setEmployee(data);
        } else {
          console.error(`Failed to fetch employee details for ID ${id}.`);
        }
      } catch (error) {
        console.error(`Error fetching employee details for ID ${id}:`, error);
      }
    };

    if (id) {
      fetchEmployeeDetails();
    }
  }, [id]);

  const handleDelete = async () => {
    if (confirmationName === employee.name) {
      try {
        const deleteURL = `/api/deleteEmployee/${id}`;
        const response = await fetch(deleteURL, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Employee deleted successfully
          alert('Employee deleted successfully!');
          
          // Redirect to the ViewEmployees page
          router.push('/view-employees');

          // Optionally, you can navigate to a different page or take other actions
        } else {
          console.error(`Failed to delete employee with ID ${id}.`);
        }
      } catch (error) {
        console.error(`Error deleting employee with ID ${id}:`, error);
      }
    } else {
      // Incorrect name confirmation
      alert('Your input did not match. Employee not deleted.');
    }

    // Reset confirmationName and hide confirmation
    setConfirmationName('');
    setShowConfirmation(false);
  };

  const handleEdit = () => {
    // Redirect to the EditEmployee page with the employee ID
    router.push(`/edit-employee/${id}`);
  };

  return (
    <div>
      <h2>Employee Details</h2>
      {employee ? (
        <div>
          <p>Name: {employee.name}</p>
          <p>Position: {employee.position}</p>
          <p>Address: {employee.address}</p>
          <p>Contact Number: {employee.contactNumber}</p>
          <p>Email: {employee.email}</p>
          <p>Monthly Salary: {employee.monthlySalary}</p>
          <p>Start Date of Contract: {employee.startDate}</p>
          <p>End Date of Contract: {employee.endDate}</p>

          <button onClick={handleEdit}>Edit</button>

          <button onClick={() => setShowConfirmation(true)}>Delete</button>

          {showConfirmation && (
            <div>
              <p>Type the employee's name to confirm deletion:</p>
              <input
                type="text"
                value={confirmationName}
                onChange={(e) => setConfirmationName(e.target.value)}
              />
              <button onClick={handleDelete}>Confirm</button>
              <button onClick={() => setShowConfirmation(false)}>Cancel</button>
            </div>
          )}
        </div>
      ) : (
        <p>No employee details available for ID {id}.</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
