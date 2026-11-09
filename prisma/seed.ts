import { prisma } from "@/lib/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Yaba Ernesto",
        email: "yabaernesto@gmail.com.ao",
      },
      {
        name: "Miguel Leite",
        email: "miguelleite@gmail.com.ao",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
