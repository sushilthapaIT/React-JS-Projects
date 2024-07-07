import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from 'react-icons/io';
import {RiEditCircleLine} from 'react-icons/ri';
import Nav from './components/Nav';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "./config/firebase";

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapShot = await getDocs(contactsRef);
        const contactLists = contactsSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log("Error!!!", error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Nav />
        <div className='flex gap-2'>
          <div className='relative flex-grow flex items-center ml-1'>
            <FiSearch className='absolute text-3xl text-white' />
            <input type='text' className='flex-grow border bg-transparent border-white rounded-md h-10 text-white pl-9' />
          </div>
          <AiFillPlusCircle className='text-5xl cursor-pointer text-white' />
        </div>
        <div>
          {contacts.map((contact) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
