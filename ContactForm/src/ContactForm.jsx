import Button from "./Button";
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"


const ContactForm = () => {

    return(
        <>
        <div>

            <h2>CONTACT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos asperiores voluptate, architecto consequuntur provident ab? Perspiciatis alias assumenda accusantium aliquam quisquam optio excepturi! Hic enim harum quae quia veritatis.</p>
            <section className="container">
                    <div className="contact_form">
                        <div className="top_btn">
                            <Button text = "VIA SUPPORT CHAT" icon = {<MdMessage fontSize={"24px"}/>} />
                            <Button text = "VIA CALL" icon = {<FaPhoneAlt fontSize={"24px"}/>} />
                        </div>
                        <Button isOutline={true} text = "VIA EMAIL FORM" icon = {<HiMail fontSize={"24px"}/>} />
                    </div>

                    <div className="contact_image">

                    </div>
            </section>
        </div>
        </>
    );

}

export default ContactForm