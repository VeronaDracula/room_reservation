import React, { useContext, useEffect, useState } from 'react';

import styles from './InputNumber.module.scss';


function InputNumber(props) {

    const {
        placeholder,
        maxCount,
        styleClass = '',
        changeHandler,
        valueInput,
        errorStartus,
        text
    } = props;


    // const [text, setText] = useState(textDefault || '');
    // const [isAmountSymbols, setIsAmountSymbols] = useState(amountSymbolsDefault || 0);

    function countSymbols(e) {

        // if (e.target.value.match(/[^0-9]/g)) {
        //     // e.target.value = this.value.replace(/[^0-9]/g, "");



        //     console.log('df')

        //     // changeHandler(this.value.replace(/[^0-9]/g, ""), false);

        //     // console.log(e.target.value)
        // } else {
        //     // console.log(e.target.value)
        //     // changeHandler(e.target.value, false);
        // }

        // e.target.value = this.value.replace(/[^0-9]/g, "");

        // console.log(e.target.value.replace(/[^0-9]/g, ""))

        changeHandler(e.target.value.replace(/[^0-9]/g, ""));
    }


    return (
        <div className={`${styles.inputNumber} ${errorStartus ? styles.error : ""}`}>

            <input className={`${styles.inputNumber__input} ${styleClass}`}
                // type='number'
                min='0'
                value={valueInput || ''}
                placeholder={placeholder}
                onInput={(e) => { countSymbols(e) }} maxLength={maxCount}></input>

            <span className={`${styles.inputNumber__error} ${styleClass}`}>Допущена ошибка</span>
        </div>

    );
}

export default InputNumber;