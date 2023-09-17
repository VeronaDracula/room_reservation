import React from 'react';

import styles from './Notification.module.scss';

import MainButton from '../MainButton/MainButton';


function Notification(props) {

    const {
        status,
        showPriceForm
    } = props;



    function next() {
        showPriceForm();
    }


    return (
        <div className={`${styles.notification} ${!status ? styles.inactive : ''}`}>

            <div className={styles.notification__img}></div>

            <p className={styles.notification__text}>Заказ успешно оплачен.</p>

            <div className={styles.notification__btns}>
                <MainButton styleClass={styles.notification__btn} text='Забронировать еще' action={next} />
            </div>
        </div>
    );
}

export default Notification;