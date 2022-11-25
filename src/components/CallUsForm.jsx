import React, { useState } from 'react';
import '../styles/CallUsForm.css'
import emailjs from '@emailjs/browser';

const CallUsForm = ({popup}) => {

    let clicked = false

    const [warning, setWarning] = useState(false)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');

    const YOUR_SERVICE_ID = "service_p1eimao";
    const YOUR_TEMPLATE_ID = "template_ec2o0rq";
    const YOUR_PUBLIC_KEY = 'tpkPAVFUcShDa6V4T';
    const PARAMS = {
        user: `${name}`,
        tel: `${tel}`,
        message: `${message}`,
        email: `${email}`
    };

    
    const sendEmail = (e) => {
        e.preventDefault();
        if(!name || !email || !tel || !message) {
            // console.log('not sent')
            // console.log(name, email, tel, message)
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, "5000")
        }
        else {
            emailjs.send(
                YOUR_SERVICE_ID,
                YOUR_TEMPLATE_ID,
                PARAMS,
                YOUR_PUBLIC_KEY
            );
            
            clicked = !clicked

            // console.log('sent')

            setName('')
            setEmail('')
            setTel('')
            setMessage('')
            popup();
        }
    };

    // console.log(warning)

    const warningDisplay = (warning) => {
        return warning ? 'flex' : 'none' 
    }

    return (
        <div className='callUs'>
            <form className='callUsForm'>
                <div className='callUsFormInputBox'>
                    <p>Имя:</p>
                    <input type="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className='callUsFormInputBox'>
                    <p>Телефон:</p>
                    <input type="tel" value={tel} onChange={e => setTel(e.target.value)}/>
                </div>
                <div className='callUsFormInputBox'>
                    <p>Что вас интересует:</p>
                    <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
                </div>
                <div className='callUsFormInputBox'>
                    <p>Email:</p>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <p style={{display: warningDisplay(warning)}}>Заполните все поля</p>
                <button type="submit" onClick={clicked === false ? sendEmail : console.log('Already clicked')}>Отправить</button>
            </form>
        </div>
    )
}

export default CallUsForm;