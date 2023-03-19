import { useEffect, useState } from 'react';
import { Product } from './Product';
import styles from './style/Catalog.module.css';
import { useParams } from 'react-router-dom';
import { CatalogSidebar } from './CatalogSidebar';
import ReactPaginate from 'react-paginate';

export function Catalog() {

    const [products, setProducts] = useState([]);
    const [valuePrice, setValuePrice] = useState("all");
    const [valueSize, setValueSize] = useState("all");
    const [categoryType, setCategoryType] = useState("all");
    const [gender, setGender] = useState(null);
    const { params } = useParams();
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    let bannerSrc = "";

    if (params === 'men') {

        bannerSrc = "https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/BANNER-MENS-CLOTHING_outope.jpg";

    } else if (params === 'women') {

        bannerSrc = "https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/banner-home-alexinternational-WOMENS-CLOTHING_gmxjbn.jpg"
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

        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [products.length, itemsPerPage]);

    const onPageSelect = (event) => {

        setOffset(event.selected * itemsPerPage % products.length);
    }

    const onItemsPerPageChange = (e) => {

        setItemsPerPage(Number(e.target.value))
    }

    return (
        <>
            {(params === 'men' || params === 'women') &&

                <div className={styles['collection-header']}>
                    <div className={styles['collection-hero']}>
                        <div className={styles['collection-hero-img-container']}><img className={styles['collection-hero-image']}
                            src={bannerSrc} alt="" /></div>
                    </div>
                </div>}

            <section className={styles['items-per-page']}>
                <label>Products per page: </label>
                <select className={styles['select-items-per-page']} onChange={(e) => onItemsPerPageChange(e)}>
                    <option value="6" name="itemsPerPage" >6</option>
                    <option value="9" name="itemsPerPage" >9</option>
                </select>
            </section>

            <div className={styles['flex-container']}>

                <CatalogSidebar valuePrice={valuePrice} setValuePrice={setValuePrice} valueSize={valueSize} setValueSize={setValueSize} categoryType={categoryType} setCategoryType={setCategoryType} gender={gender} setGender={setGender} />

                <div className={styles['catalog-flex']}>
                    <Product setPageCount={setPageCount} offset={offset} itemsPerPage={itemsPerPage} products={products} gender={gender} params={params} valueSize={valueSize} valuePrice={valuePrice} categoryType={categoryType} />
                </div>
            </div>

            <div className={styles['pagination']}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={onPageSelect}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                />
            </div>
        </>
    );
}