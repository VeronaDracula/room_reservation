import React, { useContext, useEffect, useState } from 'react';

import styles from './Checkbox.module.scss';

//checkbox
function Checkbox(props) {

    const {
        handleCheckbox,
        checked
    } = props;


    return (
        <div className={styles.checkbox} onClick={handleCheckbox}>
            <div className={styles.checkbox__cover}></div>
            <label className={styles.checkbox__labelCheckbox}>
                <input className={styles.checkbox__checkbox} type="checkbox"
                    name="" checked={checked} onChange={handleCheckbox} />
                <span className={styles.checkbox__checkboxIcon}></span>
            </label>
        </div>
    );
}

export default Checkbox;