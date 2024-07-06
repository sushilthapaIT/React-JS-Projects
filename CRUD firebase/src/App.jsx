import React, { useEffect, useState } from 'react'
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai"
import Nav from './components/Nav';
import { collection, getDoc } from 'firebase/firestore';
import {db} from "./config/firebase";

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    const getContacts = async () => {
      try{
        const contactsRef = collection(db, "contacts");
        const contactsSnapShot = await getDoc(contactsRef);
        const contactLists = contacts.Snapshot.docs.map((doc) => doc.data());
        console.log(contactsSnapShot)
      }
      catch (error){
        console.log("Error!!!", error);
      }
    }

    getContacts();
  }, [])
  return (
    <>
    <div className='max-w-[370px] mx-auto px-4'>
      <Nav />
    <div className='flex gap-2'>
      <div className='relative flex-grow flex items-center ml-1'>
          <FiSearch className='absolute text-3xl text-white'/>
          <input type='text' className='flex-grow border bg-transparent border-white rounded-md h-10 text-white pl-9'/>
      </div>
      <AiFillPlusCircle className='text-5xl cursor-pointer text-white'/>
    </div>
    </div>
    </>
  )
}

export default App
