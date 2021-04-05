import yReact, {ChangeEvent, useEffect} from "react";

import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";
import styles from "./ServiceCategoriesI.module.css";
import {IntertaimentImg} from "../../../common/compon/Intartaiment/EntertainmentImg";
import {useDispatch} from "react-redux";
import {servicesActions} from "../../../redux/services/servicesActions";
import {NumericInput} from "../../../common/compon/InputNumber/InputNumber";
import React from "react";

interface ServiceCategoriesItemProps {
    serviceItem: ServiceCategoriesItem
    showAmount?: boolean
}

export const ServiceCategoriesIShowAmount: React.FC<ServiceCategoriesItemProps> = ({serviceItem, showAmount}) => {
    const d = useDispatch()

    const textInput = React.createRef<HTMLInputElement>()
    useEffect(() => {
        if (serviceItem.showAmount) {
            textInput.current?.focus()
        }
    }, [serviceItem.showAmount])

    const deleteItem = () => {
        d(servicesActions.deleteFullEntertainmentItem(serviceItem))

    }
    const changeCurS = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.match(/^(\d)*$/))
            d(servicesActions.addEntertainmentItem(serviceItem, e.target.value as any))
    }

    return <div>
        <div className={styles.intertaiment}>
            <div className={styles.img}>
                <IntertaimentImg entertainmentI={serviceItem}/>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>
                    {serviceItem.name}
                </div>
                <div className={styles.price1}>
                    <div className={styles.text}>Одноразова оплата</div>
                    <div className={styles.price}>{serviceItem.once_paid_price}$</div>
                </div>
                <div className={styles.price2}>
                    <div className={styles.text}>Оплата за годину</div>
                    <div className={styles.price}>{serviceItem.hourly_paid_price}$</div>
                </div>

                <div className={styles.input_block}>
                    <label htmlFor={"def"} className={styles.input_label}>Amount</label>
                    <input className={styles.input}
                        onChange={changeCurS}
                        value={serviceItem.amount ? String(serviceItem.amount) : ""}
                        placeholder={"Amount"}
                        ref={textInput}/>
                </div>
                <button onClick={deleteItem} className={styles.btn}>Delete</button>
            </div>
        </div>
    </div>
}
