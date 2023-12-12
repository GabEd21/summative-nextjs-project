// api/deleteEmployee/[id].js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      console.log(`Attempting to delete employee with ID: ${id}`);

      // Log the id to check if it's received correctly
      console.log('Received ID:', id);

      // Use Prisma to delete the employee
      const deletedEmployee = await prisma.employee.delete({
        where: { id: parseInt(id, 10) || 0 },
      });

      console.log('Employee deleted successfully:', deletedEmployee);
      res.status(200).json(deletedEmployee);
    } catch (error) {
      console.error(`Error deleting employee with ID ${id}:`, error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
