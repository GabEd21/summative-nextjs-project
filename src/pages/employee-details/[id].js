// pages/employee-details/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EmployeeDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [employee, setEmployee] = useState(null);

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
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ) : (
        <p>No employee details available for ID {id}.</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
