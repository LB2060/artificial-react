import React from 'react';
import emailjs from "@emailjs/browser" ;
import { useRef } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
    
   
    const myform = useRef<HTMLFormElement>(null)

    const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if(myform.current){
            emailjs
          .sendForm('service_j4igqsg', 'template_u3l7wk8', myform.current, {
            publicKey: '3g4_Ne5jaFsCVO_Yg',
          })
          .then(
            () => {
              toast.success('SUCCESS!!!');
            },
            () => {
              toast.error("I'M SORRY.FAILED");
            },
            
          );
          myform.current.reset()
        }
      };
    return (
        <div className='contact-us' >

            <div className="container">
                <div className="row">
                    <div className="contact-left col-12 col-md-6">
                        <h3 className='contact-h3'>Let's chat. <br />
                            Tell me about your
                            project</h3>
                        <p className='contact-p my-3'>Let's create something together ;)</p>
                        <img className='contact-img my-4' src="/chat.svg" alt="" />

                    </div>


                    <div className="contact-right col-12 col-md-6">
                        <form className='contact-form' onSubmit={sendEmail} ref={myform}>
                            <div className="sent-text text-white">
                                <h1 className='contact-h1'>Send us a message :)</h1>
                            </div>
                            
                                <div className="form-group">
                                    <label htmlFor="name"></label>
                                    <input
                                        type="text"
                                        className="form-control my-4"
                                        id="name"
                                        placeholder="Your Full Name*"
                                        name='name'
                                    />
                                </div>


                                <div className="form-group">
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email*"
                                    name='email'
                                />
                            </div>


                            <div className="form-group">
                                <label className='text-white my-4' htmlFor="message">Tell us about your project*</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name='message'
                                />
                            </div>
                            <button type="submit" className="contact-btn my-3">Submit</button>

                        </form>


                    </div>

                </div>

            </div>
        </div>

    )
}

export default Contact