import { ActionsTypes } from "../store";
import { ticketsActions } from "./ticketsActions";
import ticketsInitial from '../../responses/get_tickets.json'
import { ProductCategoriesItem } from "../newBanknote/newBanknoteReducer";


let initialState: TicketInitial = ticketsInitial

export interface Determine {
    id: number
    day: number | null
    month: number | null
    year: number | null
    hours: number | null
    minutes: number | null
    is_templatable: boolean
}

export interface PeriodItem {
    id: number
    beg_datetime: Determine
    beg_datetime_id: number
    end_datetime: Determine
    end_datetime_id: number
    weekdays: string | null
    is_templatable: boolean
}

export interface TicketInitial {
    tickets: Array<ProductCategoriesItem>
    response_status: boolean
    response_error: string | null
}





export const ticketsReducer = (tickets = initialState, action: ActionsTypes<typeof ticketsActions>): TicketInitial => {

    switch (action.type) {
        case "ADD_TICKET":
            return {
                ...tickets,
                tickets: [...tickets.tickets.map((ticketI) => {
                    if(ticketI.id === action.ticketI.id){
                        ticketI.showAmount=true
                        if(action.value){
                            ticketI.amount = action.value
                        } else {
                            ticketI.amount=""
                        }
                    }
                    return ticketI
                })]
            }
        case "SET_TICKET_INFO":
            return {
                ...tickets,
                tickets:[...action.ticketI]
            }
        case "TOTALLY_DELETE_TICKET_ITEM":
            return {
                ...tickets,
                tickets: [...tickets.tickets.map((ticketI)=>{
                    if(ticketI.id === action.ticketI.id) {
                        delete ticketI.amount
                        ticketI.showAmount=false
                    }
                    return ticketI
                })]
            }
        default:
            return tickets
    }
}
