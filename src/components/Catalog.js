import { useEffect, useState } from 'react';
import { Product } from './Product';
import styles from './style/Catalog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';

export function Catalog() {

    const {gender} = useParams();
    let bannerSrc = "";
    gender === "men" ? bannerSrc = "https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/BANNER-MENS-CLOTHING_outope.jpg" : bannerSrc = "https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/banner-home-alexinternational-WOMENS-CLOTHING_gmxjbn.jpg"

    const [products, setProducts] = useState([]);
    const [valuePrice, setValuePrice] = useState("all");
    const [valueSize, setValueSize] = useState("all");
    const [categoryType, setCategoryType] = useState("all");

    const onChangeOfCategory = (e) => {
        setCategoryType(e.target.value);
    }

    const onChangeOfPrice = (e) => {
        setValuePrice(e.target.value);
    }

    const onChangeOfSize = (e) => {
        setValueSize(e.target.value);
    }

    const onClearCategory = () => {
        setCategoryType("all");
    }

    const onClearSize = () => {
        setValueSize("all");
    }

    const onClearPrice = () => {
        setValuePrice("all");
    }

    const onClearAll = () => {
        setCategoryType("all");
        setValueSize("all");
        setValuePrice("all");
    }

    useEffect(() => {
        fetch('https://parseapi.back4app.com/classes/Products',
            {
                headers: {
                    "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                    "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU"
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
                        src={bannerSrc} alt=""/></div>
                </div>
            </div>

            <div className={styles['flex-container']}>

                <div className={styles['catalog-sidebar']}>
                    <div>
                        {categoryType !== "all" && <span className={styles['inline-remove']}><FontAwesomeIcon className={styles['inline-icon']} icon={faXmark} /><button className={styles['clear-filter-btn']} onClick={onClearCategory}>{categoryType}</button></span>}
                        {valueSize !== "all" && <span className={styles['inline-remove']}><FontAwesomeIcon className={styles['inline-icon']} icon={faXmark} /><button className={styles['clear-filter-btn']} onClick={onClearSize}>{valueSize}</button></span>}
                        {valuePrice !== "all" && <span className={styles['inline-remove']}><FontAwesomeIcon className={styles['inline-icon']} icon={faXmark} /><button className={styles['clear-filter-btn']} onClick={onClearPrice}>{valuePrice}</button></span>}
                        {(valueSize !== "all" || valuePrice !== "all" || categoryType !== "all") && <button className={styles['clear-filter-btn']} onClick={onClearAll}>Clear All</button>}
                    </div>
                    <div>
                        <h2 className={styles['sidebar-h2']}> Categories</h2>
                    </div>
                    <div className={styles['form-container']}>
                        {
                            gender === "men" ?
                                <form>
                                    <div><label htmlFor="Jackets"><input id="Jackets" name="category" type="radio" checked={categoryType === "Jackets"} value="Jackets" onChange={onChangeOfCategory} />Jackets</label></div>
                                    <div><label htmlFor="Hoodies"><input id="Hoodies" name="category" type="radio" checked={categoryType === "Hoodies"} value="Hoodies" onChange={onChangeOfCategory} />Hoodies</label></div>
                                    <div><label htmlFor="Shirts"><input id="Shirts" name="category" type="radio" checked={categoryType === "Shirts"} value="Shirts" onChange={onChangeOfCategory} />Shirts</label></div>
                                    <div><label htmlFor="T-shirts"><input id="T-shirts" name="category" type="radio" checked={categoryType === "T-shirts"} value="T-shirts" onChange={onChangeOfCategory} />T-shirts</label></div>
                                    <div><label htmlFor="Jeans"><input id="Jeans" name="category" type="radio" checked={categoryType === "Jeans"} value="Jeans" onChange={onChangeOfCategory} />Jeans</label></div>

                                </form>
                                :
                                <form>
                                    <div><label htmlFor="Jackets"><input id="Jackets" name="category" type="radio" checked={categoryType === "Jackets"} value="Jackets" onChange={onChangeOfCategory} />Jackets</label></div>
                                    <div><label htmlFor="Shirts"><input id="Shirts" name="category" type="radio" checked={categoryType === "Shirts"} value="Shirts" onChange={onChangeOfCategory} />Shirts</label></div>
                                    <div><label htmlFor="Dresses"><input id="Dresses" name="category" type="radio" checked={categoryType === "Dresses"} value="Dresses" onChange={onChangeOfCategory} />Dresses</label></div>
                                    <div><label htmlFor="Jeans"><input id="Jeans" name="category" type="radio" checked={categoryType === "Jeans"} value="Jeans" onChange={onChangeOfCategory} />Jeans</label></div>
                                </form>
                        }
                    </div>
                    <div>
                        <h2 className={styles['sidebar-h2']}>Size</h2>
                    </div>
                    <div className={styles['form-container']}>
                        <form>
                            <div><label htmlFor="XS"><input id="XS" name="price" type="radio" value={"XS"} checked={valueSize === "XS"} onChange={onChangeOfSize} />XS</label></div>
                            <div><label htmlFor="S"><input id="S" name="price" type="radio" value={"S"} checked={valueSize === "S"} onChange={onChangeOfSize} />S</label></div>
                            <div><label htmlFor="M"><input id="M" name="price" type="radio" value={"M"} checked={valueSize === "M"} onChange={onChangeOfSize} />M</label></div>
                            <div><label htmlFor="L"><input id="L" name="price" type="radio" value={"L"} checked={valueSize === "L"} onChange={onChangeOfSize} />L</label></div>
                            <div><label htmlFor="XL"><input id="XL" name="price" type="radio" value={"XL"} checked={valueSize === "XL"} onChange={onChangeOfSize} />XL</label></div>
                            <div><label htmlFor="XXL"><input id="XXL" name="price" type="radio" value={"XXL"} checked={valueSize === "XXL"} onChange={onChangeOfSize} />XXL</label></div>
                        </form>
                    </div>
                    <div>
                        <h2 className={styles['sidebar-h2']}>Price</h2>
                    </div>
                    <div className={styles['form-container']}>
                        <form>
                            <div><label htmlFor="option1"><input id="option1" name="price" type="radio" value={"Under 100"} checked={valuePrice === "Under 100"} onChange={onChangeOfPrice} />under 100</label></div>
                            <div><label htmlFor="option2"><input id="option2" name="price" type="radio" value={"100 - 200"} checked={valuePrice === "100 - 200"} onChange={onChangeOfPrice} />100 - 200</label></div>
                            <div><label htmlFor="option3"><input id="option3" name="price" type="radio" value={"200 - 300"} checked={valuePrice === "200 - 300"} onChange={onChangeOfPrice} />200 - 300</label></div>
                            <div><label htmlFor="option4"><input id="option4" name="price" type="radio" value={"Over 300"} checked={valuePrice === "Over 300"} onChange={onChangeOfPrice} />over 300</label></div>
                        </form>
                    </div>
                </div>

                <div className={styles['catalog-flex']}>
                    <Product products={products} gender={gender} valueSize={valueSize} valuePrice={valuePrice} categoryType={categoryType} />
                </div>
            </div>

            <div className={styles['pagination']}>
                <ul className={styles['pagination-ul']}>
                    <li className={styles['pagination-li']}><Link className={styles['pagination-a']}>1</Link></li>
                    <li className={styles['pagination-li']}><Link className={styles['pagination-a']}>2</Link></li>
                </ul>
            </div>
        </>
    );
}