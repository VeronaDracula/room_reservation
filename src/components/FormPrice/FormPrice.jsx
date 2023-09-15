import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import styles from './FormPrice.module.scss';

import { testActions } from "../../Redux/slice/slice";

import InputNumber from '../InputNumber/InputNumber';
import RadioButton from '../RadioButton/RadioButton';
import Checkbox from '../Checkbox/Checkbox';
import MainButton from '../MainButton/MainButton';

function FormPrice(props) {

    const {
        status,
        showDataForm
    } = props;

    const dispatch = useDispatch();

    const adults = useSelector((state) => state?.test?.data?.amountOfAdults || '');
    const children = useSelector((state) => state?.test?.data?.amountOfChildren || '');
    const childrenFive = useSelector((state) => state?.test?.data?.amountOfChildrenFive || '');
    const nights = useSelector((state) => state?.test?.data?.amountOfNights || '');
    const insuranceStatus = useSelector((state) => state?.test?.data?.insurance || false);
    const typeOfRoom = useSelector((state) => state?.test?.data?.typeOfRoom || false);


    // useEffect(() => {


    // }, [])

    const handlerAdults = (text) => {
        dispatch(testActions.setData({ value: text, type: 'amountOfAdults' }));
    }

    const handlerChildren = (text) => {
        dispatch(testActions.setData({ value: text, type: 'amountOfChildren' }));
    }

    const handlerChildrenFive = (text) => {
        dispatch(testActions.setData({ value: text, type: 'amountOfChildrenFive' }));
    }

    function selectType(value) {
        dispatch(testActions.setData({ value: value, type: 'typeOfRoom' }));
    }

    const handlerNights = (text) => {
        dispatch(testActions.setData({ value: text, type: 'amountOfNights' }));
    }

    function handleCheckbox() {
        if (insuranceStatus === true) {
            dispatch(testActions.setData({ value: false, type: 'insurance' }));
        }
        else {
            dispatch(testActions.setData({ value: true, type: 'insurance' }));
        }
    }


    // function openDataPopup {

    // }

    function next() {

        showDataForm();

        // console.log(adults)
        // console.log(children)
        // console.log(childrenFive)
        // console.log(typeOfRoom)
        // console.log(nights)
        // console.log(insuranceStatus)
    }






    return (
        <div className={`${styles.price} ${!status ? styles.inactive : ''}`}>


            <p className={styles.price__text}>Количество взрослых</p>
            <InputNumber changeHandler={handlerAdults}
                // errorStartus={linkErrorStatus}
                valueInput={adults}
            />

            <p className={styles.price__text}>Количество детей от 5 до 12 лет</p>
            <InputNumber
                changeHandler={handlerChildren}
                // errorStartus={linkErrorStatus}
                valueInput={children} />

            <p className={styles.price__text}>Количество детей до 5 лет</p>
            <InputNumber
                changeHandler={handlerChildrenFive}
                // errorStartus={linkErrorStatus}
                valueInput={childrenFive} />

            <p className={styles.price__text}>Тип номера</p>
            <div className={styles.price__list}>
                <RadioButton
                    defaultChecked={true}
                    onChange={selectType}
                    name={'type'}
                    value='Эконом'>
                    Эконом
                </RadioButton>

                <RadioButton
                    onChange={selectType}
                    name={'type'}
                    value='Стандарт'>
                    Стандарт
                </RadioButton>

                <RadioButton
                    onChange={selectType}
                    name={'type'}
                    value='Люкс'>
                    Люкс
                </RadioButton>


            </div>

            <p className={styles.price__text}>Количество ночей</p>
            <InputNumber
                changeHandler={handlerNights}
                // errorStartus={linkErrorStatus}
                valueInput={nights} />

            <p className={styles.price__text}>Страховка</p>
            <Checkbox checked={insuranceStatus} handleCheckbox={handleCheckbox} />

            <p className={styles.price__text}>Итого:</p>
            <p className={styles.price__total}>1 234 ₽</p>

            <div className={styles.price__btns}>
                <MainButton text='Далее' action={next} />
            </div>
        </div >
    );
}

export default FormPrice;