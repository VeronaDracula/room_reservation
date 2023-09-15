import React, { useContext, useEffect, useState } from 'react';

import styles from './Input.module.scss';


function Input(props) {

    const {
        placeholder,
        maxCount,
        styleClass = '',
        changeHandler,
        valueInput,
        errorStartus,
    } = props;


    function countSymbols(e) {

        changeHandler(e.target.value, false);
    }


    return (
        <div className={`${styles.input} ${errorStartus ? styles.error : ""}`}>

            <input className={`${styles.input__input} ${styleClass}`}
                value={valueInput || ""}
                placeholder={placeholder}
                onInput={(e) => { countSymbols(e) }} maxLength={maxCount}></input>

            <span className={`${styles.input__error} ${styleClass}`}>Допущена ошибка</span>
        </div>

    );
}

export default Input;