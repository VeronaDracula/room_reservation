import React from 'react';

import styles from './MainButton.module.scss';



function MainButton(props) {

    const {
        text,
        action,
        styleClass = '',
    } = props;





    return (
        <button className={`${styles.btn} ${styleClass}`} onClick={action}>{text}</button>
    );
}

export default MainButton;