import React, {useState} from 'react';

import styles from './Content.module.scss';

import FormPrice from '../FormPrice/FormPrice';
import FormData from '../FormData/FormData';
import FinalInfo from '../FinalInfo/FinalInfo';
import Notification from '../Notification/Notification';



function Content() {

    const [priceForm, setPriceForm] = useState(true);
    const [dataForm, setDataForm] = useState(false);
    const [finalInfo, setFinalInfo] = useState(false);
    const [notification, setNotification] = useState(false);

    const [titles, setTitles] = useState(true);
    const [title, setTitle] = useState('Расчет стоимости');


    function showPriceForm() {
        setPriceForm(true);
        setDataForm(false);
        setFinalInfo(false);
        setNotification(false);

        setTitle('Расчет стоимости');
        setTitles(true);
    }

    function showDataForm() {
        setDataForm(true);
        setPriceForm(false);
        setFinalInfo(false);
        setNotification(false);

        setTitle('Данные покупателя');
    }

    function showFinalInfo() {
        setFinalInfo(true);
        setDataForm(false);
        setPriceForm(false);
        setNotification(false);

        setTitle('Подтверждение заказа');
    }

    function showNotification() {
        setFinalInfo(false);
        setDataForm(false);
        setPriceForm(false);
        setNotification(true);

        setTitles(false);
    }


    return (
        <div className={`${styles.content} ${titles ? '' : styles.notification}`}>
            <h1 className={styles.content__title}>Бронирование номера</h1>
            <p className={styles.content__subtitle}>{title}</p>

            <FormPrice status={priceForm} showDataForm={showDataForm} />
            <FormData status={dataForm} showPriceForm={showPriceForm} showFinalInfo={showFinalInfo} />
            <FinalInfo status={finalInfo} showDataForm={showDataForm} showNotification={showNotification}/>
            <Notification status={notification} showPriceForm={showPriceForm}/>
        </div>
    );
}

export default Content;
