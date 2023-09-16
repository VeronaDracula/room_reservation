import React, { useContext, useEffect, useState } from 'react';

import styles from './CheckboxSlider.module.scss';


function CheckboxSlider(props) {

    const {
        handleCheckbox,
        checked
    } = props;


    return (
        <label className={styles.checkboxSlider}>
            <input className={styles.checkboxSlider__input} type="checkbox"
                   onChange={handleCheckbox}
                   checked={checked}/>
            <span className={styles.checkboxSlider__slider}></span>
        </label>
    );
}

export default CheckboxSlider;