import { Request, Response } from "express";
import blog from "../models/schema";
import { postCreateSchema, postUpdateSchema } from "../validations/yupv";

//create post
export const createPost = async (req: Request, res: Response) => {
    const { title, content, author } = req.body;
    try {
        await postCreateSchema.validate(req.body);
        const post = await blog.create({ title, content, author });
        res.status(201).json(post);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

//get all posts
export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await blog.find();
        res.status(200).json(posts);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

//get post by id
export const getPostById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const post = await blog.findById(id);
        res.status(200).json(post);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

//update post by id
export const updatePostById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content, author } = req.body;
    try {
        await postUpdateSchema.validate(req.body);
        const post = await blog.findByIdAndUpdate(id, { title, content, author }, { new: true });
        res.status(200).json(post);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

//delete post by id
export const deletePostById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const post = await blog.findByIdAndDelete(id);
        res.status(200).json(post);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
