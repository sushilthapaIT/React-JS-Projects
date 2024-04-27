import './App.css';

import Button from "./Button";
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import { useState } from 'react';


const ContactForm = () => {

    const [name, setName] = useState("Sushi")
    const [email, setEmail] = useState("thap@gmail.com")
    const [text, setText] = useState("Customer Service not working")

    const onViaCallSubmit = () => {
        console.log("Clicked onViaCall");
    }

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }


    return(
        <>
        <div>
            <h2>CONTACT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos asperiores voluptate, architecto consequuntur provident ab? Perspiciatis alias assumenda accusantium aliquam quisquam optio excepturi! Hic enim harum quae quia veritatis.</p>
            <section className="container">
                    <div className="contact_form">
                        <div className="top_btn">
                            <Button onClick={onViaCallSubmit} text = "VIA SUPPORT CHAT" icon = {<MdMessage fontSize={"24px"}/>} />
                            <Button text = "VIA CALL" icon = {<FaPhoneAlt fontSize={"24px"}/>} />
                        </div>
                        <Button isOutline={true} text = "VIA EMAIL FORM" icon = {<HiMail fontSize={"24px"}/>} />

                        <form onSubmit={onSubmit}>
                            <div className="form_control">
                                <label>Name</label>
                                <input  type='text' name='name' placeholder='Enter Your Name' required/>
                            </div>

                            <div className="form_control">
                                <label>Email</label>
                                <input  type='email' name='email' placeholder='Enter Your Email' required/>
                            </div>

                            <div className="form_control">
                                <label>Text</label>
                                <textarea  type='text' name='text' rows={8} required/>
                            </div>

                            <div style={{display: "flex", justifyContent: "end"}}>
                                <Button text = "Submit Button" />
                            </div>

                            <div>
                                {name + "" + email + "" + text}
                            </div>


                        </form>
                    </div>

                    <div className="contact_image">
                        <img src='./images/contact.svg' alt='image of contact' />
                    </div>
            </section>
        </div>
        </>
    );

}

export default ContactForm