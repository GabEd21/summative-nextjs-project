import React, { useState } from "react";

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    address: "",
    contactNumber: "",
    email: "",
    monthlySalary: 0.0,
    startDate: "",  
    endDate: "",    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert monthlySalary and format startDate before sending it to the API
    const formattedData = {
      ...formData,
      monthlySalary: parseFloat(formData.monthlySalary),
      startDate: new Date(formData.startDate).toISOString(), 
      endDate: new Date(formData.endDate).toISOString(), // Format the date
    };
  
    try {
      const response = await fetch("/api/addEmployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });
  
      if (response.ok) {
        console.log("Employee added successfully!");
        // Optionally, you can redirect or show a success message here
      } else {
        console.error("Failed to add employee:", await response.json());
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      // Handle unexpected errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter name" />
        </label>
      </div>
      <div>
        <label>
          Position:
          <input type="text" name="position" value={formData.position} onChange={handleInputChange} placeholder="Enter position" />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter address" />
        </label>
      </div>
      <div>
        <label>
          Contact Number:
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} placeholder="Enter contact number" />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email" />
        </label>
      </div>
      <div>
        <label>
          Monthly Salary:
          <input
            type="number"
            name="monthlySalary"
            value={formData.monthlySalary}
            onChange={handleInputChange}
            placeholder="Enter monthly salary"
            step="0.01"
          />
        </label>
      </div>
      <div>
        <label>
          Start Date:
          <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          End Date:
          <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <button type="submit">Add Employee</button>
      </div>
    </form>
  );
}

export default AddEmployeeForm;
