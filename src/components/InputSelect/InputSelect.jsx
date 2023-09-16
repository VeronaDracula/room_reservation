import React from 'react';

import styles from './InputSelect.module.scss';


function InputSelect(props) {

    const {
        changeHandler,
    } = props;


    function countSymbols(e) {
        changeHandler(e.target.value, false);
    }


    return (
        <div className={styles.inputSelect}>

            <select className={styles.inputSelect__input} name="type" onChange={(e) =>countSymbols(e)}>
                <option value="Эконом">Эконом</option>
                <option value="Стандарт">Стандарт</option>
                <option value="Люĸс">Люĸс</option>
            </select>

            {/*<input className={`${styles.inputSelect__input} ${styleClass}`}*/}
            {/*       type='select'*/}
            {/*       value={valueInput || ""}*/}
            {/*       placeholder={placeholder}*/}
            {/*       onInput={(e) => { countSymbols(e) }} maxLength={maxCount}/>*/}


        </div>

    );
}

export default InputSelect;