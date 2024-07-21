export default function asyncHandler(fn, prisma){
    fn().catch((e)=>{
        console.log(e);
    }).finally(()=>{
        prisma.$disconnect();
    })
}



/*
async function main(){
    const referrals = await prisma.referral.findMany();
    console.log(referrals);
}

main().catch(function(e){
    console.error(e);
}).finally(function(){
    prisma.$disconnect();
})
*/