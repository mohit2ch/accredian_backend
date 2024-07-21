import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    const referral = await prisma.referral.create({
        data: {
            courseId: 1,
            referrerId: 1,
            email: "ghn@email.com"
        }
    })
    const referrals = await prisma.referral.findMany();
    const users = await prisma.user.findMany();
    console.log(referrals);
    console.log(users);
}

main().catch(function(e){
    console.error(e);
}).finally(function(){
    prisma.$disconnect();
})