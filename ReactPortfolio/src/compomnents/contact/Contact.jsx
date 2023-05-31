import React from 'react'
import "./contact.css"
import { MdAlternateEmail } from "react-icons/md"
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri"

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdAlternateEmail />
                        <h4>Email</h4>
                        <h5>camalc1997@gmail.com</h5>
                        <a href="mailto:camalc1997@gmail.com" target='_blank' rel="noreferrer">Send a mmessage</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>egatortutorials</h5>
                        <a href="facebook.com" target='_blank' rel="noreferrer">Send a mmessage</a>
                    </article>
                    <article className="contact__option">
                        <RiWhatsappLine className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+994(55)667-90-60</h5>
                        <a href="whatsapp.com" target='_blank' rel="noreferrer">Send a mmessage</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section >
    )
}

export default Contact;
