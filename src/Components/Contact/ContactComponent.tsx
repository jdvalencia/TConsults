import { Card, CardContent, makeStyles } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import './ContactComponent.css'
import { FormErrors } from '../../models/FormErrors';

const useStyles = makeStyles({
    root: {
        marginTop: '1em',
        marginBottom: '1em'
    }
})

export const ContactComponent: FunctionComponent<any> = () => {
    const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const classes = useStyles();
    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [subject, changeSubject] = useState('');
    const [message, changeMessage] = useState('');
    const errors = new FormErrors('','','','');

    const formValid = () => {
        if((name && email && subject && message !== '' || null) && (name.length && email.length && subject.length && message.length >= 2) && (emailRegex.test(email))) {
            return(true);
        }
        else{
            return(false);
        }
    }

    const resetForm = () => {
            changeName('')
            changeEmail('')
            changeSubject('')
            changeMessage('')
        }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (formValid()) {
            // Handle form validation success
            // Set template params
            let templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message,
            };
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'userID');

            console.log(`
            --SUBMITTING--
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
          `);

            resetForm();
        } else {
            // Handle form validation failure
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    };

    const validate = (e:any) => {
        e.preventDefault();
        const { name, value } = e.target;
            switch(name) {
                case "name":
                    if(value.length <= 1){
                        document.getElementsByName("name")[0].classList.add("error")
                        document.querySelector("div.name-form-field div.error-message")?.removeAttribute("hidden")
                    }
                    else {
                        document.getElementsByName("name")[0].classList.remove("error")
                        document.querySelector("div.name-form-field div.error-message")?.setAttribute("hidden", "true")
                    }
                    break;
                case "email":
                    if(value.length <= 1 || !emailRegex.test(value)){
                        document.getElementsByName("email")[0].classList.add("error")
                        document.querySelector("div.email-form-field div.error-message")?.removeAttribute("hidden")
                    }
                    else {
                        document.getElementsByName("email")[0].classList.remove("error")
                        document.querySelector("div.email-form-field div.error-message")?.setAttribute("hidden", "true")
                    }
                    break;
                case "subject":
                    if(value.length <= 1){
                        document.getElementsByName("subject")[0].classList.add("error")
                        document.querySelector("div.subject-form-field div.error-message")?.removeAttribute("hidden")
                    }
                    else {
                        document.getElementsByName("subject")[0].classList.remove("error")
                        document.querySelector("div.subject-form-field div.error-message")?.setAttribute("hidden", "true")
                    }
                    break;
                case "message":
                    if(value.length <= 1){
                        document.getElementsByName("message")[0].classList.add("error")
                        document.querySelector("div.message-form-field div.error-message")?.removeAttribute("hidden")
                    }
                    else {
                        document.getElementsByName("message")[0].classList.remove("error")
                        document.querySelector("div.message-form-field div.error-message")?.setAttribute("hidden", "true")
                    }
                    break;
                default:
                    console.log("error");
                    
                
            }
    }

    const handleChange = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        switch (name) {
            case "name":
                changeName(value);
                break;
            case "email":
                changeEmail(value);
                break;
            case "subject":
                changeSubject(value);
                break;
            case "message":
                changeMessage(value);
                break;
            default:
                console.log("target element not found");
        }
    };

    return (
        <div className="main-contact">
            <div className="container">
                <div className="home">
                    <Card className={classes.root}>
                        <CardContent>
                            <h1>
                                Contact Us
                            </h1>
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="name-form-desc">
                                    Name:
                                </div>
                                <div className="name-form-field">
                                    <input
                                        type='text'
                                        name='name'
                                        value={name}
                                        className={`${errors.name ? 'error': null}`}
                                        onChange={handleChange}
                                        onBlur={validate}
                                        placeholder='Name'
                                        onKeyPress={event => (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122)}
                                    />
                                    <div className="error-message" hidden>*Please enter your name.</div>
                                </div>
                                <div className="email-form-desc">
                                    Email:
                                </div>
                                <div className="email-form-field">
                                    <input
                                        type='email'
                                        name='email'
                                        value={email}
                                        className='form-control formInput'
                                        onChange={handleChange}
                                        onBlur={validate}
                                        placeholder='Email'
                                    />
                                    <div className="error-message" hidden>*Please enter a valid email address.</div>
                                </div>
                                <div className="subject-form-desc">
                                    Subject:
                                </div>
                                <div className="subject-form-field">
                                    <input
                                        type='subject'
                                        name='subject'
                                        value={subject}
                                        className='form-control formInput'
                                        onChange={handleChange}
                                        onBlur={validate}
                                        placeholder='Subject'
                                    />
                                    <div className="error-message" hidden>*Please enter a subject.</div>
                                </div>
                                <div className="message-form-desc">
                                    Message:
                                </div>
                                <div className="message-form-field">
                                    <textarea
                                        rows={6}
                                        name='message'
                                        value={message}
                                        className='form-control formInput'
                                        onChange={handleChange}
                                        onBlur={validate}
                                        placeholder='Message'
                                        style={{ resize: 'none', width: '100%' }}
                                    />
                                    <div className="error-message" hidden>*Please enter a message.</div>
                                </div>
                                <div className="submit-form">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}