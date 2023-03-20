import styles from './Slider.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Slider({ gender }) {

    const [activeSlide, setActiveSlide] = useState(1);
    const [activeDot, setActiveDot] = useState(1);
    const [trendItems, setTrendItems] = useState([]);

    const onChoose = (prop) => {

        if (prop === "next") {

            activeSlide === 3 ? setActiveSlide(1) : setActiveSlide(x => x + 1);
            activeDot === 3 ? setActiveDot(1) : setActiveDot(x => x + 1);

        } else if (prop === "prev") {

            activeSlide === 1 ? setActiveSlide(3) : setActiveSlide(x => x - 1);
            activeDot === 1 ? setActiveDot(3) : setActiveDot(x => x - 1);
        } else {

            setActiveSlide(prop);
            setActiveDot(prop)
        }
    }

    useEffect(() => {

        fetch(`https://parseapi.back4app.com/classes/Products?where=%7B%20%22gender%22%3A%20%22${gender}%22%7D`, {
            headers: {
                "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU",
            }
        })
            .then(x => x.json())
            .then(x => setTrendItems(x.results.slice(x.results.length - 9, x.results.length)));

    }, [gender]);

    return (
        <div>
            <div className={styles['slideshow-container']}>

                {activeSlide === 1 && <div className={`${styles['mySlides']} ${styles['fade']}}`}>

                    {trendItems.slice(0, 3).map(x =>
                        <div key={x.objectId} className={styles['item-container']}>
                            <Link to={`/catalog/${gender}/details/${x.objectId}`}><img src={x.imgUrl} alt="" /></Link>
                            <p>{x.name}</p>
                        </div>
                    )}
                </div>
                }

                {activeSlide === 2 && <div className={`${styles['mySlides']} ${styles['fade']}}`}>

                    {trendItems.slice(3, 6).map(x =>
                        <div key={x.objectId} className={styles['item-container']}>
                            <Link to={`/catalog/${gender}/details/${x.objectId}`}><img src={x.imgUrl} alt="" /></Link>
                            <p>{x.name}</p>
                        </div>
                    )}

                </div>}

                {activeSlide === 3 && <div className={`${styles['mySlides']} ${styles['fade']}}`}>

                    {trendItems.slice(6, 9).map(x =>
                        <div key={x.objectId} className={styles['item-container']}>
                            <Link to={`/catalog/${gender}/details/${x.objectId}`}><img src={x.imgUrl} alt="" /></Link>
                            <p>{x.name}</p>
                        </div>
                    )}
                </div>}


                <p className={styles['prev']} onClick={() => onChoose("prev")}>&#10094;</p>
                <p className={styles['next']} onClick={() => onChoose("next")}>&#10095;</p>
            </div>
            <br />


            <div className={styles['dot-container']}>
                <span className={`${styles['dot']} ${activeDot === 1 && styles['active']}`} onClick={() => onChoose(1)}></span>
                <span className={`${styles['dot']} ${activeDot === 2 && styles['active']}`} onClick={() => onChoose(2)}></span>
                <span className={`${styles['dot']} ${activeDot === 3 && styles['active']}`} onClick={() => onChoose(3)}></span>
            </div>
        </div>
    );
}