// pages/edit-employee/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const EditEmployee = () => {
  const router = useRouter();
  const { id } = router.query;
  const [employee, setEmployee] = useState({
    name: 'Default Name',
    position: 'Default Position',
    address: 'Default Address',
    contactNumber: 'Default Contact Number',
    email: 'Default Email',
    monthlySalary: 'Default Monthly Salary',
    startDate: 'Default Start Date',
    endDate: 'Default End Date',
  });

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

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/updateEmployee/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        alert('Employee details updated successfully!');
        router.push(`/employee-details/${id}`); 
      } else {
        console.error(`Failed to update employee details for ID ${id}.`);
      }
    } catch (error) {
      console.error(`Error updating employee details for ID ${id}:`, error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Position:
          <input
            type="text"
            value={employee.position}
            onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input
            type="text"
            value={employee.address}
            onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Contact Number:
          <input
            type="text"
            value={employee.contactNumber}
            onChange={(e) => setEmployee({ ...employee, contactNumber: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="text"
            value={employee.email}
            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Monthly Salary:
          <input
            type="text"
            value={employee.monthlySalary}
            onChange={(e) => setEmployee({ ...employee, monthlySalary: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Start Date:
          <input
            type="text"
            value={employee.startDate}
            onChange={(e) => setEmployee({ ...employee, startDate: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          End Date:
          <input
            type="text"
            value={employee.endDate}
            onChange={(e) => setEmployee({ ...employee, endDate: e.target.value })}
          />
        </label>
      </div>

      <button onClick={handleSave}>Update Profile</button>
    </div>
  );
};

export default EditEmployee;
