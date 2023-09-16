import React, { useContext, useEffect, useRef } from 'react';
import IMask from 'imask';

import styles from './InputPhone.module.scss';


function InputPhone(props) {

    const {
        placeholder,
        changeHandler,
        valueInput,
        errorStatus,
    } = props;

    const phoneInputRef = useRef(null);

    useEffect(() => {
        const phoneMask = IMask(phoneInputRef.current, {
            mask: '+{7}00000000-00',
            lazy: false,
        });

        return () => {
            phoneMask.destroy();
        };
    }, []);



    function countSymbols(e) {
        changeHandler(e.target.value, false);
    }


    return (
        <div className={`${styles.inputPhone} ${errorStatus ? styles.error : ""}`}>

            <input className={styles.inputPhone__input}
                   ref={phoneInputRef}
                   value={valueInput || ''}
                   placeholder={placeholder}
                   onInput={(e) => { countSymbols(e) }}/>

            <span className={styles.inputPhone__error}>Обязательное поле</span>
        </div>

    );
}

export default InputPhone;