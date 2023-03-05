import styles from './style/Details.module.css';

export function Details() {

    function showSizeChart() {
        let el = document.getElementById("tab2");
        el.style.height === "" ? el.style.height = "180px" : el.style.height = "";
    }

    function showMoreDetails() {
        let el = document.getElementById("tab1");
        el.style.height === "" ? el.style.height = "180px" : el.style.height = "";
    }

    function increaseQty() {
        let quantity = document.getElementById("Quantity");
        quantity.value = Number(quantity.value) + 1;
    }

    function decreaseQty() {
        let quantity = document.getElementById("Quantity");
        quantity.value === "1" ? quantity.value = "1" : quantity.value = Number(quantity.value) - 1;
    }


    return (

        <div className={styles['product-template-container']}>

            <div className={styles['product-image']}>
                <img src="https://res.cloudinary.com/diby8tbnn/image/upload/v1677854614/collection2_vajifd.jpg" />
            </div>

            <div className={styles['product-details']}>
                <h2 className={styles['product-name']}>Product Name</h2>
                <p className={styles['product-price']}>$788.00</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of
                    type and scrambled it to make a type specimen book.</p>
                <form >
                    <div className={styles['product-size']}>
                        <div data-value="XS" className={styles['swatch-element']}>
                            <input className={styles['swatch-input']} id="swatch-1-xs" type="radio" name="option-1"
                                value="XS" />
                            <label className={styles['product-form-label']} for="swatch-1-xs" title="XS">XS</label>
                        </div>
                        <div data-value="S" className={styles['swatch-element']}>
                            <input className={styles['swatch-input']} id="swatch-1-s" type="radio" name="option-1"
                                value="S" />
                            <label className={styles['product-form-label']} for="swatch-1-s" title="S">S</label>
                        </div>
                        <div data-value="M" className={styles['swatch-element']}>
                            <input className={styles['swatch-input']} id="swatch-1-m" type="radio" name="option-1"
                                value="M" />
                            <label className={styles['product-form-label']} for="swatch-1-m" title="M">M</label>
                        </div>
                    </div>
                    <div className={styles['wrapQtyBtn']}>
                        <div className={styles['qtyField']}>
                            <a className={styles['qtyBtn']} onClick={() => decreaseQty()} href="#"><i className={styles['fa']} aria-hidden="true">-</i></a>
                            <input type="text" id="Quantity" name="quantity" value="1" className={styles['qty']} />
                            <a className={styles['qtyBtn']} onClick={() => increaseQty()} href="#"><i className={styles['fa']} aria-hidden="true">+</i></a>
                        </div>
                    </div>
                    <div className={styles['product-form-item-submit']}>
                        <button type="button" name="add" className={styles['product-form-item-submit-btn']}>Add to cart</button>
                    </div>
                </form>
                <div className={styles['tab-container']}>
                    <p className={styles['acor-ttl']} onClick={() => showMoreDetails()}>Product
                        Details</p>
                    <div id="tab1" className={styles['hid-div']}>
                        <div class="product-description rte">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has
                                survived not only five
                                centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged.</p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                                <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
                                <li>Lorem Ipsum is not simply random text.</li>
                                <li>Lorem</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className={styles['acor-ttl']} onClick={() => showSizeChart()}>Size Chart</p>
                <div id="tab2" className={styles['hid-div']}>
                    <table className={styles['size-chart']}>
                        <tbody>
                            <tr>
                                <th className={styles['size-chart-row']}>Size</th>
                                <th className={styles['size-chart-row']}>XS</th>
                                <th className={styles['size-chart-row']}>S</th>
                                <th className={styles['size-chart-row']}>M</th>
                                <th className={styles['size-chart-row']}>L</th>
                                <th className={styles['size-chart-row']}>XL</th>
                            </tr>
                            <tr>
                                <td className={styles['size-chart-cell']}>Chest</td>
                                <td className={styles['size-chart-cell']}>31" - 33"</td>
                                <td className={styles['size-chart-cell']}>33" - 35"</td>
                                <td className={styles['size-chart-cell']}>35" - 37"</td>
                                <td className={styles['size-chart-cell']}>37" - 39"</td>
                                <td className={styles['size-chart-cell']}>39" - 42"</td>
                            </tr>
                            <tr>
                                <td className={styles['size-chart-cell']}>Waist</td>
                                <td className={styles['size-chart-cell']}>24" - 26"</td>
                                <td className={styles['size-chart-cell']}>26" - 28"</td>
                                <td className={styles['size-chart-cell']}>28" - 30"</td>
                                <td className={styles['size-chart-cell']}>30" - 32"</td>
                                <td className={styles['size-chart-cell']}>32" - 35"</td>
                            </tr>
                            <tr>
                                <td className={styles['size-chart-cell']}>Hip</td>
                                <td className={styles['size-chart-cell']}>34" - 36"</td>
                                <td className={styles['size-chart-cell']}>36" - 38"</td>
                                <td className={styles['size-chart-cell']}>38" - 40"</td>
                                <td className={styles['size-chart-cell']}>40" - 42"</td>
                                <td className={styles['size-chart-cell']}>42" - 44"</td>
                            </tr>
                            <tr>
                                <td className={styles['size-chart-cell']}>Regular inseam</td>
                                <td className={styles['size-chart-cell']}>30"</td>
                                <td className={styles['size-chart-cell']}>30½"</td>
                                <td className={styles['size-chart-cell']}>31"</td>
                                <td className={styles['size-chart-cell']}>31½"</td>
                                <td className={styles['size-chart-cell']}>32"</td>
                            </tr>
                            <tr>
                                <td className={styles['size-chart-cell']}>Long (Tall) Inseam</td>
                                <td className={styles['size-chart-cell']}>31½"</td>
                                <td className={styles['size-chart-cell']}>32"</td>
                                <td className={styles['size-chart-cell']}>32½"</td>
                                <td className={styles['size-chart-cell']}>33"</td>
                                <td className={styles['size-chart-cell']}>33½"</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}