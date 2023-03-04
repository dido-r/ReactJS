import styles from './style/Home.module.css';

export function Home() {

    return (
        <>
            <section className={styles['hero-home']}></section>
            <img className={styles['home-logo']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854616/project-site-low-resolution-logo-white-on-transparent-background_toheaw.png" alt='logo' />

            <section className={styles['home-section']}>
                <div className={styles['icon-box']}>
                    <img src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/Jordan-women-apparel_szzqpm.jpg" />
                    <h4 className={styles['home-title']}><a className={styles['home-a']} href="#">Women's apparel</a></h4>
                    <button className={styles['home-btn']}>Buy now</button>
                </div>

                <div className={styles['icon-box']}>
                    <img className={styles['man-img']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854616/Mens-UK-Blogger-Topman-Check-Trousers_nz9ial.jpg" />
                    <h4 className={styles['home-title']}><a className={styles['home-a']} href="#">Men's apparel</a></h4>
                    <button className={styles['home-btn']}>Buy now</button>
                </div>
            </section>
        </>
    );
}