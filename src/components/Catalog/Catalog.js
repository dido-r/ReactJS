import { useEffect, useState } from 'react';
import { Product } from './Product/Product';
import styles from './Catalog.module.css';
import { useParams } from 'react-router-dom';
import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import ReactPaginate from 'react-paginate';
import { get } from '../../services/api';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import { Banner } from './Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Modal } from '../Modal/Modal';

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
    const [isLoading, setIsloading] = useState(true);
    const [modal, setModal] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                setShowButton(true);

            } else {

                setShowButton(false);
            }
        });
    }, []);

    useEffect(() => {

        setOffset(0);

    }, [params]);

    useEffect(() => {

        async function fetchData() {

            try {

                const response = await get('classes/Products');
                setProducts(response.results);
                setIsloading(false)

            } catch {

                setModal(true);
                return;
            }
        }
        fetchData();

        setPageCount(Math.ceil(products.length / itemsPerPage));

    }, [products.length, itemsPerPage]);

    const onPageSelect = (event) => {

        setOffset(event.selected * itemsPerPage % products.length);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const onItemsPerPageChange = (e) => {

        setItemsPerPage(Number(e.target.value))
    }

    const onSortChange = (e) => {

        setSortCriteria(e.target.value);
    }

    return (
        <>
            {modal && <Modal setModal={setModal} message={'Could not load the catalog. Please try again later or contact support.'} />}
            {(params === 'men' || params === 'women') &&

                <Banner params={params} />}

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
                    {isLoading ? <LoadingSpinner /> :
                        <Product sortCreteria={sortCreteria} setPageCount={setPageCount} offset={offset} itemsPerPage={itemsPerPage} products={products} gender={gender} params={params} valueSize={valueSize} valuePrice={valuePrice} categoryType={categoryType} />}
                </div>
            </div>

            <FontAwesomeIcon className={`${styles['arrow-top']} ${!showButton ? styles['arrow-disabled'] : styles['']}`} icon={faArrowUp} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }} />

            <div className={styles['pagination']}>
                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={onPageSelect}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
            </div>
        </>
    );
}