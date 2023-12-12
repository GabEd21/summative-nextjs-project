// pages/view-employees.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch the list of employees from the API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("/api/getEmployees"); // Adjust the API endpoint
        if (response.ok) {
          const data = await response.json();
          setEmployees(data);
        } else {
          console.error("Failed to fetch employees:", await response.json());
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name}{' '}{employee.position}{' '}
            <Link href={`/employee-details/${employee.id}`}>
                <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewEmployees;
