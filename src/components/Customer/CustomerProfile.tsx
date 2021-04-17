import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {CustomerType} from "../../redux/customers/customersReducer";
import {Customers} from "./Customers";
import s from "./CustomerProfile.module.css"
import {customersActions} from "../../redux/customers/customersActions";
import {banquetActions} from "../../redux/banquetInfo/banquetInfoActions";

type PropsType = {
    customer: CustomerType
    CusMenuSwitch: any
}

export const CustomerProfile: React.FC<PropsType> = (props) => {

    const d = useDispatch()
    const cus = props.customer

    const Select = () => {
        d(banquetActions.setCustomer(cus))
        props.CusMenuSwitch(false)
    }

    return(<div className={s.profile}>
            <div className={s.name} onClick={Select}>
                {cus.name}
            </div>
            <div className={s.email}>
                {cus.email}
            </div>
            <div className={s.phone}>
                {cus.phone}
            </div>
            <div className={s.birthdate}>
                {cus.birthdate}
            </div>
        </div>
    )
}
