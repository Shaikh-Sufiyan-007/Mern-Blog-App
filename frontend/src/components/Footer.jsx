import React from 'react'

const Footer = () => {

    const footer_data = [
      {
          title: "Quick Links",
          links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
      },
      {
          title: "Need Help?",
          links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
      },
      {
          title: "Follow Us",
          links: ["Instagram", "Twitter", "Facebook", "YouTube"]
      }
  ];
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
            <div>
                <h2 className='w-32 sm:w-44 text-2xl font-semibold'>Blog-App</h2>
                <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia alias iusto porro totam quo corrupti repellat aspernatur! Tempore beatae maiores ut, accusamus officiis eius architecto fuga laboriosam iste iure ratione.</p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {footer_data.map((item, index) => (
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{item.title}</h3>
                        <ul className='text-sm space-y-1'>
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className='hover:underline transition'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2026 All Rights Reserved</p>
    </div>
  )
}

export default Footer