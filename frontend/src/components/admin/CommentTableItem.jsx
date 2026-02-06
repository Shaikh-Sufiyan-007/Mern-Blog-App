import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

const CommentTableItem = ({comment,}) => {

    const { blog, createdAt, _id } = comment;
    const BlogDate = new Date(createdAt);

  return (
    <tr className='order-y border-gray-300'>
        <td className='px-6 py-4'>
            <b className='font-medium text-gray-600'>Blog</b> : {blog.title}
            <br />
            <br />
            <b className='font-medium text-gray-600'>Name</b> : {comment.name}
            <br />
            <b className='font-medium text-gray-600'>Comment</b> : {comment.content}
        </td>
        <td className='px-6 py-4 max-sm:hidden'>
            {BlogDate.toLocaleDateString()}
        </td>
        <td className='px-6 py-4 max-sm:hidden'>
            <div className='inline-flex items-center gap-4'>
                {!comment.isApproved ?
                    <div className='w-8 h-8 flex items-center justify-center bg-green-900/10 rounded-full cursor-pointer hover:scale-110 transition-all'>
                        <IoCheckmark className='text-2xl text-green-600' />
                    </div>
                : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p> 
                }
                <IoTrashOutline className='text-xl hover:scale-110 transition-all cursor-pointer' />
            </div>
        </td>
    </tr>
  )
}

export default CommentTableItem