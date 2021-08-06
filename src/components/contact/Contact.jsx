import './contact.scss'
import { useState } from 'react';

export default function Contact() {

    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id='contact'>
            <div className="middle">
                <div className="title">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="wrapper">
            <div className='left'>
                <form  method='POST' action= 'https://formsubmit.co/farhatbassel@tutanota.com'>
                    <h2>To contact me, submit the form below</h2>
                    <input type='text' name='name' placeholder='Name' required/>
                    <input type='text' name='email' placeholder='Email' required/>
                    <textarea placeholder='Message' name='message' required></textarea>
                    <button type='submit' name='submit' value="Send Message">Submit</button>
                    {message && <span>Thank you, I'll get back to you as soon as possible :)</span>}
                </form>
            </div>
            <div className='right'>
                <div className="wrapper">
                    <h2>Email:</h2>
                    <h3>farhatbassel@tutanota.com</h3>
                </div>
            </div>
            </div>
        </div>
    )
}
