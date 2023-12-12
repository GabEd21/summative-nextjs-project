import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./AddEmployeeForm.module.css"; // Correct path to your CSS module


const AddEmployeeForm = () => {
  const router = useRouter();
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
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAddingEmployee(true);

    const formattedData = {
      ...formData,
      monthlySalary: parseFloat(formData.monthlySalary),
      startDate: new Date(formData.startDate).toISOString(),
      endDate: new Date(formData.endDate).toISOString(),
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
        router.push("/view-employees");
      } else {
        console.error("Failed to add employee:", await response.json());
      }
    } catch (error) {
      console.error("Error adding employee:", error);
    } finally {
      setIsAddingEmployee(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.addEmployeeForm}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Enter name"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Enter position"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Enter address"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Enter contact number"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Enter email"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Monthly Salary:</label>
          <input
            type="number"
            name="monthlySalary"
            value={formData.monthlySalary}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Enter monthly salary"
            step="0.01"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>
            Add Employee
          </button>
        </div>
        {isAddingEmployee && (
          <div className={styles.addingEmployeeMessage}>
            Adding Employee to the Database...
          </div>
        )}
      </form>
    </div>
  );
};

export default AddEmployeeForm;
