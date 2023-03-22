import { useEffect, useState } from 'react';
import { Product } from './Product/Product';
import styles from './Catalog.module.css';
import { useParams } from 'react-router-dom';
import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import ReactPaginate from 'react-paginate';
import { get } from '../../services/api';

export function Catalog() {

    const [products, setProducts] = useState([]);
    const [valuePrice, setValuePrice] = useState("all");
    const [valueSize, setValueSize] = useState("all");
    const [categoryType, setCategoryType] = useState("all");
    const [gender, setGender] = useState(null);
    const { params } = useParams();
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [sortCreteria, setSortCriteria] = useState("");
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    let bannerSrc = "";

    if (params === 'men') {

        bannerSrc = "https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/BANNER-MENS-CLOTHING_outope.jpg";

    } else if (params === 'women') {

        bannerSrc = "https://res.cloudinary.com/diby8tbnn/image/upload/v1677854615/banner-home-alexinternational-WOMENS-CLOTHING_gmxjbn.jpg"
    }

    useEffect(() => {

        async function fetchData() {

            const response = await get('classes/Products');
            setProducts(response.results);
        }
        fetchData();

        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [products.length, itemsPerPage]);

    const onPageSelect = (event) => {

        setOffset(event.selected * itemsPerPage % products.length);
    }

    const onItemsPerPageChange = (e) => {

        setItemsPerPage(Number(e.target.value))
    }

    const onSortChange = (e) => {

        setSortCriteria(e.target.value);
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

            <section className={styles['sort-section']}>
                <div className={styles['sort-type']}>
                    <label>Products per page: </label>
                    <select className={styles['select-items-per-page']} onChange={(e) => onItemsPerPageChange(e)}>
                        <option value="6" name="itemsPerPage" >6</option>
                        <option value="9" name="itemsPerPage" >9</option>
                    </select>
                </div>

                <div className={styles['sort-type']}>
                    <label>Sort by: </label>
                    <select className={styles['select-sort-page']} onChange={(e) => onSortChange(e)}>
                        <option value="" name="itemsPerPage" > -- Select -- </option>
                        <option value="A - Z" name="itemsPerPage" >A - Z</option>
                        <option value="Z - A" name="itemsPerPage" >Z - A</option>
                        <option value="Price Low to High" name="itemsPerPage" >Price Low to High</option>
                        <option value="Price High to Low" name="itemsPerPage" >Price High to Low</option>
                        <option value="Newest" name="itemsPerPage" >Newest</option>
                    </select>
                </div>
            </section>

            <div className={styles['flex-container']}>

                <CatalogSidebar valuePrice={valuePrice} setValuePrice={setValuePrice} valueSize={valueSize} setValueSize={setValueSize} categoryType={categoryType} setCategoryType={setCategoryType} gender={gender} setGender={setGender} />

                <div className={styles['catalog-flex']}>
                    <Product sortCreteria={sortCreteria} setPageCount={setPageCount} offset={offset} itemsPerPage={itemsPerPage} products={products} gender={gender} params={params} valueSize={valueSize} valuePrice={valuePrice} categoryType={categoryType} />
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