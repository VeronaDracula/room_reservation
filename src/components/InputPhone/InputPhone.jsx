import React, { useContext, useEffect, useState } from 'react';

import styles from './InputPhone.module.scss';


function InputPhone(props) {

    const {
        placeholder,
        maxCount,
        styleClass = '',
        changeHandler,
        textInputPhone,
        errorStartus,
    } = props;


    // const [text, setText] = useState(textDefault || '');
    // const [isAmountSymbols, setIsAmountSymbols] = useState(amountSymbolsDefault || 0);

    function countSymbols(e) {

        changeHandler(e.target.value, false);
    }


    return (
        <div className={`${styles.inputPhone} ${errorStartus ? styles.error : ""}`}>

            <input className={`${styles.inputPhone__input} ${styleClass}`}
                value={textInputPhone || ""}
                placeholder={placeholder}
                onInput={(e) => { countSymbols(e) }} maxLength={maxCount}></input>

            <span className={`${styles.inputPhone__error} ${styleClass}`}>Допущена ошибка</span>
        </div>

    );
}

export default InputPhone;