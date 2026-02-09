import fs from 'fs';
import BlogModel from "../models/Blog.model.js";
import imagekit from '../config/imageKit.js';

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