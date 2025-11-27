import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email required" });
    }

    const user = await prisma.user.create({
      data: { name, email }
    });

    return res.status(201).json(user);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
