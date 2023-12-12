// pages/api/addEmployee.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
        const { name, position, address, contactNumber, email, monthlySalary, startDate, endDate } = req.body;

      const newEmployee = await prisma.employee.create({
        data: {
          name,
          position,
          address,
          contactNumber,
          email,
          monthlySalary,
          startDate,
          endDate,
        },
      });

      res.status(201).json(newEmployee);
    } catch (error) {
      console.error("Error adding employee:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
