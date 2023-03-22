import styles from './Slider.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from '../../../services/api';

export function Slider({ gender }) {

    const [offset, setOffset] = useState(0);
    const [activeDot, setActiveDot] = useState(0);
    const [trendItems, setTrendItems] = useState([]);

    const onChoose = (prop) => {

        if (prop === "next") {

            offset === 6 ? setOffset(0) : setOffset(x => x + 3);
            activeDot === 6 ? setActiveDot(0) : setActiveDot(x => x + 3);

        } else if (prop === "prev") {

            offset === 0 ? setOffset(6) : setOffset(x => x - 3);
            activeDot === 0 ? setActiveDot(6) : setActiveDot(x => x - 3);
        } else {

            setOffset(prop)
            setActiveDot(prop)
        }
    }

    useEffect(() => {
        async function fetchData() {

            const response = await get(`classes/Products?where=%7B%20%22gender%22%3A%20%22${gender}%22%7D`);
            setTrendItems(response.results.slice(response.results.length - 9, response.results.length));
        }
        fetchData();

    }, [gender]);

    return (
        <div>
            <div className={styles['slideshow-container']}>

               
                <div className={`${styles['mySlides']} ${styles['fade']}}`}>

                    {trendItems.slice(offset, offset + 3).map(x =>
                        <div key={x.objectId} className={styles['item-container']}>
                            <Link to={`/catalog/${gender}/details/${x.objectId}`}><img src={x.imgUrl} alt="" /></Link>
                            <p>{x.name}</p>
                        </div>
                    )}
                </div>

                <p className={styles['prev']} onClick={() => onChoose("prev")}>&#10094;</p>
                <p className={styles['next']} onClick={() => onChoose("next")}>&#10095;</p>
            </div>
            <br />


            <div className={styles['dot-container']}>
                <span className={`${styles['dot']} ${activeDot === 0 && styles['active']}`} onClick={() => onChoose(0)}></span>
                <span className={`${styles['dot']} ${activeDot === 3 && styles['active']}`} onClick={() => onChoose(3)}></span>
                <span className={`${styles['dot']} ${activeDot === 6 && styles['active']}`} onClick={() => onChoose(6)}></span>
            </div>
        </div>
    );
}