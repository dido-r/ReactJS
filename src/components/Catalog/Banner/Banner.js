import { useEffect, useState } from "react";
import styles from './Banner.module.css'

export function Banner({ params }) {

    const [bannerSrc, setBannerSrc] = useState('');

    useEffect(() => {

        if (params === 'men') {

            setBannerSrc("https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/BANNER-MENS-CLOTHING_outope.jpg");

        } else if (params === 'women') {

            setBannerSrc("https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/banner-home-alexinternational-WOMENS-CLOTHING_gmxjbn.jpg");
        }

    }, [params])


    return (

        <div className={styles['collection-header']}>
            <div className={styles['collection-hero']}>
                <div className={styles['collection-hero-img-container']}>
                    <img className={styles['collection-hero-image']} src={bannerSrc} alt="" />
                </div>
            </div>
        </div>
    );
}