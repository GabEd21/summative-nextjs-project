import React from 'react';

const AddEmployeeForm = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" placeholder="Enter name" />
      </label>
      <label>
        Position:
        <input type="text" placeholder="Enter position" />
      </label>
      <label>
        Address:
        <input type="text" placeholder="Enter address" />
      </label>
      <label>
        Contact Number:
        <input type="text" placeholder="Enter contact number" />
      </label>
      <label>
        Email:
        <input type="text" placeholder="Enter email" />
      </label>
      <label>
        Monthly Salary:
        <input type="text" placeholder="Enter monthly salary" />
      </label>
      <label>
        Start Date:
        <input type="text" placeholder="Enter start date" />
      </label>
      <label>
        Date:
        <input type="date" />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;
