import React, { useContext, useEffect, useState } from 'react';

import styles from './Input.module.scss';


function Input(props) {

    const {
        placeholder,
        maxCount,
        styleClass = '',
        changeHandler,
        valueInput,
        errorStatus,
        errorText = ''
    } = props;


    function countSymbols(e) {
        changeHandler(e.target.value, false);
    }


    return (
        <div className={`${styles.input} ${errorStatus ? styles.error : ""}`}>

            <input className={`${styles.input__input} ${styleClass}`}
                type='text'
                value={valueInput || ""}
                placeholder={placeholder}
                onInput={(e) => { countSymbols(e) }} maxLength={maxCount}/>

            <span className={`${styles.input__error} ${styleClass}`}>{errorText}</span>
        </div>

    );
}

export default Input;