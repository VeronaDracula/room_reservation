import React, {useEffect, useRef, useState} from 'react';
import DatePicker, { registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru";

import "react-datepicker/dist/react-datepicker.css";
import styles from './InputDate.module.scss';


function InputDate(props) {

    const {
        changeHandler,
        errorStatus,
    } = props;

    const [startDate, setStartDate] = useState(subtractYears(new Date(), 18));


    useEffect(() => {
        registerLocale('ru', ru);
    }, []);

    function subtractYears(date, years) {
        date.setFullYear(date.getFullYear() - years);
        return date;
    }



    function countSymbols(date) {
        changeHandler(new Date(date), false);
    }


    return (
        <div className={`${styles.inputDate} ${errorStatus ? styles.error : ""}`}>

            <DatePicker className={styles.inputDate__input}
                        selected={startDate}
                        maxDate={startDate}
                        onChange={(date) => {setStartDate(date); countSymbols(date)}}
                        dateFormat={'dd.MM.yyyy'}
                        locale='ru'
            />

            <span className={styles.inputDate__icon}></span>

            <span className={styles.inputDate__error}>Обязательное поле</span>
        </div>

    );
}

export default InputDate;