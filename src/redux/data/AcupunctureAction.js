import {
    Data,
    AcuPageLink,
    Error,
    Filter,
    AcuData,
    ActiveNav,

} from "./AcupunctureReducer"

export const addData = (data) =>{
    return {
        type : Data,
        payload : data 
    }
}

export const addPageLink = (data) =>{
    return {
        type : AcuPageLink,
        payload : data 
    }
}


export const error = (value) =>{
    return {
        type: Error,
        payload: value
    }
}

export const activeFilter = (value) =>{
    return {
        type: Filter,
        payload : value
    }
}

export const acupuntureData = (value) =>{
    return {
        type: AcuData,
        payload: value
    }
}

export const activeNav = (value) =>{
    return {
        type: ActiveNav,
        payload: value
    }
}
