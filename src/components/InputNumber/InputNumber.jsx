import React, { useState } from 'react';

import styles from './InputNumber.module.scss';


function InputNumber(props) {

    const {
        placeholder,
        maxCount,
        styleClass = '',
        changeHandler,
        valueInput,
        errorStatus,
        maxValue = Infinity,
        minValue = 0
    } = props;

    const [value, setValue] = useState(valueInput);


    function countSymbols(e) {
        changeHandler(e.target.value.replace(/[^0-9]/g, ""));
        setValue(e.target.value.replace(/[^0-9]/g, ""))
    }

    function up () {
        if(valueInput < maxValue) {
            setValue(Number(value) + 1);
            changeHandler(Number(value) + 1);
        }
    }

    function down () {
        if(valueInput > minValue) {
            setValue(Number(value) - 1);
            changeHandler(Number(value) - 1);
        }
    }



    return (
        <div className={`${styles.inputNumber} ${errorStatus ? styles.error : ""}`}>

            <div className={styles.inputNumber__inputBox}>
                <input className={`${styles.inputNumber__input} ${styleClass}`}
                       readOnly
                       type='text'
                       value={valueInput || ''}
                       placeholder={placeholder}
                       onInput={(e) => { countSymbols(e) }} maxLength={maxCount}/>

                <div className={styles.inputNumber__arrows}>
                    <button className={styles.inputNumber__up} onClick={up}></button>
                    <button className={styles.inputNumber__down} onClick={down}></button>
                </div>
            </div>

        </div>

    );
}

export default InputNumber;