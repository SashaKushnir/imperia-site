import React, {ChangeEvent} from 'react'
import s from './BlankHeader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectBanquet, selectUsers} from "../../../selectors/selectCreateNew";
import {banquetActions} from "./../../../redux/banquetInfo/banquetInfoActions";

type PropsType = {
    isEdit: boolean
    CusMenuSwitch?: any
}

export const BlankHeader: React.FC<PropsType> = ({isEdit, CusMenuSwitch}) => {

    const d = useDispatch()

    const setName = (e: ChangeEvent<HTMLInputElement>) => {
        d(banquetActions.setName(e.target.value as any))
    }
    const setDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        d(banquetActions.setDescription(e.target.value as any))
    }
    const setAdvance = (e: ChangeEvent<HTMLInputElement>) => {
        d(banquetActions.setAdvance(e.target.value as any))
    }
    const data = useSelector(selectBanquet)

    const customers = useSelector(selectUsers)
    const customerInfo = customers.selectedCustomer

    const ChooseCustomer = () => {
        CusMenuSwitch(true)
    }

    const setBegining = (e: ChangeEvent<HTMLInputElement>) => {
        let time = e.target.value.replace("T"," ")
        console.log(time)
        time += ":00"
        d(banquetActions.setBegining(time))
    }
    const setEnd = (e: ChangeEvent<HTMLInputElement>) => {
        let time = e.target.value.replace("T"," ")
        time += ":00"
        d(banquetActions.setEnd(time))
    }
    return <div>
        <div className={s.info_bock}>
            {isEdit && <div className={s.margin}>
                <div className={s.banquetWithName}>
                    <input className={s.input} placeholder={"Banquet name"}
                           onChange={setName} defaultValue={data.name ? data.name : ""}/>
                </div>
                <div>
                    <textarea className={s.input} placeholder={"Description"} onChange={setDesc} defaultValue={data.description ? data.description : ""}/>
                </div>
            </div>
            }
            {!isEdit && <div className={s.margin}>
                <div className={s.banquetWithName}>
                    <input className={s.input} placeholder={"Banquet name"}
                           onChange={setName} value={data.name} readOnly/>
                </div>
                <div>
                    <textarea className={s.input} placeholder={"Description"} onChange={setDesc}
                              value={data.description ? data.description : ""} readOnly/>
                </div>
            </div>
            }

            <hr className={s.solid}/>
        </div>
        <div className={s.info_bock}>

            {isEdit && <div className={s.margin}>
                <div onClick={ChooseCustomer} className={s.customer}>
                    Customer: {customerInfo ? customerInfo?.name : ""}
                </div>
                <input type="datetime-local" id="meeting-time" className={s.time} onChange={setBegining}/>
            </div>
            }
            {!isEdit && <div className={s.margin}>
                <div className={s.customer}>
                    Customer: {customerInfo?.name}
                </div>
                <input type="datetime-local" id="meeting-time" className={s.time} value={data.beginnig} readOnly/>
            </div>
            }
            <div className={s.margin}>
                {isEdit && <div className={s.advance}>
                    Advance <input type="text" onChange={setAdvance}/>
                    <input type="datetime-local" id="meeting-time" className={s.time} onChange={setEnd}/>
                </div>}
                {!isEdit &&
                <div className={s.advance}>
                    Advance <input type="text" value={data.advance_amount} readOnly/>
                    <input type="datetime-local" id="meeting-time" className={s.time} value={data.end} readOnly/>
                </div>}
                <div className={s.advance}>
                    State <select>
                    <option>Planning</option>
                    <option>Booked</option>
                    <option>Finished</option>
                </select>
                </div>
            </div>
            <hr className={s.solid}/>
        </div>

    </div>
}
