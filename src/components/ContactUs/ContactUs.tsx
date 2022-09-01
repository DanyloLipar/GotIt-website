import { Footer } from "../additional/Footer";
import { Header } from "../additional/Header";
import "./ContactUs.scss";
import mail from "../../assets/photos/contact/email.svg"
import error from "../../assets/photos/contact/error.svg";
import { Contact } from "../../types/Contact";
import { FormEvent, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const ContactUs = () => {
    const [result, setResult] = useState<Contact | null>(null);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [invalidPhone, setInvalidPhone] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<boolean>(false);

    const clear = () => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    }

    const checkingError = () => {
        !name ? setNameError(true) : setNameError(false);
        !email ? setEmailError(true) : setEmailError(false);
        !phone ? setPhoneError(true) : setPhoneError(false);
        email.includes('@') || email === "" ? setInvalidEmail(false) : setInvalidEmail(true);
        !Number(phone) && phone !== "" ? setInvalidPhone(true) : setInvalidPhone(false);
    }

    const submition = (event: FormEvent) => {
        event.preventDefault();

        const newContact: Contact = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        }

        if (name && email && phone.trim() && email.includes('@') && Number(phone)) {
            setResult(newContact);
            setErrorText(false)
            clear();
        } else {
            setErrorText(true);
        }

        checkingError();
    }

    return (
        <div className="connection">
            <Header />
            <section className="contact">
                <div className="contact__info">
                    <div className="contact__info-in in">
                        <h2 className="in__title">Let`s get in <span>touch</span></h2>
                        <p className="in__desc">Tell us about your idea, and we will implement it in life</p>
                        <div className="in__mailing">
                            <div className="in__mailing-photobox">
                                <img
                                    src={mail}
                                    alt="email icon"
                                />
                            </div>
                            <a href="mailto:got-it@gmail.com" className="in__mailing-text">got-it@gmail.com</a>
                        </div>
                    </div>
                    <form
                        className="contact__info-form form"
                        onSubmit={submition}
                    >
                        <div className="form__item">
                            <input
                                className="form__item-inp"
                                placeholder="Name*"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />
                            {nameError && (<span className="form__item-fail">The field is required</span>)}
                        </div>
                        <div className="form__item">
                            <input
                                className="form__item-inp"
                                placeholder="Email*"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />
                            {emailError && (<span className="form__item-fail">The field is required</span>)}
                            {invalidEmail && (<span className="form__item-fail">The email address was entered incorrectly.</span>)}
                        </div>
                        <div className="form__item">
                            <input
                                className="form__item-inp"
                                placeholder="Phone number*"
                                value={phone}
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }}
                            />
                            {phoneError && (<span className="form__item-fail">The field is required</span>)}
                            {invalidPhone && (<span className="form__item-fail">Invalid phone number</span>)}
                        </div>
                        <div className="form__item">
                            <input
                                className="form__item-inp"
                                placeholder="Your message"
                                value={message}
                                onChange={(event) => {
                                    setMessage(event.target.value)
                                }}
                            />
                        </div>
                        <button className="form__btn">SEND MESSAGE</button>
                        {errorText && (<div className="form__invalid">
                            <img className="form__invalid-icon" src={error} alt="error" />
                            <p className="form__invalid-text">Your message was not send. Check fields or connection.</p>
                        </div>)}
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}