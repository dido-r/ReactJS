import styles from './style/Catalog.module.css';

export function Product({
    products,
    gender
}) {
    return (
        
        products.filter(z => z.gender === gender).map(x => (
            
            <div key={x.objectId} className={styles['catalog-current']}>
                <a href="#">
                    <img className={styles['product-image']} src={x.imgUrl} />
                </a>
                <div>
                    <a href="#" className={styles['catalog-product-name']}>{x.name}</a>
                </div>
                <div >
                    <span className="price">${x.price}</span>
                </div>
            </div>
        ))
    );
}