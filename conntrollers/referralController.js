import { PrismaClient } from "@prisma/client";
import asyncHandler from "../middleware/asyncHandler.js";
const prisma = new PrismaClient();


const createReferral = async function(req, res){
        try{
            const {courseId, referrerId, email} = req.body;
            const referral = await prisma.referral.create({
                data: {
                    courseId: Number(courseId),
                    referrerId: Number(referrerId),
                    email: email
                }
            });
            console.log("Referral Created");
            res.status(200).json(referral);
        } catch(e) {
            res.status(400);
            throw new Error(e);
        }
    }
const getReferrals = async function(req, res) {
    try{
        const referrals = await prisma.referral.findMany();
        res.status(200).json(referrals);
    } catch(e) {
        res.status(400);
        throw new Error(e);
    }
}
export {
    createReferral,
    getReferrals
};