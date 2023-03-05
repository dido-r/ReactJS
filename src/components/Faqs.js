import styles from './style/Faqs.module.css';

export function Faqs() {

    function showFaq(prop) {
        let el = document.getElementById(prop);
        el.style.height === "" ? el.style.height = "100px" : el.style.height = "";
    }

    return (
        <>
            <h2 className={styles['faq-head']}>FAQs</h2>
            <div className={styles['faq-container']}>
                <h2 className="title h2">Payment and Returns</h2>
                <div className={styles['faq-body']}>
                    <h4 className={styles['panel-title']} aria-expanded="false" onClick={() => showFaq("collapseOne")}>What is Lorem Ipsum?</h4>
                    <div id="collapseOne" className={styles['panel-content']}>Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros. In vulputate metus lacus, eu vehicula dolor feugiat id. Nulla vitae nisl in ex consequat porttitor vel a lectus. Vestibulum viverra in velit ac consequat. Nullam porta nulla eu dignissim cursus.</div>
                </div>
                <div className={styles['faq-body']}>
                    <h4 className={styles['panel-title']} aria-expanded="false" onClick={() => showFaq("collapseTwo")}>Why do we use it?</h4>
                    <div id="collapseTwo" className={styles['panel-content']}>Cras non gravida urna. Ut venenatis nulla in tellus lobortis, vel mollis lectus condimentum. Duis elementum sapien purus, et sagittis nulla efficitur in. Phasellus vitae eros sed nisi fringilla auctor nec quis nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rutrum faucibus nibh vitae fermentum. Aliquam commodo sem sit amet malesuada consectetur. Ut sit amet vestibulum diam. Etiam quis dictum turpis, eget condimentum velit. Sed cursus odio dapibus, consectetur massa sit amet, fringilla purus.</div>
                </div>
                <div className={styles['faq-body']}>
                    <h4 className={styles['panel-title']} aria-expanded="false" onClick={() => showFaq("collapseThree")}>How to use this template?</h4>
                    <div className={styles['panel-content']} id="collapseThree">Duis nec nisi id ligula dapibus maximus nec eu dui. Proin ornare, ipsum vitae tincidunt rutrum, diam neque accumsan turpis, a dignissim nisi libero non lacus. Nulla quis massa nulla. Morbi metus lacus, sagittis sed est vel, aliquet ultrices nibh. Morbi auctor ex eget egestas auctor.</div>
                </div>
                <h2 className="title h2">Shipping</h2>
                <div className={styles['faq-body']}>
                    <h4 className={styles['panel-title']} aria-expanded="false" onClick={() => showFaq("collapseFour")}>What is Lorem Ipsum?</h4>
                    <div id="collapseFour" className={styles['panel-content']}>Nullam sed neque luctus, maximus diam sed, facilisis orci. Nunc ultricies neque a aliquam sollicitudin. Vivamus sit amet finibus sapien. Duis est dui, sodales nec pretium a, interdum in lacus. Sed et est vel velit vestibulum tincidunt non a felis. Phasellus convallis, diam eu facilisis tincidunt, ex nibh vulputate dolor, eu maximus massa libero vel eros. In vulputate metus lacus, eu vehicula dolor feugiat id. Nulla vitae nisl in ex consequat porttitor vel a lectus. Vestibulum viverra in velit ac consequat. Nullam porta nulla eu dignissim cursus.</div>
                </div>
                <div className={styles['faq-body']}>
                    <h4 className={styles['panel-title']} aria-expanded="false" onClick={() => showFaq("collapseFive")}>Why do we use it?</h4>
                    <div id="collapseFive" className={styles['panel-content']}>Cras non gravida urna. Ut venenatis nulla in tellus lobortis, vel mollis lectus condimentum. Duis elementum sapien purus, et sagittis nulla efficitur in. Phasellus vitae eros sed nisi fringilla auctor nec quis nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rutrum faucibus nibh vitae fermentum. Aliquam commodo sem sit amet malesuada consectetur. Ut sit amet vestibulum diam. Etiam quis dictum turpis, eget condimentum velit. Sed cursus odio dapibus, consectetur massa sit amet, fringilla purus.</div>
                </div>
                <div className={styles['faq-body']}>
                    <h4 className={styles['panel-title']} aria-expanded="false" onClick={() => showFaq("collapseSix")}>How to use this template?</h4>
                    <div className={styles['panel-content']} id="collapseSix">Duis nec nisi id ligula dapibus maximus nec eu dui. Proin ornare, ipsum vitae tincidunt rutrum, diam neque accumsan turpis, a dignissim nisi libero non lacus. Nulla quis massa nulla. Morbi metus lacus, sagittis sed est vel, aliquet ultrices nibh. Morbi auctor ex eget egestas auctor.</div>
                </div>
            </div>
        </>
    );
}