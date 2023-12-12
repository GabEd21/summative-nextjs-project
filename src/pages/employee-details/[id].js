// pages/employee-details/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Import the CSS styles
import styles from './employee-details.module.css';

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
          alert('Employee deleted successfully!');
          
          router.push('/view-employees');

        } else {
          console.error(`Failed to delete employee with ID ${id}.`);
        }
      } catch (error) {
        console.error(`Error deleting employee with ID ${id}:`, error);
      }
    } else {
      alert('Your input did not match. Employee not deleted.');
    }

    setConfirmationName('');
    setShowConfirmation(false);
  };

  const handleEdit = () => {
    router.push(`/edit-employee/${id}`);
  };

  return (
    <div className={`${styles.employeeDetailsContainer} text-center`}>
      <h2>Employee Details</h2>
      {employee ? (
        <div className={styles.employeeDetails}>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Address:</strong> {employee.address}</p>
          <p><strong>Contact Number:</strong> {employee.contactNumber}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Monthly Salary:</strong> {employee.monthlySalary}</p>
          <p><strong>Start Date of Contract:</strong> {employee.startDate}</p>
          <p><strong>End Date of Contract:</strong> {employee.endDate}</p>

          <button className={styles.editButton} onClick={handleEdit}>Edit</button>

          <button className={styles.deleteButton} onClick={() => setShowConfirmation(true)}>Delete</button>

          {showConfirmation && (
            <div className={styles.confirmationForm}>
              <p>Type the employees name to confirm deletion:</p>
              <input
                type="text"
                value={confirmationName}
                onChange={(e) => setConfirmationName(e.target.value)}
              />
              <div>
                <button onClick={handleDelete}>Confirm</button>
                <button onClick={() => setShowConfirmation(false)}>Cancel</button>
              </div>
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
