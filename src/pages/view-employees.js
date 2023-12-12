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
    <div className="employee-list-container">
      <h2 className="employee-list-header">Employee List</h2>
      <ul className="employee-list">
        {employees.map((employee) => (
<<<<<<< HEAD
          <li key={employee.id} className="employee-item">
            <span className="employee-name">{employee.name}</span>
=======
          <li key={employee.id}>
            {employee.name}{'-'}{employee.position}{' '}
>>>>>>> aa5272fb0bc3e57ead3a0aa3537b0d5768b2617f
            <Link href={`/employee-details/${employee.id}`}>
              <button className="view-details-button">View Details</button>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .employee-list-container {
          max-width: 600px;
          margin: 0 auto;
          margin-top: 100px;
          text-align: center;
        }

        .employee-list-header {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .employee-list {
          list-style: none;
          padding: 0;
        }

        .employee-item {
          background-color: #f5f5f5;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .employee-name {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        .view-details-button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 5px;
        }

        .view-details-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ViewEmployees;
