import { useEffect, useState } from 'react';
import { Categories } from './Categories';
import { Product } from './Product';
import styles from './style/Catalog.module.css';

export function Catalog() {

    const gender = "Female";  //just for test
    let bannerSrc = "";
    gender === "Male" ? bannerSrc="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/BANNER-MENS-CLOTHING_outope.jpg" : bannerSrc="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/banner-home-alexinternational-WOMENS-CLOTHING_gmxjbn.jpg"

    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://parseapi.back4app.com/classes/Products', 
        {
            headers: {
                "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                "X-Parse-REST-API-Key" : "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU"
            }
        })
        .then(x => x.json())
        .then(x => setProducts(x.results))
    }, []);

    return (
        <>
            <div className={styles['collection-header']}>
                <div className={styles['collection-hero']}>
                    <div className={styles['collection-hero-img-container']}><img className={styles['collection-hero-image']}
                    src={bannerSrc} /></div>
                </div>
            </div>

            <div className={styles['grid-container']}>

                <div className={styles['catalog-sidebar']}>
                    <div>
                        <h2 className={styles['sidebar-h2']}> Categories</h2>
                    </div>
                    <div>
                        <ul className={styles['sidebar-ul']}>
                            <Categories products={products} gender={gender}/>
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles['sidebar-h2']}>Size</h2>
                    </div>
                    <div>
                        <ul className={styles['sidebar-ul']}>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>XS</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>S</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>M</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>L</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>XL</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>XXL</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles['sidebar-h2']}>Price</h2>
                    </div>
                    <div>
                        <ul className={styles['sidebar-ul']}>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>under 100</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>101 - 200</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>201 - 300</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>over 300</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles['catalog-grid']}>
                    <Product products={products} gender={gender}/>
                </div>    
            </div>

            <div className={styles['pagination']}>
                <ul className={styles['pagination-ul']}>
                    <li className={styles['pagination-li']}><a className={styles['pagination-a']} href="#">1</a></li>
                    <li className={styles['pagination-li']}><a className={styles['pagination-a']} href="#">2</a></li>
                </ul>
            </div>
        </>
    );
}