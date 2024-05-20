
import './Contact.css'
import { useState, useEffect } from 'react';
import fs from 'fs'
import jsonData from './data.json';

const Contact = () => {

    useEffect(()=>{
        console.log(jsonData.messages)
    },[])


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        message: ''
      });

      jsonData.messages.push(formData);
     
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Fetch existing JSON data from the server
          const response = await fetch('/data.json');
          const data = await response.json();
    
          // Add new object to JSON data
          data.push(formData); // Assuming formData is directly compatible with your JSON structure
    
          // Update JSON data on the server
          await fetch('/updateData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
    
          // Optional: Update React state or trigger any other necessary actions
          // Example: setFormData({ name: '', email: '', city: '', message: '' });
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
    



   
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
            <form action="" className='contact-form' onSubmit={handleSubmit}>
                <h2>Get in touch</h2>
                <input onChange={handleInputChange} type="text" name='name' value={formData.name} placeholder='Name' />
                <input onChange={handleInputChange} type="email" name='email' value={formData.email} placeholder='Email' />
                <input onChange={handleInputChange} type="text" name='city' value={formData.city} placeholder='City' />
                <textarea onChange={handleInputChange} name="message" cols="30" value={formData.message} rows="10" placeholder='Message'></textarea>
                <button type="submit" className='button'>Send</button>
            </form>  
        </div>
    </div>
  )
}

export default Contact;