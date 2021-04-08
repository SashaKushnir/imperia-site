import { ActionsTypes } from "../store";
import { commonActions } from "./forCommonActions";
import { UserType } from "../../api/login/login";


interface InitialCommonType {
    isFetching: boolean
    isAuthorised: boolean | null
    userInfo?: UserType
    message?: string
    needRedirect: boolean | null
    authByToken: boolean | null
    fullEmptyAmount: boolean | null

}

const initialState: InitialCommonType = {
    isFetching: false,
    needRedirect: false,
    isAuthorised: null,
    authByToken: false,
    fullEmptyAmount: null
}


export const commonReducer = (common = initialState, action: ActionsTypes<typeof commonActions>): InitialCommonType => {

    switch (action.type) {
        case "FETCHING_TOGGLE":
            return {
                ...common,
                isFetching: action.status
            }
        case "NEED_AMOUNT_TOGGLE":
            return {
                ...common,
                fullEmptyAmount: action.amountStatus
            }
        case "AUTH_BY_TOKEN":
            return {
                ...common,
                authByToken: action.statusAuthWithToke
            }
        case "AUTH_TOGGLE":
            return {
                ...common,
                isAuthorised: action.status
            }
        case "SET_NEED_REDIRECT":
            return {
                ...common,
                needRedirect: action.statusR
            }
        case "SET_UNAUTHORISED_DATA":
            return {
                ...common,
                message: action.payload
            }
        case "SET_AUTHORISED_DATA":
            return {
                ...common,
                userInfo: {...action.payload} as any,
                message: ""
            }
        case "LOG_OUT":
            return {
                ...common,
                userInfo: null,
                isAuthorised: false
            }
        default:
            return common
    }
}
