import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';

import styles from './Checkbox.module.scss';

// import { getTest } from '../../Redux/asyncThunks/getTest';
// import { deletePost } from '../../Redux/asyncThunks/deletePost';
// import { getTestsList } from '../../Redux/selectors/selector';

import Loader from '../../Loader';
import FormPrice from '../FormPrice/FormPrice';




function Checkbox(props) {

    const {
        handleCheckbox,
        checked
    } = props;








    return (
        <div className={styles.documentPopup__agreement} onClick={handleCheckbox}>
            <div className={styles.documentPopup__agreementCover}></div>
            <label className={styles.documentPopup__agreementLabelCheckbox}>
                <input className={styles.documentPopup__checkbox} type="checkbox"
                    name="" checked={checked} onChange={handleCheckbox} />
                <span className={styles.documentPopup__agreementCheckboxIcon}></span>
            </label>
        </div>
    );
}

export default Checkbox;