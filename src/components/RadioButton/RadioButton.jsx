import React from 'react';
import styles from './RadioButton.module.scss';

const RadioButton = (props) => {

    const {
        value,
        name,
        defaultChecked,
        checked,
        onChange,
        children
    } = props;

    const onChangeNew = (event) => {
        const value = event.target.value;
        onChange(value);
    }


    return (
        <label className={styles.radio}>
            <input className={styles.radio__radio} value={value} type='radio' name={name} defaultChecked={defaultChecked} checked={checked} onChange={(event) => onChangeNew(event)} />
            <span className={styles.radio__radioIcon}>
                <span className={styles.radio__radioIconInside}></span>
            </span>

            <p className={styles.text}>{children}</p>
        </label>



    );
};

export default RadioButton;