import { Link } from 'react-router-dom';
import { Slider } from './Slider';
import styles from './style/Home.module.css';

export function Home() {

    return (
        <>
            <section className={styles['hero-home']}></section>
            <img className={styles['home-logo']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854616/project-site-low-resolution-logo-white-on-transparent-background_toheaw.png" alt='logo' />

            <section className={styles['home-section']}>
                <div className={styles['icon-box']}>
                    <Link to="/catalog/women"><img src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/Jordan-women-apparel_szzqpm.jpg" alt="" /></Link>
                    <h4 className={styles['home-title']}><Link to="/catalog/women" className={styles['home-a']}>Women's apparel</Link></h4>
                </div>

                <div className={styles['slider-container']}>
                    <h2>New women's products</h2>
                    <Slider gender={"women"} />
                </div>

                <div className={styles['icon-box']}>
                    <Link to="/catalog/men"><img className={styles['man-img']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854616/Mens-UK-Blogger-Topman-Check-Trousers_nz9ial.jpg" alt="" /></Link>
                    <h4 className={styles['home-title']}><Link to="/catalog/men" className={styles['home-a']}>Men's apparel</Link></h4>
                </div>

                <div className={styles['slider-container']}>
                    <h2>New men's products</h2>
                    <Slider gender={"men"} />
                </div>

            </section>
        </>
    );
}