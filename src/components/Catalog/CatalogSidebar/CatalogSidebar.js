import styles from './CatalogSidebar.module.css';
import { useParams } from 'react-router-dom';

export function CatalogSidebar({
    valuePrice,
    setValuePrice,
    valueSize,
    setValueSize,
    categoryType,
    setCategoryType,
    gender,
    setGender
}) {

    const { params } = useParams();

    const onChangeOfCategory = (e) => {
        setCategoryType(e.target.value);
    }

    const onChangeOfGender = (e) => {
        setGender(e.target.value);
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

    const onClearGender = () => {
        setGender(null);
    }

    const onClearAll = () => {
        setCategoryType("all");
        setValueSize("all");
        setValuePrice("all");
        setGender(null);
    }

    return (

        <div className={styles['catalog-sidebar']}>
            <div>
                {categoryType !== "all" && <span className={styles['inline-remove']}><button className={styles['clear-filter-btn']} onClick={onClearCategory}>x - {categoryType}</button></span>}
                {valueSize !== "all" && <span className={styles['inline-remove']}><button className={styles['clear-filter-btn']} onClick={onClearSize}>x - {valueSize}</button></span>}
                {valuePrice !== "all" && <span className={styles['inline-remove']}><button className={styles['clear-filter-btn']} onClick={onClearPrice}>x - {valuePrice}</button></span>}
                {gender !== null && <span className={styles['inline-remove']}><button className={styles['clear-filter-btn']} onClick={onClearGender}>x - {gender}</button></span>}
                {(valueSize !== "all" || valuePrice !== "all" || categoryType !== "all" || gender !== null) && <button className={styles['clear-filter-btn']} onClick={onClearAll}>Clear All</button>}
            </div>

            {(params !== 'men' && params !== 'women') &&
                <>
                    <div>
                        <h2 className={styles['sidebar-h2']}> Gender</h2>
                    </div >
                    <div className={styles['form-container']}>
                        <form>
                            <div><label htmlFor="Male"><input id="Male" name="gender" type="radio" value={"men"} checked={gender === "men"} onChange={onChangeOfGender} />Male</label></div>
                            <div><label htmlFor="Female"><input id="Female" name="gender" type="radio" value={"women"} checked={gender === "women"} onChange={onChangeOfGender} />Female</label></div>
                        </form>
                    </div>
                </>
            }

            {(gender !== null || (params === 'men' || params === 'women')) && 

                <>
                    <div>
                        <h2 className={styles['sidebar-h2']}> Categories</h2>
                    </div>
                    <div className={styles['form-container']}>
                        {
                            (params === "men" || gender === 'men') &&
                            <form>
                                <div><label htmlFor="Jackets"><input id="Jackets" name="category" type="radio" checked={categoryType === "Jackets"} value="Jackets" onChange={onChangeOfCategory} />Jackets</label></div>
                                <div><label htmlFor="Hoodies"><input id="Hoodies" name="category" type="radio" checked={categoryType === "Hoodies"} value="Hoodies" onChange={onChangeOfCategory} />Hoodies</label></div>
                                <div><label htmlFor="Shirts"><input id="Shirts" name="category" type="radio" checked={categoryType === "Shirts"} value="Shirts" onChange={onChangeOfCategory} />Shirts</label></div>
                                <div><label htmlFor="T-shirts"><input id="T-shirts" name="category" type="radio" checked={categoryType === "T-shirts"} value="T-shirts" onChange={onChangeOfCategory} />T-shirts</label></div>
                                <div><label htmlFor="Jeans"><input id="Jeans" name="category" type="radio" checked={categoryType === "Jeans"} value="Jeans" onChange={onChangeOfCategory} />Jeans</label></div>

                            </form>}
                        {(params === "women" || gender === 'women') &&
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
                            <div><label htmlFor="XS"><input id="XS" name="size" type="radio" value={"XS"} checked={valueSize === "XS"} onChange={onChangeOfSize} />XS</label></div>
                            <div><label htmlFor="S"><input id="S" name="size" type="radio" value={"S"} checked={valueSize === "S"} onChange={onChangeOfSize} />S</label></div>
                            <div><label htmlFor="M"><input id="M" name="size" type="radio" value={"M"} checked={valueSize === "M"} onChange={onChangeOfSize} />M</label></div>
                            <div><label htmlFor="L"><input id="L" name="size" type="radio" value={"L"} checked={valueSize === "L"} onChange={onChangeOfSize} />L</label></div>
                            <div><label htmlFor="XL"><input id="XL" name="size" type="radio" value={"XL"} checked={valueSize === "XL"} onChange={onChangeOfSize} />XL</label></div>
                            <div><label htmlFor="XXL"><input id="XXL" name="size" type="radio" value={"XXL"} checked={valueSize === "XXL"} onChange={onChangeOfSize} />XXL</label></div>
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
                </>

            }

        </div>)
}