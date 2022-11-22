import React from 'react';
import '../styles/CallUsForm.css'

const CallUsForm = () => {
    return (
        <div className='callUs'>
            <form className='callUsForm'>
                <div className='callUsFormInputBox'>
                    <p>Имя:</p>
                    <input type="name"/>
                </div>
                <div className='callUsFormInputBox'>
                    <p>Телефон:</p>
                    <input type="tel"/>
                </div>
                <div className='callUsFormInputBox'>
                    <p>Что вас интересует:</p>
                    <input type="text"/>
                </div>
                <div className='callUsFormInputBox'>
                    <p>Email:</p>
                    <input type="email"/>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default CallUsForm;