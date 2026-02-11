import fs from 'fs';
import BlogModel from "../models/Blog.model.js";
import imagekit from '../config/imageKit.js';
import CommentModel from '../models/Comment.model.js';

export const addBlog = async(req, res) => {
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog); 
        const imageFile = req.file;

        if(!title || !description || !category || !imageFile) return res.status(400).json({message: "Please enter all fields"});

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        // optimization through imageKit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'},
            ]
        });

        const image = optimizedImageUrl;

        const blog = await BlogModel.create({
            title,
            subTitle,
            description,
            category,
            image,
            isPublished
        })

        res.status(200).json({success: true,message: "Blog added successfully", blog});

    } catch (error) {
        res.status(500).json({success: false,message: error.message});
        console.log(error);
    }
}

export const getAllBlogs = async(req, res) => {
    try {
        const blog = await BlogModel.find({isPublished: true});
        res.status(200).json({success: true,message: "Blogs fetched successfully" ,blog});
    } catch (error) {
        res.status(500).json({success: false,message: error.message});
        console.log(error);
    }
}

export const getBlogById = async(req, res) => {
    try {
        const {blogId} = req.params;
        const blog = await BlogModel.findById(blogId);

        if(!blog) return res.status(404).json({message: "Blog not found"});

        res.status(200).json({success: true,message: "Blog fetched successfully" ,blog});
    } catch (error) {
        res.status(500).json({success: false,message: error.message});
        console.log(error);
    }
}

export const deleteBlogById = async(req, res) => {
    try {
        const {id} = req.body;
        const blog = await BlogModel.findByIdAndDelete(id);

        await CommentModel.deleteMany({blog: id});

        res.status(200).json({success: true,message: "Blog deleted successfully" ,blog});
    } catch (error) {
        res.status(500).json({success: false,message: error.message});
        console.log(error);
    }
}

export const togglePublish = async(req, res) => {
    try {
        const {id} = req.body;
        const blog = await BlogModel.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.status(200).json({success: true,message: "Blog published successfully" ,blog});
    } catch (error) {
        res.status(500).json({success: false,message: error.message});
        console.log(error);
    }
}

export const addComment = async(req, res) => {
    try {
         const {blog, name, content} = req.body;
         await CommentModel.create({blog, name, content});
         res.status(200).json({success: true,message: "Comment added successfully"});
    } catch (error) {
        res.status(500).json({success: false,message: error.message});
        console.log(error);
    }
}

export const getBlogComment = async(req, res) => {
    try {
        const {blogId} = req.body;
        const comments = await CommentModel.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
        res.status(200).json({success: true,message: "Comments fetched successfully" ,comments});
    } catch (error) {
        res.status(500).json({success: false,message: error.message});
        console.log(error);
    }
}