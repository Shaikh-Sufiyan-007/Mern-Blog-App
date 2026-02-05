import React from 'react'
import { RxCross2 } from "react-icons/rx";

const BlogTableItem = ({blog, fetchBlogs, index}) => {

    const {title, createdAt} = blog;
    const blogDate = new Date(createdAt)

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
            <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? "Unpublish" : "Publish"}</button>
            <div className='w-8 h-8 flex items-center justify-center bg-red-900/10 rounded-full cursor-pointer hover:scale-110 transition-all'>
                <RxCross2 className='text-md text-red-900/30' />
            </div>
        </td>
    </tr>
  )
}

export default BlogTableItem