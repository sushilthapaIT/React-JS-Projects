import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'

const ContactCard = ({contact}) => {
  return (
    <div>
      <div key={contact.id} className='bg-yellow flex justify-around p-2 rounded-lg'>
                <div className='flex gap-1'>
                  <HiOutlineUserCircle className='text-orange text-4xl'/>
                  <div className=''>
                    <h2 className='font-medium'>{contact.name}</h2>
                    <p className='text-sm'>{contact.email}</p>
                </div>
            </div>
              <div className='flex text-3xl'>
                <RiEditCircleLine />
                <IoMdTrash className='text-orange'/>
              </div>
            </div>
    </div>
  )
}

export default ContactCard
