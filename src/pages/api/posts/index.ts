import { NextApiRequest, NextApiResponse } from 'next';
//import { connectToDatabase } from '../../../utils/mongodb';
import Post from "../../../models/post"
import dbConnect from "../../../utils/mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { method } = req;

        await dbConnect()

        switch (method) {
            case 'GET':
                //const data = await db.collection('Posts').find().toArray();
                const posts = await Post.find({})
                res.status(200).json(posts);
                break;
            case 'POST':
                try {
                    const post = await Post.create(
                        req.body
                    )
                    res.status(201).json({ success: true, data: post })
                } catch (error) {
                    res.status(400).json({ success: false })
                }
                break
            default:
                res.setHeader('Allow', ['GET', 'PUT']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
