import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './style/Product.module.css';

export function Product({
    products,
    gender,
    params,
    valueSize,
    valuePrice,
    categoryType,
    itemsPerPage,
    offset,
    setPageCount
}) {

    const [currentItems, setCurrentItems] = useState([]);

    const filterList = useCallback((current) => {

        if (valuePrice !== "all") {

            if (valuePrice === "Under 100") {

                return current.price < 100;

            } else if (valuePrice === "100 - 200") {

                return current.price > 100 && current.price <= 200;

            } else if (valuePrice === "200 - 300") {

                return current.price > 200 && current.price <= 300;

            } else if (valuePrice === "Over 300") {

                return current.price > 300;
            }
        } else {

            return true;
        }
    }, [valuePrice])

    useEffect(() => {

        params === 'men' || params === 'women' ?

            setCurrentItems(products
                .filter(x => x.gender === params && (categoryType !== "all" ? x.type === categoryType : x) && (valueSize !== "all" ? x.size.includes(valueSize) : x) && filterList(x)))
            :
            setCurrentItems(products
                .filter(x => x.name.toLowerCase().includes(params.split('-')[1].toLowerCase()))
                .filter(x => gender !== null ? x.gender === gender : x));
                
        setPageCount(Math.ceil(currentItems.length / itemsPerPage));
    }, [categoryType, currentItems.length, gender, itemsPerPage, offset, params, products, setPageCount, valueSize, filterList]);

    return (

        params === 'men' || params === 'women' ?

        currentItems.slice(offset, offset + itemsPerPage).map(x => (
                <div key={x.objectId} className={styles['catalog-current']}>
                    <Link to={"details/" + x.objectId}>
                        <img className={styles['product-image']} src={x.imgUrl} alt="product" />
                    </Link>
                    <div>
                        <Link to={"details/" + x.objectId} className={styles['catalog-product-name']}>{x.name}</Link>
                    </div>
                    <div >
                        <span>${x.price}</span>
                    </div>
                    <div className={styles['ava-size']}>
                        Available sizes: {x.size.join(', ')}
                    </div>
                </div>
            ))
            :

            currentItems.slice(offset, offset + itemsPerPage).map(x => (
                    <div key={x.objectId} className={styles['catalog-current']}>
                        <Link to={"details/" + x.objectId}>
                            <img className={styles['product-image']} src={x.imgUrl} alt="product" />
                        </Link>
                        <div>
                            <Link to={"details/" + x.objectId} className={styles['catalog-product-name']}>{x.name}</Link>
                        </div>
                        <div >
                            <span>${x.price}</span>
                        </div>
                        <div className={styles['ava-size']}>
                            Available sizes: {x.size.join(', ')}
                        </div>
                    </div>
                ))

    );
}