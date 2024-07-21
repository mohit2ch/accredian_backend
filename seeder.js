import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seeder() {
    // Delete Previous Users
    await prisma.referral.deleteMany();
    await prisma.user.deleteMany();
    await prisma.course.deleteMany();
    // Sample User
    const user = await prisma.user.create({
        data: {
            id: 1,
            name: "Sample User",
            email: "sampleuser@email.com"
        }
    });

    const course = await prisma.course.create({
        data:{
            id: 1,
            name: "Sample Course"
        }
    });

    console.log(user);
    console.log(course);
}

seeder().catch(function(e){
    console.error(e);
}).finally(async function(){
    await prisma.$disconnect();
    console.log("Prisma seeder connection Ended");
})