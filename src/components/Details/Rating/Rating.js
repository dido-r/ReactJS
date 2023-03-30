import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import styles from './Rating.module.css'
import { useForm } from '../../../hooks/useForm'
import { post, get } from '../../../services/api';
import { useEffect, useState } from 'react';
import { Modal } from '../../Modal/Modal';
import { useSessionContext } from '../../../context/sessionContext'
import LoadingSpinner from '../../Spinner/LoadingSpinner'

export function Rating({ objectId }) {

    const { values, onChangeHandler } = useForm({
        star: 0
    });
    const [votes, setVotes] = useState(0);
    const [hover, setHover] = useState(0);
    const [averageRate, setAverageRate] = useState(0);
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(false);
    const [hasVoted, setHasVoted] = useState(true);
    const { user } = useSessionContext();
    const [isLoading, setIsloading] = useState(true);
    const [errorRatingResults, setErrorRatingResults] = useState(false);
    const [errorRatingForm, setErrorRatingForm] = useState(false);

    const onRatingSubmit = async (e) => {
        e.preventDefault();

        if (values.star === 0) {

            setModalMessage('Please select a rate!');
            return setModal(true);
        }

        setHasVoted(true);

        try {

            await post('classes/Rating', { userId: user.userId, productId: objectId, stars: values.star })

        } catch {

            setModalMessage('Bad rating request. Please try again later or contact support.');
            setModal(true);
            return;
        }

    }

    useEffect(() => {

        async function fetchData() {

            let sum = 0;

            try {

                const response = await get(`/classes/Rating?where=%7B%20%22productId%22%3A%20%22${objectId}%22%20%7D`);
                setVotes(response.results.length);
                setAverageRate((response.results.map(x => Number(x.stars)).reduce((a, b) => a + b, sum)) / response.results.length);

            } catch {

                setErrorRatingResults(true);
            }

            if (user) {

                try {

                    const result = await get(`/classes/Rating?where=%7B%20%22userId%22%3A%20%22${user.userId}%22%2C%20%22productId%22%3A%20%22${objectId}%22%20%7D`);
                    setHasVoted(result.results.length !== 0 ? true : false);

                } catch {

                    setErrorRatingForm(true);
                }
            }

            setIsloading(false)
        }
        fetchData();

    }, [objectId, user, hasVoted]);

    const onMouseEvent = (prop) => {
        setHover(prop);
    }

    const starSelect = (prop) => {

        if (averageRate === prop) {

            return faStar;
        }

        if (averageRate >= prop && averageRate >= (prop + 1)) {

            return faStar;
        }

        if (averageRate >= prop && averageRate < (prop + 1)) {

            return faStarHalfAlt
        }

        return emptyStar
    }

    return (
        <>
            {modal && <Modal setModal={setModal} message={modalMessage} />}
            {user && !hasVoted &&
                (isLoading ?
                    <LoadingSpinner />
                    :
                    (!errorRatingForm
                        ?
                        <>
                            <div className={styles['rating-div']} >Your opinion is important to us. Please rate our product here:</div>
                            <form className={styles['star-rating']} onSubmit={(e) => onRatingSubmit(e)}>
                                <label htmlFor='oneStar'><FontAwesomeIcon className={`${styles['star']} ${hover >= 1 || values.star >= 1 ? styles['selected-star'] : ''}`} onMouseOver={() => onMouseEvent(1)} onMouseLeave={() => onMouseEvent(0)} icon={faStar} /></label>
                                <input type='radio' id='oneStar' name='star' value={1} onChange={(e) => onChangeHandler(e)} />
                                <label htmlFor='twoStar'><FontAwesomeIcon className={`${styles['star']} ${hover >= 2 || values.star >= 2 ? styles['selected-star'] : ''}`} onMouseOver={() => onMouseEvent(2)} onMouseLeave={() => onMouseEvent(0)} icon={faStar} /></label>
                                <input type='radio' id='twoStar' name='star' value={2} onChange={(e) => onChangeHandler(e)} />
                                <label htmlFor='threeStar'><FontAwesomeIcon className={`${styles['star']} ${hover >= 3 || values.star >= 3 ? styles['selected-star'] : ''}`} onMouseOver={() => onMouseEvent(3)} onMouseLeave={() => onMouseEvent(0)} icon={faStar} /></label>
                                <input type='radio' id='threeStar' name='star' value={3} onChange={(e) => onChangeHandler(e)} />
                                <label htmlFor='fourStar'><FontAwesomeIcon className={`${styles['star']} ${hover >= 4 || values.star >= 4 ? styles['selected-star'] : ''}`} onMouseOver={() => onMouseEvent(4)} onMouseLeave={() => onMouseEvent(0)} icon={faStar} /></label>
                                <input type='radio' id='fourStar' name='star' value={4} onChange={(e) => onChangeHandler(e)} />
                                <label htmlFor='fiveStar'><FontAwesomeIcon className={`${styles['star']} ${hover === 5 || values.star >= 5 ? styles['selected-star'] : ''}`} onMouseOver={() => onMouseEvent(5)} onMouseLeave={() => onMouseEvent(0)} icon={faStar} /></label>
                                <input type='radio' id='fiveStar' name='star' value={5} onChange={(e) => onChangeHandler(e)} />
                                <button type='submit'>Rate</button>
                            </form>
                        </>
                        :
                        <div className={styles['error']}>Could not load rating form</div>)
                )}

            {!errorRatingResults ? (isLoading ? <LoadingSpinner /> :
                <>
                    <p>Avg: {isNaN(averageRate) ? 0 : averageRate.toFixed(1)} / Total Votes: {votes}</p>
                    <div>
                        <FontAwesomeIcon className={styles['star-result']} icon={starSelect(1)} />
                        <FontAwesomeIcon className={styles['star-result']} icon={starSelect(2)} />
                        <FontAwesomeIcon className={styles['star-result']} icon={starSelect(3)} />
                        <FontAwesomeIcon className={styles['star-result']} icon={starSelect(4)} />
                        <FontAwesomeIcon className={styles['star-result']} icon={starSelect(5)} />
                    </div>
                </>) : <div className={styles['error']}>Could not load rating results</div>}
        </>
    )
}