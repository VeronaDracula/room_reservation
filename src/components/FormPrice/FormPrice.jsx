import React, { useEffect, useState } from 'react';
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

    const adults = useSelector((state) => state?.test?.data?.amountOfAdults || 1);
    const children = useSelector((state) => state?.test?.data?.amountOfChildren || 0);
    const childrenFive = useSelector((state) => state?.test?.data?.amountOfChildrenFive || 0);
    const nights = useSelector((state) => state?.test?.data?.amountOfNights || 1);
    const insuranceStatus = useSelector((state) => state?.test?.data?.insurance || false);
    // const typeOfRoom = useSelector((state) => state?.test?.data?.typeOfRoom || false);
    const typePrice = useSelector((state) => state?.test?.data?.typePrice || 1800);
    const total = useSelector((state) => state?.test?.data?.total || 0);

    useEffect(() => {

        countPrice();

    }, [adults, children, nights, insuranceStatus, typePrice])

    function tenPercent(value) {
        return value / 100 * 10
    }

    function countPrice () {
        let result = 0;
        let childrenPrice = Number(typePrice) / 2;
        result = Number(typePrice) * adults;

        if(children !== 0) {
            result =  result + (children * childrenPrice);
        }

        if(insuranceStatus === true) {
            result = result + tenPercent(result);
        }

        dispatch(testActions.setData({ value: result * nights, type: 'total' }));
    }




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

        if(value === 'Эконом') {
            dispatch(testActions.setData({ value: 1800, type: 'typePrice' }));
        } else if(value === 'Стандарт') {
            dispatch(testActions.setData({ value: 2800, type: 'typePrice' }));
        } else if(value === 'Люĸс') {
            dispatch(testActions.setData({ value: 4000, type: 'typePrice' }));
        }
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


    function maxChildrenFive () {
        let result = 0;
        result = adults * 3
        return result
    }



    function next() {
        showDataForm();
    }






    return (
        <div className={`${styles.price} ${!status ? styles.inactive : ''}`}>

            <p className={styles.price__text}>Количество взрослых</p>
            <InputNumber changeHandler={handlerAdults}
                valueInput={adults}
                 minValue={1}
            />

            <p className={styles.price__text}>Количество детей от 5 до 12 лет</p>
            <InputNumber
                changeHandler={handlerChildren}
                valueInput={children} />

            <p className={styles.price__text}>Количество детей до 5 лет</p>
            <InputNumber
                changeHandler={handlerChildrenFive}
                valueInput={childrenFive}
                maxValue={maxChildrenFive()}/>

            <p className={styles.price__text}>Тип номера</p>
            <div className={styles.price__list}>
                <RadioButton
                    defaultChecked={true}
                    onChange={selectType}
                    name={'type'}
                    value={'Эконом'}>
                    Эконом
                </RadioButton>

                <RadioButton
                    onChange={selectType}
                    name={'type'}
                    value={'Стандарт'}>
                    Стандарт
                </RadioButton>

                <RadioButton
                    onChange={selectType}
                    name={'type'}
                    value={'Люĸс'}>
                    Люкс
                </RadioButton>


            </div>

            <p className={styles.price__text}>Количество ночей</p>
            <InputNumber
                changeHandler={handlerNights}
                valueInput={nights}
                minValue={1}/>

            <p className={styles.price__text}>Страховка</p>
            <Checkbox checked={insuranceStatus} handleCheckbox={handleCheckbox} />

            <p className={styles.price__text}>Итого:</p>
            <p className={styles.price__total}>{total} ₽</p>

            <div className={styles.price__btns}>
                <MainButton text='Далее' action={next} />
            </div>
        </div >
    );
}

export default FormPrice;