import styles from './style/Catalog.module.css';

export function CatalogMan() {

    return (
        <>
            <div className={styles['collection-header']}>
                <div className={styles['collection-hero']}>
                    <div className={styles['collection-hero-img-container']}><img className={styles['collection-hero-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/BANNER-MENS-CLOTHING_outope.jpg" /></div>
                </div>
            </div>

            <div className={styles['grid-container']}>

                <div className={styles['catalog-sidebar']}>
                    <div>
                        <h2 className={styles['sidebar-h2']}> Categories</h2>
                    </div>
                    <div>
                        <ul className={styles['sidebar-ul']}>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>Jackets</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>Hoodies</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>Shirts</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>T-shirts</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>Jeans</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>Shoes</a></li>
                            <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>Accessories</a></li>
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
                    <div className={styles['catalog-current']}>
                        <a href="#">
                            <img className={styles['product-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/collection1_p42ew6.jpg" />
                        </a>
                        <div>
                            <a href="#" className={styles['catalog-product-name']}>Man clothing</a>
                        </div>
                        <div >
                            <span className="price">$600.00</span>
                        </div>
                    </div>

                    <div className={styles['catalog-current']}>
                        <a href="#">
                            <img className={styles['product-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/collection1_p42ew6.jpg" />
                        </a>
                        <div>
                            <a href="#" className={styles['catalog-product-name']}>Man clothing</a>
                        </div>
                        <div >
                            <span className="price">$600.00</span>
                        </div>
                    </div>
                    <div className={styles['catalog-current']}>
                        <a href="#">
                            <img className={styles['product-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/collection1_p42ew6.jpg" />
                        </a>
                        <div>
                            <a href="#" className={styles['catalog-product-name']}>Man clothing</a>
                        </div>
                        <div >
                            <span className="price">$600.00</span>
                        </div>
                    </div>
                    <div className={styles['catalog-current']}>
                        <a href="#">
                            <img className={styles['product-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/collection1_p42ew6.jpg" />
                        </a>
                        <div>
                            <a href="#" className={styles['catalog-product-name']}>Man clothing</a>
                        </div>
                        <div >
                            <span className="price">$600.00</span>
                        </div>
                    </div>
                    <div className={styles['catalog-current']}>
                        <a href="#">
                            <img className={styles['product-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/collection1_p42ew6.jpg" />
                        </a>
                        <div>
                            <a href="#" className={styles['catalog-product-name']}>Man clothing</a>
                        </div>
                        <div >
                            <span className="price">$600.00</span>
                        </div>
                    </div>
                    <div className={styles['catalog-current']}>
                        <a href="#">
                            <img className={styles['product-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/collection1_p42ew6.jpg" />
                        </a>
                        <div>
                            <a href="#" className={styles['catalog-product-name']}>Man clothing</a>
                        </div>
                        <div >
                            <span className="price">$600.00</span>
                        </div>
                    </div>
                    <div className={styles['catalog-current']}>
                        <a href="#">
                            <img className={styles['product-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/collection1_p42ew6.jpg" />
                        </a>
                        <div>
                            <a href="#" className={styles['catalog-product-name']}>Man clothing</a>
                        </div>
                        <div >
                            <span className="price">$600.00</span>
                        </div>
                    </div>
                    <div className={styles['catalog-current']}>
                        <a href="#">
                            <img className={styles['product-image']} src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/collection1_p42ew6.jpg" />
                        </a>
                        <div>
                            <a href="#" className={styles['catalog-product-name']}>Man clothing</a>
                        </div>
                        <div >
                            <span className="price">$600.00</span>
                        </div>
                    </div>
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