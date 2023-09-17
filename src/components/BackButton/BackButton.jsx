import React from 'react';

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