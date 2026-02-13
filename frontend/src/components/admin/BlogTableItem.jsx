import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useAppContext } from '../../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({blog, fetchBlogs, index}) => {

    const {title, createdAt} = blog;
    const blogDate = new Date(createdAt)
    console.log(blog._id)
    const {axios} = useAppContext()

    const deleteBlog = async() => {
        const confirm = window.confirm("Are you sure you want to delete this blog?");
        if(!confirm) return;

        try {
            const {data} = await axios.post('/api/blog/delete', {id: blog._id});
            if(data.success) {
                toast.success(data.message)
                await fetchBlogs()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const togglePublish = async() => {
        try {
            const {data} = await axios.post('/api/blog/toggle-publish', {id: blog._id});
            if(data.success) {
                toast.success(data.message)
                await fetchBlogs()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

  return (
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{ index }</th>
        <td className='px-2 py-4'> {title} </td>
        <td className='px-2 py-4 max-sm:hidden'> {blogDate.toDateString()} </td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>
                {blog.isPublished ? "Published" : "Unpublished"}
            </p>
        </td>
        <td className='px-2 py-4 flex text-xs gap-3'>
            <button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? "Unpublish" : "Publish"}</button>
            <div onClick={deleteBlog} className='w-8 h-8 flex items-center justify-center bg-red-900/10 rounded-full cursor-pointer hover:scale-110 transition-all'>
                <RxCross2 className='text-md text-red-900/30' />
            </div>
        </td>
    </tr>
  )
}

export default BlogTableItem