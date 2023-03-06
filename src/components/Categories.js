import styles from './style/Catalog.module.css';

export function Categories({
    products,
    gender
}) {

    let result = products.filter(z => z.gender === gender).map(x => x.type);
    let final = [...new Set(result)]

    return final.map(x => (
        <li className={styles['sidebar-li']}><a href="#;" className={styles['sidebar-a']}><input type={'checkbox'} disabled={true}/>{x}</a></li>
    ));
}