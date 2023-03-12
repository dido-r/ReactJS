import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Modal } from './Modal';
import styles from './style/Details.module.css';

export function Details(
    {
        setBasket,
        basket
    }
) {

    const [modal, setModal] = useState(false);
    const [details, setDetails] = useState(false);
    const [sizeChart, setSizeChart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const [currentItem, setCurrentItem] = useState({ size: [] });
    const { itemId } = useParams();


    const onAddToCard = () => {
        
        if(selectedSize === ""){
            alert("Please select a size");
            return;
        }
        
        let isOrdered = basket.find(x => x.currentItem.objectId === itemId);

        if (isOrdered !== undefined && isOrdered.selectedSize === selectedSize) {

            setBasket(x => x.map(z => z.currentItem.objectId === itemId ? {
                ...z,
                quantity: z.quantity + quantity
            } : z))

        } else {

            setBasket(x => [...x, {
                currentItem,
                quantity,
                selectedSize
            }])
        }
        setModal(true);
    }

    function showSizeChart() {
        setSizeChart(!sizeChart);
    }

    function showMoreDetails() {
        setDetails(!details);
    }

    function increaseQty() {
        setQuantity(quantity + 1);
    }

    function decreaseQty() {
        setQuantity(quantity === 1 ? 1 : quantity - 1);
    }

    const onSizeSelect = (e) => {
        setSelectedSize(e.target.value);
    }


    useEffect(() => {

        fetch(`https://parseapi.back4app.com/classes/Products?where=%7B%20%22objectId%22%3A%20%22${itemId}%22%7D`,
            {
                headers: {
                    "X-Parse-Application-Id": "mWelAz1zpW0lQMPIwD8xQs7BUgy1YhWGy1Zt8wB1",
                    "X-Parse-REST-API-Key": "iS3NuKzNfFCSnW8T1htlC4wvsgFm0vYgBbnrOTdU"
                }
            })
            .then(x => x.json())
            .then(x => setCurrentItem(...x.results))
    }, [itemId]);


    return (

        <div className={styles['product-template-container']}>
            {modal && <Modal modal={modal} setModal={setModal} />}

            <div className={styles['img-container']}>
                <img className={styles['product-image']} src={currentItem.imgUrl} alt=""/>
            </div>

            <div className={styles['product-details']}>
                <h2 className={styles['product-name']}>{currentItem.name}</h2>
                <p className={styles['product-price']}>${currentItem.price}</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of
                    type and scrambled it to make a type specimen book.</p>

                <form>
                    <div className={styles['product-size']} >
                        {currentItem.size.map(x =>
                            <div key={x} className={styles['swatch-element']}>
                                <label style={selectedSize === x ? { border: "1px solid" } : { border: "none" }} htmlFor={x} className={styles['product-form-label']}>{x}<input className={styles['swatch-input']} id={x} type='radio' name="option-size"
                                    value={x} onChange={onSizeSelect}/></label>
                            </div>
                        )}
                    </div>
                    <div className={styles['wrapQtyBtn']}>
                        <div className={styles['qtyField']}>
                            <Link className={styles['qtyBtn']} onClick={() => decreaseQty()}><i className={styles['fa']} aria-hidden="true">-</i></Link>
                            <input type="text" id="Quantity" name="quantity" value={quantity} className={styles['qty']} onChange={() => { }} />
                            <Link className={styles['qtyBtn']} onClick={() => increaseQty()}><i className={styles['fa']} aria-hidden="true">+</i></Link>
                        </div>
                    </div>
                    <div className={styles['product-form-item-submit']}>
                        <button type="button" name="add" className={styles['product-form-item-submit-btn']} onClick={onAddToCard}>Add to cart</button>
                    </div>
                </form>
                <div className={styles['tab-container']}>
                    <p className={styles['acor-ttl']} onClick={() => showMoreDetails()}>Product
                        Details</p>
                    {details && (<div id="tab1" className={styles['hid-div']}>
                        <div>
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
                    </div>)}
                </div>
                <p className={styles['acor-ttl']} onClick={() => showSizeChart()}>Size Chart</p>
                {sizeChart && (<div id="tab2" className={styles['hid-div']}>
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
                </div>)}
            </div>
        </div>
    );
}