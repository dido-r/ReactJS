import styles from './style/Product.module.css';

export function Product({
    products,
    gender,
    valueSize,
    valuePrice,
    categoryType
}) {

    const filterList = (current) => {

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
    }

    return (

        products.filter(x => x.gender === gender && (categoryType !== "all" ? x.type === categoryType : x) && (valueSize !== "all" ? x.size.includes(valueSize) : x) && filterList(x)).map(x => (
            <div key={x.objectId} className={styles['catalog-current']}>
                <a href="#">
                    <img className={styles['product-image']} src={x.imgUrl} />
                </a>
                <div>
                    <a href="#" className={styles['catalog-product-name']}>{x.name}</a>
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