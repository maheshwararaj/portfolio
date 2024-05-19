import React from 'react'
import './Contact.css'

const Contact = () => {
   
    return (
    <div className='contact section-pad' id='contact' >
        <div className="contact-left">
            <h2>Let's talk on something <span>great</span> together</h2>
             <ul className='contact-links'>
                <li><img src="https://e7.pngegg.com/pngimages/595/338/png-clipart-icon-email-email-miscellaneous-angle.png" alt="" /> maheshwararajd@gmail.com</li>
                <li><img src="https://pngimg.com/uploads/phone/phone_PNG48982.png" alt="" /> +91 7708665464</li>
                <li><img src="https://cdn-icons-png.freepik.com/512/447/447031.png" alt="" /> Guindy, Chennai</li>
             </ul>
        </div>
        <div className="contact-right">
            <form action="" className='contact-form'>
                <h2>Get in touch</h2>
                <input type="text" name='name' placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <input type="text" name='city' placeholder='City' />
                <textarea name="message" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='button'>Send</button>
            </form>  
        </div>
    </div>
  )
}

export default Contact;