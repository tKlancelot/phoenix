import firebase from 'firebase/firebase';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {


    const {register,handleSubmit,formState: { errors }} = useForm();
    
    const onSubmit = (data) => {
        const messages = firebase.database().ref("messages");
        messages.push(data)
        toast.success("Félicitations. Votre message a correctement été envoyé.")
    }


    return (
        <div className="form">  
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>contactons-nous</h3>
                <div className="content">
                    <p>Parlez-moi de votre projet !</p>
                    <p>N'hésitez-pas. J'aime relever des défis d'intégration et construire à vos côtés le site ou l'application de vos rêves !</p>
                </div>
                <div className="input-box">
                    <input 
                    type="text"
                    placeholder="indiquez votre prénom" 
                    {...register('prenom', 
                    { 
                        required: "PRÉNOM REQUIS", 
                        minLength : {
                            value:2,
                            message:"PRÉNOM TROP COURT"
                            } 
                        })
                    } 
                    /> {/* register an input */}
                </div>
                <div className="input-box">
                    <input 
                    type="email" 
                    placeholder="indiquez votre email"
                    {...register('email', 
                    { 
                        required: "EMAIL REQUIS" 
                    })
                    } 
                    />
                </div>
                <div className="input-box">
                    <textarea 
                    rows="6"
                    placeholder="rédigez un message ici ..."
                    {...register('message', 
                    { 
                        required: "MESSAGE REQUIS", 
                        minLength : 
                        {
                            value:8,
                            message:"MESSAGE TROP COURT"
                            } 
                        })
                    }>
                    </textarea>
                </div>
                <div className="input-box">
                    <input type="submit" />
                </div>
                <div className="error">
                    {errors.prenom && <p>{errors.prenom.message}</p>}
                    {errors.email && <p>{errors.email.message}</p>}
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={15000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </form>
    </div>
    );
};

export default ContactForm;


