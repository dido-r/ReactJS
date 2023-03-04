import styles from './style/Contact.module.css';

export function Contact() {

    return (
        <section className={styles['contact']}>
            <h2 className={styles['contact-head']}>Contacts</h2>
            <div className="container">
                <div>
                    <div className={styles['info-box']}>
                        <img className="address" src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/icons8-visit-50_rt1di3.png" />
                        <h3 className={styles['info-box-h3']}>Our Address</h3>
                        <p className={styles['contact-box-p']}>Ruse, Bulgaria</p>
                    </div>

                    <div className={styles['info-box']}>
                        <img className="email" src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854614/icons8-mail-50_zcy9db.png" />
                        <h3 className={styles['info-box-h3']}>Email Us</h3>
                        <p className={styles['contact-box-p']}>info@projectsite.com</p>
                    </div>

                    <div className={styles['info-box']}>
                        <img className="phone" src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854614/icons8-phone-50_laiprh.png" />
                        <h3 className={styles['info-box-h3']}>Call Us</h3>
                        <p className={styles['contact-box-p']}>+359999999999</p>
                    </div>

                </div>

                <div className={styles['info-box']}>
                    <form className="email-form">
                        <div>
                            <div>
                                <input type="text" name="name" className="form-control" id="name"
                                    placeholder="Your Name" required />
                            </div>
                            <div>
                                <input type="email" className="form-control" name="email" id="email"
                                    placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject"
                                placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                required></textarea>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
       
        </section >
    );
}