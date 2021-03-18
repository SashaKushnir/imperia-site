import React from 'react'
import {Determine, PeriodArray, PeriodItem, Ticket} from "../../../redux/tickets/ticketsReducer";
import {DataItem} from "./DataItem";
import styles from './TicketItemMap.module.css'
import {TicketImg} from "../../../common/compon/Ticket/TicketImg";

interface TicketItemProps {
    ticketItem: Ticket
}

export const TicketItemMap: React.FC<TicketItemProps> = ({ticketItem}) => {
    //const periodItem = Object.keys(periodArray.period.beg_datetime).map((val) =>
     //   <DataItem key={val} keyVal={val} value={periodArray.period.beg_datetime[val as keyof Determine]}/>)
    return <div className={styles.ticket}>
        <div className={styles.img}>
            <TicketImg/>
        </div>
        <div className={styles.item}>
            <div className={styles.title}>
                <div className={styles.name}>
                    {ticketItem.name}
                </div>
                <div className={styles.price}>
                    {ticketItem.price}$
                </div>

            </div>
            <div className={styles.desc}>
                {ticketItem.description}
            </div>
        </div>
        {/*{periodItem}*/}
    </div>
}