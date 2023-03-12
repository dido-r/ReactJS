import { useState } from 'react';
import styles from './style/Faqs.module.css';

export function Faqs() {

    const [viewFaq, setViewFaq] = useState("")

    function showFaq(e) {
        setViewFaq(e.target.id);
    }

    return (
        <>
            <h2 className={styles['faq-head']}>FAQs</h2>
            <div className={styles['faq-container']}>
                <h2 className="title h2">Payment and Returns</h2>
                <div className={styles['faq-body']}>
                    <h4 id="collapseOne" className={styles['panel-title']} onClick={showFaq}>What is Lorem Ipsum?</h4>
                    <div style={viewFaq === "collapseOne" ? {height: "120px"} : {height: ""}} className={styles['panel-content']}>Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros. In vulputate metus lacus, eu vehicula dolor feugiat id. Nulla vitae nisl in ex consequat porttitor vel a lectus. Vestibulum viverra in velit ac consequat. Nullam porta nulla eu dignissim cursus.</div>
                </div>
                <div className={styles['faq-body']}>
                    <h4 id="collapseTwo" className={styles['panel-title']} onClick={showFaq}>Why do we use it?</h4>
                    <div style={viewFaq === "collapseTwo" ? {height: "120px"} : {height: ""}} className={styles['panel-content']}>Cras non gravida urna. Ut venenatis nulla in tellus lobortis, vel mollis lectus condimentum. Duis elementum sapien purus, et sagittis nulla efficitur in. Phasellus vitae eros sed nisi fringilla auctor nec quis nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rutrum faucibus nibh vitae fermentum. Aliquam commodo sem sit amet malesuada consectetur. Ut sit amet vestibulum diam. Etiam quis dictum turpis, eget condimentum velit. Sed cursus odio dapibus, consectetur massa sit amet, fringilla purus.</div>
                </div>
                <div className={styles['faq-body']}>
                    <h4 id="collapseThree" className={styles['panel-title']} onClick={showFaq}>How to use this template?</h4>
                    <div style={viewFaq === "collapseThree" ? {height: "120px"} : {height: ""}} className={styles['panel-content']} >Duis nec nisi id ligula dapibus maximus nec eu dui. Proin ornare, ipsum vitae tincidunt rutrum, diam neque accumsan turpis, a dignissim nisi libero non lacus. Nulla quis massa nulla. Morbi metus lacus, sagittis sed est vel, aliquet ultrices nibh. Morbi auctor ex eget egestas auctor.</div>
                </div>

                <h2 className="title h2">Shipping</h2>
                <div className={styles['faq-body']}>
                    <h4 id="collapseFour"  className={styles['panel-title']} onClick={showFaq}>What is Lorem Ipsum?</h4>
                    <div style={viewFaq === "collapseFour" ? {height: "120px"} : {height: ""}} className={styles['panel-content']}>Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros. In vulputate metus lacus, eu vehicula dolor feugiat id. Nulla vitae nisl in ex consequat porttitor vel a lectus. Vestibulum viverra in velit ac consequat. Nullam porta nulla eu dignissim cursus.</div>
                </div>
                <div className={styles['faq-body']}>
                    <h4 id="collapseFive" className={styles['panel-title']} onClick={showFaq}>Why do we use it?</h4>
                    <div style={viewFaq === "collapseFive" ? {height: "120px"} : {height: ""}} className={styles['panel-content']}>Cras non gravida urna. Ut venenatis nulla in tellus lobortis, vel mollis lectus condimentum. Duis elementum sapien purus, et sagittis nulla efficitur in. Phasellus vitae eros sed nisi fringilla auctor nec quis nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rutrum faucibus nibh vitae fermentum. Aliquam commodo sem sit amet malesuada consectetur. Ut sit amet vestibulum diam. Etiam quis dictum turpis, eget condimentum velit. Sed cursus odio dapibus, consectetur massa sit amet, fringilla purus.</div>
                </div>
                <div className={styles['faq-body']}>
                    <h4 id="collapseSix" className={styles['panel-title']} onClick={showFaq}>How to use this template?</h4>
                    <div style={viewFaq === "collapseSix" ? {height: "120px"} : {height: ""}} className={styles['panel-content']}>Duis nec nisi id ligula dapibus maximus nec eu dui. Proin ornare, ipsum vitae tincidunt rutrum, diam neque accumsan turpis, a dignissim nisi libero non lacus. Nulla quis massa nulla. Morbi metus lacus, sagittis sed est vel, aliquet ultrices nibh. Morbi auctor ex eget egestas auctor.</div>
                </div>
            </div>
        </>
    );
}