import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';

import styles from './BackButton.module.scss';



function BackButton(props) {

    const {
        text,
        action
    } = props;





    return (
        <button className={styles.btn} onClick={action}>{text}</button>
    );
}

export default BackButton;