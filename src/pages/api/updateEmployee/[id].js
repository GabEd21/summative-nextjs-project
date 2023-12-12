// api/updateEmployee/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      // Use Prisma to update the employee
      const updatedEmployee = await prisma.employee.update({
        where: { id: parseInt(id, 10) },
        data: req.body, // Assuming the request body contains the updated employee data
      });

      console.log('Employee updated successfully:', updatedEmployee);
      res.status(200).json(updatedEmployee);
    } catch (error) {
      console.error(`Error updating employee with ID ${id}:`, error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
