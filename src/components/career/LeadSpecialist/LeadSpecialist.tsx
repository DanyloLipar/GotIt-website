import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import location from "../../../assets/photos/career/place.svg";
import time from "../../../assets/photos/career/time.svg";
import form from "../../../assets/photos/career/form.svg";
import add from "../../../assets/photos/career/add.svg";
import { FormEvent, useState } from "react";
import { Applicant } from "../../../types/Applicant";

export const LeadSpecialist = () => {
    const [applicant, setApplicant] = useState<Applicant>();
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [cv, setCv] = useState<FileList | null>(null);
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [invalidPhone, setInvalidPhone] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const clear = () => {
        setName("");
        setPhone("");
        setUrl("");
        setEmail("");
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

        const newApplicant: Applicant = {
            id: new Date().getUTCMilliseconds(),
            name: name,
            phone: phone,
            email: email,
            linkedin: url,
            file: cv,
        }

        if (name && email && phone.trim() && email.includes('@') && Number(phone)) {
            setApplicant(newApplicant);
            setErrorText(false)
            setCv(null);
            setSuccess(true);
            clear();
        } else {
            setSuccess(false);
            setErrorText(true);
        }

        console.log(applicant);

        checkingError();
    }

    return (
        <div>
            <Header />
            <section className="position">
                <div className="position__container">
                    <div className="position__container__important important">
                        <h2 className="important__title">Lead Generation Specialist / IT Sales Manager</h2>
                        <div className="important__details">
                            <div className="important__details-holder holder">
                                <div className="holder__box">
                                    <img className="holder__box-icon" src={location} alt="location" />
                                    <p className="holder__box-text">Lviv, Ukraine</p>
                                </div>
                            </div>
                            <div className="important__details-holder holder">
                                <div className="holder__box">
                                    <img className="holder__box-icon" src={time} alt="time" />
                                    <p className="holder__box-text">Full time</p>
                                </div>
                            </div>
                            <div className="important__details-holder holder">
                                <div className="holder__box">
                                    <img className="holder__box-icon" src={form} alt="remote" />
                                    <p className="holder__box-text">Remote</p>
                                </div>
                            </div>
                        </div>
                        <a href="#applying" className="important__apply">APPLY</a>
                        <p className="important__desc">Got It Agency is looking for a skilled Lead Generator/Sales manager who has upper-Intermediate / advanced English who will be working with Upwork platform/Linkedin and be responsible for writing creative and catchy bids, initial requirements clarification.</p>
                    </div>
                    <div className="position__container-circs circs">
                        <div className="circs__list">
                            <h3 className="circs__list-title">Requirements:</h3>
                            <ul className="circs__list-own">
                                <li>At least 1 year of appropriate experience</li>
                                <li>Ability to manage negotiations regarding multiple projects with various clients simultaneously</li>
                                <li>Full sales cycle experience: from searching to closing deals</li>
                                <li>English Intermediate or Upper-Intermediate</li>
                                <li>Experience in communication with the development team, preparation of the project proposals</li>
                                <li>Understanding of the software development process life-cycle</li>
                                <li>Upper-Intermediate at least (fluent written and spoken English with excellent comprehension skills)</li>
                                <li>Experience in working with UpWork/ Linkedin, CRM systems, email campaigns</li>
                                <li>Being proactive, self-motivated, and result-oriented</li>
                            </ul>
                        </div>
                        <div className="circs__list">
                            <h3 className="circs__list-title">What you will do:</h3>
                            <ul className="circs__list-own">
                                <li>Find prospects on Upwork/Linkedin through writing bids</li>
                                <li>Participate in video calls with leads</li>
                                <li>Analysis of clients' requirements, communication through e-mail, Skype, and other tools, preparation of the commercial proposal</li>
                                <li>Leads database and CRM management</li>
                                <li>Provide research on new markets, client segments and opportunities, and in-time reporting</li>
                            </ul>
                        </div>
                        <div className="circs__list">
                            <h3 className="circs__list-title">What we offer:</h3>
                            <ul className="circs__list-own">
                                <li>Friendly team</li>
                                <li>Flexible schedule</li>
                                <li>PS</li>
                                <li>Birthday gifts</li>
                                <li>Team buildings</li>
                                <li>Competitive financial reward, paid vacation and sick leave</li>
                                <li>Free English lessons</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="applying" className="application">
                    <div className="application__container">
                        <h2 className="application__container-gen">Personal Details</h2>
                        <form
                            onSubmit={submition}
                            className="application__container-frm frm"
                        >
                            <div className="frm__blocks">
                                <div className="frm__blocks-inputs inputs">
                                    <div className="inputs__item">
                                        <input
                                            className="inputs__item-inpt"
                                            value={name}
                                            placeholder="Full name*"
                                            onChange={(event) => {
                                                setName(event.target.value)
                                            }}
                                        />
                                        {nameError && (<span className="inputs__item-error">Required field</span>)}
                                    </div>
                                    <div className="inputs__item">
                                        <input
                                            className="inputs__item-inpt"
                                            value={email}
                                            placeholder="Email*"
                                            onChange={(event) => {
                                                setEmail(event.target.value)
                                            }}
                                        />
                                        {emailError && (<span className="inputs__item-error">Required field</span>)}
                                        {invalidEmail && (<span className="inputs__item-error">Invalid Email</span>)}
                                    </div>
                                    <div className="inputs__item">
                                        <input
                                            className="inputs__item-inpt"
                                            value={message}
                                            placeholder="Cover letter message"
                                            onChange={(event) => {
                                                setMessage(event.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="frm__blocks-inputs inputs">
                                    <div className="inputs__item">
                                        <input
                                            className="inputs__item-inpt"
                                            value={phone}
                                            placeholder="Phone number*"
                                            onChange={(event) => {
                                                setPhone(event.target.value)
                                            }}
                                        />
                                        {phoneError && (<span className="inputs__item-error">Required field</span>)}
                                        {invalidPhone && (<span className="inputs__item-error">Invalid phone number</span>)}
                                    </div>
                                    <div className="inputs__item">
                                        <input
                                            className="inputs__item-inpt"
                                            value={url}
                                            placeholder="Link to Linkedin profile"
                                            onChange={(event) => {
                                                setUrl(event.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="inputs__file">
                                        <label htmlFor="file" className="inputs__file-objects objects">
                                            <div className="objects__block">
                                                <img className="objects__block-icon" src={add} alt="add CV" />
                                            </div>
                                            <input
                                                id="file"
                                                type="file"
                                                className="objects__block-get"
                                                name="CV"
                                                accept=".doc,.docx,.pdf,.odt,.ods,.ppt/x,.xls/x,.rtf,.txt, application/msword"
                                                onChange={(event) => {
                                                    setCv(event.target.files)
                                                    console.log(event.target.files)
                                                    console.log(cv);
                                                }}
                                            />
                                            {!cv ? (<span>Attach a CV</span>) : (<span>Uploaded</span>)}
                                        </label>
                                        <span className="inputs__file-desc">Please upload a file with the following extension: .pdf, .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt</span>
                                    </div>
                                </div>
                            </div>
                            <button className="frm__submition" type="submit">SUBMIT APPLICATION</button>
                            {errorText && (<p className="frm__result">Your apply was not send. Check fields or connection.</p>)}
                            {success && (<p className="frm__result">Your application succesfully sent!</p>)}
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}